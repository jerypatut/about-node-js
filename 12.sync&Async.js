///ini untuk membuat file 
const {readFile,writeFile, readFileSync, writeFileSync} = require('fs');
console.log('start');
const first = readFileSync('./content/first.txt');
const second = readFileSync('./content/second.txt');

writeFileSync('./content/result_sync.txt',
    `here is the result file: ${first}, ${second}`,
    {flag:"a"}
)
    console.log('dones with this ask');
    console.log('starting codingan'); //


