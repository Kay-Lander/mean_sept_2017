let express = require("express");
//app.use(session({secret: 'coding'}));
let bodyParser = require('body-parser')
//app.use(bodyParser.urlencoded({extended: true}));
let app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

///routes
app.get('/', function(req, res){
  res.render('index')
});

////End of page always
let server = app.listen(8000, function() {
  console.log("listening on port 8000");
});

let io = require('socket.io').listen(server);

io.sockets.on('connection', (socket) => {
  console.log("Client/socket is connected!!");
  console.log("Client/socket id is:",socket.id);

  //listener
  socket.on('posting_form', function(data) {
    let random_num = Math.floor((Math.random()* 1000) + 1);
  //emit
  socket.emit('updated_msg', {res: data});
  socket.emit('random_num', {res: random_num});
  })
})
