var express = require("express");

var session = require('express-session');
//app.use(session({secret: 'coding'}));

var bodyParser = require('body-parser')
//app.use(bodyParser.urlencoded({extended: true}));

var app = express();

app.use(session({
  secret: 'coding',
  resave: false,
  saveUnitialized: true,
}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

///routes
app.get('/', function(req, res){
  res.render('index')
});
app.post('/login', function(req, res){
  res.render('login', {"name": req.body.name, "location": req.body.location, "language": req.body.language, "comment": req.body.comment})
});


////End of page always
app.listen(8000, function() {
  console.log("listening on port 8000");
})
