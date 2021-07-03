var express=require('express');
var app=express();
var fs=require('fs');  //file sysytem
var path=require('path');

app.use('/myfiles',express.static(__dirname+'/css'));

app.get("/",function(request,response){
    response.sendFile("home.html",{root:__dirname});
});

app.get(/^(.+)/,function(request,response){
    // response.sendFile(request.params[0]+'.html',{root:path.join(__dirname,'views')});
    try{
        if(fs.statSync(path.join(__dirname,'views',request.params[0]+'.html'))){
            response.sendFile(request.params[0]+'.html',{root:path.join(__dirname,'views')});
        }
    }
    catch(error){
        response.sendFile('404.html',{root:path.join(__dirname,'views')});
    }
});

app.listen(8080,function(){
    console.log('surver is runnning');
})
 