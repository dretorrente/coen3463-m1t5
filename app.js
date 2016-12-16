/**
 * Created by Dave Torrente on 12/16/2016.
 */
var express = require('express');
var app = express();
app.use(express.static("public"));
// app.use(express.static("node_modules/bootstrap/dist"))
// app.use(express.static("node_modules/bulma"))
app.get('/hello',function(req,res){
    res.send("Hello World!");
});

app.listen(3000,function(){
    console.log("ASDASDASD");
});
