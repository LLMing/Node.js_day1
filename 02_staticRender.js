//这个案例是个演示，不用研究。说明Node.js没有web容器的概念，呈递的静态文件和URL没有任何关系。
//	访问127.0.0.1/fang实际显示的是test文件夹中的xixi.html页面
//	访问127.0.0.1/yuan实际显示的是test文件夹中的haha.html页面
//	相应的图片，都要有自己的路由

//require表示引包,引包就是引用自己的一个特殊功能
var http = require("http");
var fs = require("fs");

//创建服务器,参数是一个回调函数,表示如果有请求进来,要做什么
var server = http.createServer(function(req, res) {
	if (req.url == "/fang") {
		fs.readFile("./test.html", function(err, data) {
			//req表示请求,request; res表示响应,response
			//设置Http头部,状态码是200,文件类型是html,字符集是utf-8
			res.writeHead(200, {
				"Content-type": "text/html;charset=UTF-8"
			});
			res.end(data);
		});
	} else if (req.url == "/yuan") {
		fs.readFile("./haha.html", function(err, data) {
			//req表示请求,request; res表示响应,response
			//设置Http头部,状态码是200,文件类型是html,字符集是utf-8
			res.writeHead(200, {
				"Content-type": "text/html;charset=UTF-8"
			});
			res.end(data);
		});
	} else if (req.url == "/0.jpg") {
		fs.readFile("./0.jpg", function(err, data) {
			//req表示请求,request; res表示响应,response
			//设置Http头部,状态码是200,文件类型是html,字符集是utf-8
			res.writeHead(200, {
				"Content-type": "image/jpg;charset=UTF-8"
			});
			res.end(data);
		});
	} else {
		res.writeHead(404, {
			"Content-type": "text/html;charset=UTF-8"
		});
		res.end("没哟这个页面");
	}
});

//运行服务器,监听3000端口
server.listen(3000, "127.0.0.1");
console.log("Server running at http://127.0.0.1:8888/");