//fs模块的mkdir函数,创建文件夹
var http = require("http");
var fs = require("fs");

var server = http.createServer(function(req,res) {
	if(req.url == "/favicon.ico"){
		return;
	}
	fs.mkdir("./album/aaa");
	res.end();
});

server.listen(3000,"127.0.0.1");