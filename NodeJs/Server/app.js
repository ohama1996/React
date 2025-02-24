const http = require('http');

console.log('Hello World');

function requestHandler(req, res) {
  console.log('Request received', req.url, req.method, req.headers);
  res.setHeader('Content-Type', 'text/html');
  
    res.write(`
      <!DOCTYPE html>
  <html lang="en">
  <head>
    <title>Document</title>
  </head>
  <body>
    <h1>Hello World</h1>
  </body>
  </html>`
  );
  res.end();
}

const server = http.createServer(requestHandler);
const port = 3000;
server.listen(port, () => {
  console.log(`Server is runing at: http://localhost ${3000}`);
});