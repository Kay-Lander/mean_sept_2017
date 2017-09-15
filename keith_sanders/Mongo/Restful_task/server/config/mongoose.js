const mongoose  = require('mongoose');
const fs = require('fs');

mongoose.connect('mongodb://localhost/taskmasterdb', { useMongoClient: true });
//override the Promise Library
mongoose.Promise = global.Promise;

let models_path = __dirname + '/../models'

fs.readdirSync(models_path).forEach((file) => {
   if(file.includes('.js')){
     console.log(`loading ${files}...`);
     require(`${models_path}/${file}`);
   }
})
