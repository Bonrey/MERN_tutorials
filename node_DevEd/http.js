const http = require('http');
const path = require('path');
const fs = require('fs');


const server = http.createServer((req, res) => {

  switch (req.url) {
    case '/':
      fs.readFile(path.join(__dirname, 'index.html'), 'utf8', (err, data) => {
        if (err) throw err;

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        res.end();
      });

      break;
    case '/specific':
      res.write('very specific page');
      res.end();
      break;
    default:
      res.write('Some other place');
      res.end();
  }
});

server.listen(499, () => {
  console.log('The server is up and running!');
});


