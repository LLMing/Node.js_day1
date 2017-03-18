/*
req对象的end()方法、write()方法、writeHead()方法
*/


//简单讲解http模块
//引用模块
var http = require("http");

//创建一个服务器,回调函数表示接受到请求之后做的事情
var server = http.createServer(function(req,res){
	//req参数表示请求,res表示响应
	console.log("服务器接收到了请求"+req.url);
	res.writeHead(200,{"Content-Type":"text/html;charset=UTF8"})
	res.write("<h1>这是主标题</h1>");
	res.write("<h2>这是副标题</h2>");
	res.end("<h1>这是一个主标题</h1>");
});

//监听端口
server.listen(3000,"127.0.0.1");