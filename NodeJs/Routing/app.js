const http = require('http');
const fs = require('fs');

function requestHandler(req, res) {
  console.log('Request received',req.url , req.method, req.headers); 
  res.setHeader('Content-Type', 'text/html');
  if (req.url === '/') {
  res.write(`
    <!DOCTYPE html>
<html lang="en">
<head>
  <title>Myntra</title>
</head>
<body>
    <h1>Welcome to First Server</h1>
    <form action="/buy-product" method="POST">
    <input type="text" placeholder="Enter Product Name" name="product"> <br>
    <input type="text" placeholder="Enter your budget" name="budget">
    <input type="submit">
  </form>
</body>
</html> `);
}else if ('/buy-product'){
  console.log('Form data received');
  const body = [];
  req.on('data', (chunk) => {
    console.log(chunk.toString());
    body.push(chunk);
  });
  req.on('end',() => {
    const parseBody = Buffer.concat(body).toString();
    console.log(parseBody);
  });
  fs.writeFileSync('produt.txt', 'My Product');
  res.statusCode = 302;
  res.setHeader('Location', '/product');
  console.log('Sending Response');
}else if (req.url === '/product'){
  res.write(`
    <!DOCTYPE html>
<html lang="en">
<head>
  <title>Product</title>
</head>
<body>
  <h1>Product list will appear here.</h1>
</body>
</html>`
);
}else{
  res.statusCode = 404;
  res.write(`
    <!DOCTYPE html>
<html lang="en">
<head>
  <title>Japan</title>
</head>
<body>
  <h1>404 Page Not Found</h1>
</body>
</html>`
);
}
res.end();
  
}

const server = http.createServer(requestHandler);
const port = 3000;
server.listen(port, () => {
  console.log(`Server is runing at: http://localhost ${3000}`);
});