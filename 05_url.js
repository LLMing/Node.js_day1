/*
url模块很好用，里面有url.parse()方法，能够将url拆分成为很多部分
*/

var http = require("http");
var url = require("url");

var server = http.createServer(function(req,res) {
	//url.parse()可以将一个完整的URL地址,分为很多部分
	//host,port,pathname,path,query
	var pathname = url.parse(req.url).pathname;
	//url.parse()如果第二个参数是true,那么就可以将所有查询结果变为对象
	//就可以直接打点得到参数
	var query = url.parse(req.url,true).query;
	var age = query.age;

	console.log("pathname:"+pathname);
	//console.log("query:" + query);
	console.log("age:" + age);

	res.end();
});

server.listen(3000,"127.0.0.1");