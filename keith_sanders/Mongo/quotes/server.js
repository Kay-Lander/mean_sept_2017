const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');
const port = 8000;
const app = express();

//set u pmiddleware
app.use(express.static(__dirname + '/static'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
        secret: 'cndsiaois',
        resave: false,
        saveUninitialized: true,
}))

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views')

//connect to database
mongoose.connect('mongodb://localhost/keith_leads', {useMongoClient: true})
mongoose.Promise = global.Promise;

let QuoteSchema = new mongoose.Schema({
          name: {
            type: String,
            required: [true, 'Name cannot be blank'],
            minlength: [2, 'Name must be greater than 2 characters'],
          },
          quote: {
            type: String,
            required: [true, 'Quote cannot be blank'],
            maxlength: [100000, 'Name must be less than 100000 characters']
          },

}, { timestamps: true })

//register a model by passing in a Schema
mongoose.model('Quote', QuoteSchema)

//extract a model by omitting the Schema
//this must happen after you register a model
const Quote = mongoose.model('Quote');

//routes
app.get('/', function(req, res) {
    res.render('index');
})
// Add User Request
app.post('/quote', function(req, res) {
    console.log(req.body);
    Quote.create(req.body, (err, quote) => {
                if(err){
                  console.log(err)
                }
                return res.redirect('quote')
    })
})

app.get('/quote', function(req, res) {
    Quote.find({}, (err, quotes) =>{
          if(err){
            console.log(err);
          } else {
            res.render('quote', { quotes: quotes})
          }
    })
})
// Setting our Server to Listen on Port: 8000
app.listen(port, () => console.log(`listening on port ${port}...`))
