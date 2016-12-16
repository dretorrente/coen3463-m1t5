/**
 * Created by Dave Torrente on 12/16/2016.
 */
var express = require('express');
//var bodyParser = require('body-parser');
//var nodemailer = require('nodemailer');
//var request = require('request');


var app = express();

//app.use(express.bodyParser());
//app.use(bodyParser.urlencoded({extended : false}));

app.set('port', (process.env.PORT || 3000));
app.use(express.static("public"));
// app.use(express.static("node_modules/bootstrap/dist"))
// app.use(express.static("node_modules/bulma"))
app.get('/',function(req,res){
    res.sendFile("index.html");
});
//app.post('/contact',function(req, res){
//
//    var Name = req.body.username;
//    var Email = req.body.email;
//    var Message = req.body.message;
//    res.send(Name + Email + Message);
//
////    var mailOpts, smtpTrans;
////    smtpTrans = nodemailer.createTransport({
////        service: 'Gmail',
////        auth: {
////            user: "dave.torrente@gmail.com",
////            password: "whaepekk"
////        }
////    });
////    mailOpts = {
////        from: Email + ' &lt;' + Email + '&ltl', //grab data
////        to: 'dave.torrente@gmail.com',
////        subject: 'Website contact',
////        text: Message + ' || Name: ' + Name + ' || Email: ' + Email
////    };
////    smtpTrans.sendMail(mailOpts, function(error, info){
////        //Email not sent
////        if(error) {
////            res.render('contact', {
////                title: 'Contact',
////                page: 'contact',
////                type:'error',
////                description: 'email not sent'
////            });
////        }
////        //Email sent
////        else{
////            res.render('contact', {
////                title: 'Contact',
////                page: 'contact',
////                type: 'success',
////                description: 'Email successfully sent!'
////            });
////        }
////    });
//////    var transporter = nodemailer.createTransport({
//////        service: 'Gmail',
//////        auth: {
//////            user: 'dave.torrente@gmail.com',
//////            pass: 'whaepekk'
//////        }
//////    });
//////
//////var mailOptions = {
//////    from: 'Dave Torrente <dave.torrente@gmail.com',
//////    to: 'dave.torrente@gmail.com',
//////    subject: 'Website',
//////    text: 'You have a submission with the following details... Name: ' + req.body.name+'Email: ' +req.body.email+'Message: '+req.body.message,
//////    html: '<p>You have submitted with the following details...</p><ul><li>Name: ' +req.body.name+'</li><li>Email: '+req.body.email+'</li><li>Message: '+req.body.message+'</li></ul>'
//////};
//////    transporter.sendMail(mailOptions,function(error,info){
//////        if(error){
//////            console.log(error);
//////            res.redirect('/');
//////        }else{
//////            console.log('Message Sent: '+info.response);
//////            res.redirect('/');
//////        }
//////    });
////
//});
app.listen(app.get('port'), function() {
    console.log('Expres server is running on port 3000!');
});
