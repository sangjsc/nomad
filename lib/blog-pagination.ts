// Only decimal URL segments represent page numbers; JS numeric aliases do not.
export function parsePageNumber(rawPage: string): number | null {
  if (!/^[0-9]+$/.test(rawPage)) {
    return null
  }

  const page = Number(rawPage)
  return Number.isSafeInteger(page) && page >= 1 ? page : null
}
