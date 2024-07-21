const fs = require('fs');
const path = require('path');

fs.access(path.join(path.dirname(__dirname), "lib"), (err) => {
  if (!err) {
    fs.rm('lib', { recursive: true }, (err) => {});
  }
});
