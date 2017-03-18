
var http = require("http");
var url = require("url");
var fs = require("fs");
var path = require("path");

var server = http.createServer(function(req,res) {
	//得到用户路径
	var pathname = url.parse(req.url).pathname;
	if(pathname == "/"){
		pathname = "index.html";
	}

	//拓展名
	var extname = path.extname(pathname);

	//真的读取这个文件
	fs.readFile("./static/"+pathname,function(err,data) {
		if(err){
			//如果此文件不存在,应该返回404
			fs.readFile("./static/404.html",function(err,data) {
				res.writeHead(404,{"Content-Type":"text/html;charset=UTF8"});
				res.end(data);
			});
			return;
		};
		/*
		MIME类型,就是
		网页文件: text/html
		jpg文件: image/jpg
		*/
		var mime = getMime(extname);
		res.writeHead(200,{"Content-Type":mime});
		res.end(data);
	});
});

function getMime(extname) {
	switch(extname){
		case ".html" :
			return "text/html";
			break;
		case ".jpg" :
			return "image/jpg";
			break;
		case ".css":
			return "text/css";
			break;
	}
}

server.listen(3000,"127.0.0.1");