// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

var fs = require('fs')

var contents = fs.readFileSync('./package.json', 'utf8')
alert(contents)
