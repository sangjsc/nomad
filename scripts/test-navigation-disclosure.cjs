// Run: node scripts/test-navigation-disclosure.cjs
// In-memory behavior checks only: no browser, network, contact clicks, or emitted files.
// The DOM below implements only the interfaces this disclosure uses. Browser QA
// remains responsible for native details toggling, focus order, and visual layout.
const assert = require('node:assert/strict')
const fs = require('node:fs')
const path = require('node:path')
const vm = require('node:vm')
const ts = require('typescript')

const filename = path.resolve(__dirname, '../components/NavigationDisclosure.tsx')
const compiled = ts.transpileModule(fs.readFileSync(filename, 'utf8'), {
  fileName: filename,
  compilerOptions: {
    module: ts.ModuleKind.CommonJS,
    target: ts.ScriptTarget.ES2020,
    jsx: ts.JsxEmit.ReactJSX,
  },
}).outputText

class TestNode extends EventTarget {
  constructor(parent = null) {
    super()
    this.parentNode = parent
    this.children = []
    if (parent) parent.children.push(this)
  }

  contains(target) {
    for (let node = target; node; node = node.parentNode) {
      if (node === this) return true
    }
    return false
  }
}

class TestElement extends TestNode {
  constructor(tagName, parent = null, attributes = {}) {
    super(parent)
    this.tagName = tagName
    this.attributes = attributes
    this.focusCalls = []
  }

  closest(selector) {
    assert.equal(selector, 'a[href]')
    for (let node = this; node; node = node.parentNode) {
      if (node.tagName === 'a' && Object.hasOwn(node.attributes, 'href')) return node
    }
    return null
  }

  querySelector(selector) {
    assert.equal(selector, 'summary')
    return this.children.find((child) => child.tagName === 'summary') || null
  }

  focus(options) {
    this.focusCalls.push(options)
  }
}

function event(type, target, properties = {}) {
  const value = new Event(type, { bubbles: true, cancelable: true })
  for (const [key, property] of Object.entries({ target, ...properties })) {
    Object.defineProperty(value, key, { value: property })
  }
  return value
}

function mount(initialPathname = '/icheon') {
  const document = new EventTarget()
  const menu = new TestElement('details')
  const summary = new TestElement('summary', menu)
  const panel = new TestElement('nav', menu)
  const outside = new TestElement('button')
  const children = [summary, panel]
  const hooks = []
  let hookIndex = 0
  let pathname = initialPathname
  let pending = []
  let rendered

  const react = {
    useRef(initial) {
      const index = hookIndex++
      if (!hooks[index]) hooks[index] = { current: initial }
      return hooks[index]
    },
    useEffect(callback, dependencies) {
      const index = hookIndex++
      const previous = hooks[index]
      const changed = !previous || dependencies.some((value, position) => !Object.is(value, previous.dependencies[position]))
      if (changed) pending.push(() => {
        previous?.cleanup?.()
        hooks[index] = { dependencies, cleanup: callback() }
      })
    },
  }
  const imports = {
    react,
    'next/navigation': { usePathname: () => pathname },
    'react/jsx-runtime': { jsx: (type, props) => ({ type, props }) },
  }
  const exports = {}
  vm.runInNewContext(compiled, {
    exports,
    require(request) {
      assert.ok(Object.hasOwn(imports, request), 'Unexpected import: ' + request)
      return imports[request]
    },
    document,
    Node: TestNode,
    Element: TestElement,
  }, { filename })

  function render(nextPathname = pathname) {
    pathname = nextPathname
    hookIndex = 0
    pending = []
    rendered = exports.default({ children, className: 'test-menu' })
    rendered.props.ref.current = menu
    for (const effect of pending) effect()
    return rendered
  }

  render()
  return {
    menu, summary, panel, outside, children, render,
    get rendered() { return rendered },
    click(target) {
      const click = event('click', target, { currentTarget: menu })
      rendered.props.onClick(click)
      return click
    },
    dispatch(type, target, properties) {
      const dispatched = event(type, target, properties)
      document.dispatchEvent(dispatched)
      return dispatched
    },
    blur(relatedTarget) {
      rendered.props.onBlur({ currentTarget: menu, relatedTarget })
    },
    unmount() {
      for (const hook of hooks) hook?.cleanup?.()
    },
  }
}

