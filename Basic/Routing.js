var express=require('express');
var app=express();
var router=express.Router();


//----------------------------/firstroute  path

app.use('/firstrout',router);

router.get('/',function(req,res){
    res.end("this is first route");
});

app.listen(8080,function(){
    console.log('wwowwwwww');
})