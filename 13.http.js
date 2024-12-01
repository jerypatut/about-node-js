const http = require('http')


const server = http.createServer((req, res) => {
    if (req.url === '/') {
res.end('welcome to my website');
    }else if (req.url === '/about') {
        res.statusCode = 200;
        res.end('welcome to my about')
    }else if (req.url=== '/contact') {
        res.statusCode = 200;
        res.end("welcome to my contact page");
    }else{
        res.statusCode = 404;
    res.end(`
        <h1>uppss!</h1>
        <p>page not found</p>
        <a href="/">back to home</a>
        `)
    }

});
server.listen(5000)
console.log("server runninbg in port 5000")