const fs = require('fs');

try {
  fs.writeFileSync('file.txt', 'Hello world', { flag: 'w' });
  console.log('File written successfully');
} catch (err) {
  console.error('An error occurred:', err);
}
