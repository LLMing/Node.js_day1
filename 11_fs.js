/*
列出album文件夹中的所有子文件夹
*/
var http = require("http");
var fs = require("fs");

var server = http.createServer(function(req,res) {
	if(req.url == "/favicon.ico"){
		return;
	}
	//存储所有的文件夹
	var wenjianjia = [];

	//stat状态检测
	fs.readdir("./album",function(err,files) {
		//files是个数组,表示./album这个文件夹中的所有东西
		//包括文件,文件夹
		for (var i = 0; i < files.length; i++) {
			var thefilename = files[i];

			fs.stat("./album/"+thefilename,function(err,status) {
				if(status.isDirectory()){
					wenjianjia.push(thefilename);
					console.log(thefilename);
				}
			});
		}
	});
	res.end();
});

server.listen(3000,"127.0.0.1");