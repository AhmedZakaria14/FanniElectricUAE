const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.js')) {
        const content = fs.readFileSync(file, 'utf8');
        if (content.includes('Html') || content.includes('next/document')) {
          console.log('Found in', file);
          console.log(content.substring(Math.max(0, content.indexOf('Html') - 50), content.indexOf('Html') + 50));
        }
      }
    }
  });
  return results;
}

walk('./app');
walk('./components');
