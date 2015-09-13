var express = require("express"),
app = express(),
db = require("./models"),
bodyParser = require("body-parser"),
methodOverride = require("method-override"),
morgan = require("morgan");

app.set("view engine", "ejs");
app.use(methodOverride("_method"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
app.use(morgan('tiny'));

app.get('/payments', function(req, res){
	db.Org.find({}, function(err, animals){
		if (err){
			res.render('errors/404')
		}
		else res.render('orgs/index', {orgs: orgs})
	})
})

app.get('*', function(req, res){
	res.render('errors/400');
})

app.listen(process.env.PORT || 8000, function(){
	console.log("listening on 8000");
});