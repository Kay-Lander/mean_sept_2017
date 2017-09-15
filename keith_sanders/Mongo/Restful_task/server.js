const express = require('express');
const bodyParser = require('body-parser');
const port = 8000;
const app = express();


app.use(bodyParser.json());

require('./server/config/mongoose');
require('./server/config/routes')(app);

app.listen(port, () => console.log(`listenin on port ${port}...`));
