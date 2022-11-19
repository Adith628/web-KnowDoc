const http= require('http');
const fs= require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  console.log(req.url);
  url = req.url;
  const home = fs.readFileSync('login.html') 
  const Next= fs.readFileSync('Home.html')
  const regis= fs.readFileSync('register.html')

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  if(url=='/'){
    res.end(home);
  }
  else if(url=='/Home'){
    res.end(Next);
  }
  else if(url=='/register'){
    res.end(regis);
  }

});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});