var express=require('express');
var app=express();

app.get("/",function(request,response){
    response.send("hello from exee");
});
app.listen(8080,function(){
    console.log('server is up');
});