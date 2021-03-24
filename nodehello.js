var http = require('http');

http.createServer(function(req, res){
  res.writeHead(200, {'content-type':'text/plain'});
  res.end('Hello Coditas from Nodejs');
}).listen(5000);

console.log ('Server is running on port 5000 !');
