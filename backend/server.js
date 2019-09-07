var express = require('express'),
mongoose = require('mongoose'),
bodyParser = require('body-parser');

Score = require('./models/scoreModel'),

app = express(),
porta = process.env.PORT || 4000;

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_CLUSTER_URI || process.env.MONGODB_URI);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./routes/scoreRoutes');

routes(app);

app.listen(porta);
console.log(`Serviço Rest inicado na porta > ${porta}`)