const mongoose = require('mongoose');
const fs = require('fs');


mongoose.connect('mongodb://localhost/somenewdb', { useMongoClient: true });
//overwrite the Promise library
mongoose.Promise = global.Promise;

let models_path = __dirname + '/../models';

fs.readdirSync(models_path).forEach((file) => {
	if(file.includes('.js')){
		console.log(`loading ${file}...`);
		require(`${models_path}/${file}`);
	}
})
