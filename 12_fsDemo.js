/*
列出album文件夹中的所有子文件夹
*/
var http = require("http");
var fs = require("fs");

var wenjianjia = [];
var server = http.createServer(function(req,res) {
	//不处理收藏夹小图标
	if(req.url == "/favicon.ico"){
		return;
	}
	//遍历album里面的所有文件,文件夹
	fs.readdir("./album/",function(err,files) {
		iterator(0,files);
	});
	res.end();
});

function iterator(i,files) {
	//遍历结束
	if(i == files.length){
		console.log(wenjianjia);
		return;
	}
	fs.stat("./album/"+files[i],function(err,stats) {
		//检测成功之后做的事情
		if(stats.isDirectory()){
			//如果是文件夹,放入数组,否则,什么也不做
			wenjianjia.push(files[i]);
		}		
		iterator(i+1,files);
	});
};

server.listen(3000,"127.0.0.1");