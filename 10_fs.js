/*
fs模块的stat函数,检测文件状态.
回调函数中的stats有isDirectory()方法,可以判断是否为文件夹
*/
var http = require("http");
var fs = require("fs");

var server = http.createServer(function(req,res) {
	if(req.url == "/favicon.ico"){
		return;
	}
	//stat状态检测
	fs.stat("./album/aaa",function(err,data) {
		//isDirectory()检测这个路径是不是一个文件夹
		console.log(data.isDirectory());
	});
	res.end();
});

server.listen(3000,"127.0.0.1");