var fs = require('fs');

fs.readFileSync = function(path, encoding) {
    return fs.read(path);
}
