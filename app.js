var mongoClient = require("mongodb").MongoClient;
var url = "mongodb+srv://admin:admin@app-3596a.mongodb.net/app?retryWrites=true";
var express = require("express");
var path = require("path");
var mysql = require("mysql")
var bodyParser= require("body-parser");
var urlencodedparser = bodyParser.urlencoded({ extended: false });
var app = express();
var port = process.env.PORT || 8080;

app.use(express.static("public"));
//connect to mySQL
/*.use("/", function(req, res, next)
{

	var con = mysql.createConnection
	({
		host:"remotemysql.com",
		user: "0FxTyioZ4Z",
		password: "krdhosB0D3",
		database: "0FxTyioZ4Z",
		port:3306
	});
	con.query("SELECT * FROM mytable", function(err, rows){
		if(err) throw err;
		console.log(rows[0].name + " " + rows[0].nutritionper100gsugars);
	});
	next();
	
});*/




app.post("/users", urlencodedparser, function(req, res){
	res.send("thank you, the data has been received.");
	console.log(req.body.username);
	console.log(req.body.email);
	console.log(req.body.password);
	console.log(req.body.confirm);
	mongoClient.connect(url, {useNewUrlParser:true}, function(err,db){	
		if(err) throw err;
		console.log("successful collection");
		var database = db.db("carbAppDB");
		var obj = {
			firstname:req.body.firstname,
			lastname:req.body.lastname,
			email:req.body.email,
			password:req.body.password,
			confirm:req.body.confirm
		};
		database.collection("users").insertOne(obj, function(err,result){
			if(err) throw err;
			console.log("data has been enter to the users table");
			
		});
	});
});

//Route for querying all food types
app.get("/foods", function(req, res) {
	var con = mysql.createConnection
	({
		host:"remotemysql.com",
		user: "0FxTyioZ4Z",
		password: "krdhosB0D3",
		database: "0FxTyioZ4Z",
		port:3306
	});
	con.query("SELECT name, nutritionper100gcarbohydrate, nutritionper100gprotein, nutritionper100gfat, nutritionper100gsugars   FROM mytable LIMIT 10", function(err, result){
		if(err) throw err;
		res.json(result);
		
	});
});

app.get("/", function(req, res){
	
	res.sendFile("G:/carbsApp/login.html");
	//console.log("the server is listening to the port");
		
});

//route to handle the path(/home)
app.get("/home", function(req, res){
	res.sendFile("G:/carbsApp/home.html");
});

//route to handle the path(/food)
app.get("/food", function(req, res){
	res.sendFile("G:/carbsApp/food.html");
});

//route to handle the path(/login)
app.get("/login", function(req, res){
	res.sendFile("G:/carbsApp/login.html");
});

//route to handle the path(register)
app.get("/register", function(req, res){
	res.sendFile("G:/carbsApp/register.html");
});

app.listen(port);