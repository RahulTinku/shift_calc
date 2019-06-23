const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongojs = require('mongojs');

const employees = require('./server/controllers/employees');
const attendance  = require('./server/controllers/attendance');
const calculate = require('./server/controllers/calculate');
const shift = require('./server/controllers/shifts');
const routes = require('./server/routes/index');
const rosterShift = require('./server/controllers/rosterShift');
const users = require('./server/controllers/users');

const app = express();

var port = process.env.PORT || 8080;
var db = mongojs('mongodb://powerschool:Powerschool!123@ds261116.mlab.com:61116/shift_calculator', ['employees', 'attendance','shift']);

app.use(function(req,res,next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
	res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
	next();
});

//routes(express, app, {})
// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/shiftcalc'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/shiftcalc/index.html'));
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.set('shift_calculator', db);

app.use('/api', employees, attendance, calculate, shift, rosterShift, users);

app.listen(port, function() {
	console.log('Server started on Port: '+ port);
});