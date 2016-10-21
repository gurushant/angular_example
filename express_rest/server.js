var express=require('express');
var app = express();
var bodyParser=require('body-parser');
var mysql=require('mysql');
var session=require('express-session');


app.use(bodyParser());
app.use(session({secret: 'ssshhhhh'}));


var connection=mysql.createConnection({host:'localhost',user:'root',password:'root',database:'admin'});
connection.connect();

const THRESHOLD=20;

app.listen(9090,function(){
	console.log('Listeneing on 9090 port');
});

app.get('/test',function(req,res){
	res.json({'message':'data from test'});
});


var session;
app.post('/rest/login',function(req,res){
	console.log(req.session);
	req.session.token='Pratibha';
	res.send("Logged in..");
});

app.get('/rest/login',function(req,res){
        console.log(req.session.token);
});

app.post('/rest/logout',function(req,res){
	req.session.destroy(function(err) {
  if(err) {
    console.log(err);
  } else {
    res.redirect('/');
  }
});
});


app.post('/rest/changePassword',function(req,res){
	jsonBody=req.body;
	console.log("Body is ",jsonBody);	
	var convJson=JSON.stringify(jsonBody);
	console.log("text=",convJson);
	res.header("Access-Control-Allow-Origin", "*");
	connection.query('update admin_user set pwd_data=? where id=1',[convJson],function(err,result)
                         {
                         });

	res.send("test...");
	
});

app.get('/',function(req,res){
    res.header('Access-Control-Allow-Origin', req.headers.origin);
  
res.send("Gurushant...");

});


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
