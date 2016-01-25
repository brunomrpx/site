var finalhandler = require('finalhandler')
var http = require('http')
var serveStatic = require('serve-static');
var port = 80;

// Serve up public/ftp folder
var serve = serveStatic('./public', {'index': ['index.html', 'index.htm']})

// Create server
var server = http.createServer(function(req, res){
  var done = finalhandler(req, res)
  serve(req, res, done)
})

// Listen
server.listen(port)

console.log('Server started on localhost:' + port);
