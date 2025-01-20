const fs = require('fs')
//const readFile = require('fs');
fs.readFile('./01-read-file/text.txt', 'utf-8', (txt, err) => {
    if (err) {
        console.error(err)
        return
    }
    console.log(txt);
});
