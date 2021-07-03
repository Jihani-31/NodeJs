var mod=require('./modules');
var http=require('http');

http.createServer(function(req,res){
    res.end("hello module");
}).listen(8080);

console.log("node running");

mod.f2();
mod.f1();
console.log(mod.myvar);