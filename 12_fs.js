/*
列出album文件夹中的所有子文件夹
*/
var http = require("http");
var fs = require("fs");

var server = http.createServer(function(req,res) {
	//不处理收藏夹小图标
	if(req.url == "/favicon.ico"){
		return;
	}
	//遍历album里面的所有文件,文件夹
	fs.readdir("./album/",function(err,files) {
		//files是一个存放文件(夹)名的数组
		//存放文件夹的数组
		var wenjianjia = [];

		//使用立即函数,传入i,以0开始
		//强行将异步函数变为同步函数
		(function iterator(i) {
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
				iterator(i+1);
			});
		})(0);
	});

	res.end();
});

server.listen(3000,"127.0.0.1");