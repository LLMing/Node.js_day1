/*
req.url的演示，能够得到用户的请求的地址
*/

var http = require("http");

var server = http.createServer(function(req,res) {
	console.log(req.url);
	res.end();
});

server.listen(3000,"127.0.0.1");