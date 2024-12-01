///ini untuk membuat file 
const {readFile,writeFile} = require('fs');
console.log("starting")
readFile('./content/first.txt','utf8',(err,data)=>{
        if (err) {
            console.log('Error reading file', err);
            return;
        }const first = data;
        readFile('./content/second.txt','utf8',(err,data)=>{
            if (err) {
                console.log('Error reading file', err);
                return;
            } const second =data;
            console.log("sync")
            writeFile('./content/result_sync.txt',`here is the result file: ${first}, ${second}`,(err,data)=>{
                if (err) {
                    console.log('Error writing file', err);
                    return;
                }console.log("result")
            });
})
})
console.log("starting codingan untuk syncronus dan asyncronus");



