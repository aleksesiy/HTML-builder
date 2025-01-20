const fs = require('fs')
const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.srdout
})
console.log('Write your text')

rl.question('', (input) => {
    fs.writeFile('./02-write-file/text-02.txt', input, (err) => {
        rl.close()
    })
})