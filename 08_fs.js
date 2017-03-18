var http = require("http");
var fs = require("fs");

var server = http.createServer(function(req,res) {
	if(req.url == "/favicon.ico"){
		return;
	}
	var userid = parseInt(Math.random()*89999)+10000;
	console.log(userid + "开始执行")
	while(true){
		console.log(1);
	}
	res.writeHead(200,{"Content-Type":"text/html;charset=UTF8"});
	//两个参数,第一个是完整路径,当前目录写./
	//第二个参数,就是回调函数,表示文件读取成功之后做的事
	fs.readFile("./test/a.txt",{"charset":"utf-8"},function(err,data) {
		if(err){
			throw err;
		}
		console.log(userid+"文件读取完毕");
		res.end(data);
	});
	console.log(2);
});

server.listen(3000,"127.0.0.1");