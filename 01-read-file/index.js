const {readFile, readFileSync} = require('fs');
const txt = readFileSync('./01-read-file/text.txt', 'utf-8');
console.log(txt);