let passed = 0
function test(name, check) {
  const fixture = mount()
  try {
    check(fixture)
    passed += 1
    console.log('PASS ' + name)
  } finally {
    fixture.unmount()
  }
}

test('retains native details, children, and className', ({ rendered, children }) => {
  assert.equal(rendered.type, 'details')
  assert.equal(rendered.props.children, children)
  assert.equal(rendered.props.className, 'test-menu')
  assert.equal(rendered.props['data-navigation-disclosure'], true)
})

test('route, same-page, fragment, phone, and external links close without cancelling clicks', (fixture) => {
  for (const href of ['/yeoju', '/icheon', '#services', 'tel:01081867771', 'https://open.kakao.com/o/ssZxRuEh']) {
    const link = new TestElement('a', fixture.panel, { href })
    fixture.menu.open = true
    const click = fixture.click(link)
    assert.equal(fixture.menu.open, false, href)
    assert.equal(click.defaultPrevented, false, href + ': default navigation is preserved')
    assert.equal(click.cancelBubble, false, href + ': event propagation is preserved')
  }
})

test('nested SVG link target closes the menu', (fixture) => {
  const link = new TestElement('a', fixture.panel, { href: '/' })
  const svg = new TestElement('svg', link)
  const svgPath = new TestElement('path', svg)
  fixture.menu.open = true
  assert.equal(fixture.click(svgPath).defaultPrevented, false)
  assert.equal(fixture.menu.open, false)
})

test('summary and non-link clicks remain available to native details behavior', (fixture) => {
  for (const target of [fixture.summary, fixture.panel, new TestElement('a', fixture.panel), new TestNode(fixture.panel)]) {
    fixture.menu.open = true
    const click = fixture.click(target)
    assert.equal(fixture.menu.open, true)
    assert.equal(click.defaultPrevented, false)
  }
})

test('outside pointer closes; inside pointer and non-Node targets do not', (fixture) => {
  fixture.menu.open = true
  fixture.dispatch('pointerdown', fixture.panel)
  assert.equal(fixture.menu.open, true)
  fixture.dispatch('pointerdown', null)
  assert.equal(fixture.menu.open, true)
  const pointer = fixture.dispatch('pointerdown', fixture.outside)
  assert.equal(fixture.menu.open, false)
  assert.equal(pointer.defaultPrevented, false)
  assert.equal(fixture.summary.focusCalls.length, 0, 'Outside interactions retain their own focus')
})

test('Escape closes and restores summary focus without scrolling', (fixture) => {
  fixture.menu.open = true
  fixture.dispatch('keydown', fixture.panel, { key: 'Enter' })
  assert.equal(fixture.menu.open, true)
  fixture.dispatch('keydown', fixture.panel, { key: 'Escape' })
  assert.equal(fixture.menu.open, false)
  assert.equal(fixture.summary.focusCalls.length, 1)
  assert.equal(fixture.summary.focusCalls[0].preventScroll, true)
  fixture.dispatch('keydown', fixture.outside, { key: 'Escape' })
  assert.equal(fixture.summary.focusCalls.length, 1, 'Closed menus do not steal focus')
})

test('focus moving inside stays open; focus leaving or lost closes', (fixture) => {
  fixture.menu.open = true
  fixture.blur(fixture.panel)
  assert.equal(fixture.menu.open, true)
  fixture.blur(fixture.outside)
  assert.equal(fixture.menu.open, false)
  fixture.menu.open = true
  fixture.blur(null)
  assert.equal(fixture.menu.open, false)
})

test('pathname change closes while an unrelated same-path render preserves open state', (fixture) => {
  fixture.menu.open = true
  fixture.render('/icheon')
  assert.equal(fixture.menu.open, true)
  fixture.render('/yeoju')
  assert.equal(fixture.menu.open, false)
  assert.equal(fixture.summary.focusCalls.length, 0, 'Route updates do not steal focus')
})

test('unmount removes both document listeners', (fixture) => {
  fixture.unmount()
  fixture.menu.open = true
  fixture.dispatch('pointerdown', fixture.outside)
  assert.equal(fixture.menu.open, true)
  fixture.dispatch('keydown', fixture.panel, { key: 'Escape' })
  assert.equal(fixture.menu.open, true)
  assert.equal(fixture.summary.focusCalls.length, 0)
})

console.log(`PASS ${passed} navigation disclosure checks. Native focus order and layout require browser QA.`)
