var express = require("express");

var session = require('express-session');
//app.use(session({secret: 'coding'}));

var bodyParser = require('body-parser')
//app.use(bodyParser.urlencoded({extended: true}));

var app = express();

app.use(session({
  secret: 'codingdojo will be dnfaiosdiofnidsanjksdanivundsjkvbhkjdsnjkvanasdnvkdsnafjkdsnjkmkdslangkjdnkgdfnsioagnfdangklfdsjoignklfdngiufdnmbnbifudnbvlmfdn;uivnfjkdvbviufdnjvvkfdnijvvnfdklnvbuiv;nfklddvniofdnm,vcndioudbnbklfdnbiofdnklbns;idujkf ddjkvbnfdklbnj;fdnb,mfdnbjkl',
  resave: false,
  saveUnitialized: true,
}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

///routes
app.get('/', function (req, res) {
  if (!req.session.num){
    req.session.num = Math.floor(Math.random() * 1 + 100);
    console.log(`The number is ${req.session.num}`);
  }
  res.render('index')
});

if (!req.session.guess){
}



app.get('/reset', function (req, res)  {
req.session.count = 0;
return res.redirect('/');
});



////End of page always
app.listen(8000, function() {
  console.log("listening on port 8000");
})
