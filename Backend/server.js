const http = require('http')
const fs= require('fs');

const filecontent = fs.readFileSync('text.txt')

const server = http.createServer((req, res)=>{
    res.writeHead(200,{'content-type':'text/plain'});
    res.end(filecontent)
})

server.listen(80,'127.0.0.1',()=>{
    console.log('listening on port 80')
})