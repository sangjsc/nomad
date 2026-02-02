const fs = require('fs');

// ClientPage.tsx
let file1 = fs.readFileSync('app/ClientPage.tsx', 'utf8');
if (!file1.includes('Docker Hub</a>')) {
  file1 = file1.replace(
    `                <a href="https://x.com/jscnwing9201" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">X</a>
              </p>`,
    `                <a href="https://x.com/jscnwing9201" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">X</a>
                {' | '}
                <a href="https://gravatar.com/ndmthai" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">Gravatar</a>
                {' | '}
                <a href="https://www.behance.net/nomadthai" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">Behance</a>
                {' | '}
                <a href="https://medium.com/@jscnwing920" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">Medium</a>
                {' | '}
                <a href="https://www.slideshare.net/slideshow/2026-2fe7/284836511" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">SlideShare</a>
                {' | '}
                <a href="https://hub.docker.com/r/cclfrhr/nomadthai-core-v1" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">Docker Hub</a>
              </p>`
  );
  fs.writeFileSync('app/ClientPage.tsx', file1, 'utf8');
  console.log('✅ ClientPage.tsx updated');
} else {
  console.log('⏭️  ClientPage.tsx already has Docker Hub link');
}

// LocationPage.tsx  
let file2 = fs.readFileSync('app/components/LocationPage.tsx', 'utf8');
if (!file2.includes('Docker Hub</a>')) {
  file2 = file2.replace(
    `                <a href="https://x.com/jscnwing9201" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">X</a>
              </p>`,
    `                <a href="https://x.com/jscnwing9201" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">X</a>
                {' | '}
                <a href="https://gravatar.com/ndmthai" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">Gravatar</a>
                {' | '}
                <a href="https://www.behance.net/nomadthai" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">Behance</a>
                {' | '}
                <a href="https://medium.com/@jscnwing920" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">Medium</a>
                {' | '}
                <a href="https://www.slideshare.net/slideshow/2026-2fe7/284836511" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">SlideShare</a>
                {' | '}
                <a href="https://hub.docker.com/r/cclfrhr/nomadthai-core-v1" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">Docker Hub</a>
              </p>`
  );
  fs.writeFileSync('app/components/LocationPage.tsx', file2, 'utf8');
  console.log('✅ LocationPage.tsx updated');
} else {
  console.log('⏭️  LocationPage.tsx already has Docker Hub link');
}
