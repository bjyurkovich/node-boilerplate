import express from 'express'

/*   var express = require('express');  */

import bodyParser from 'body-parser'
import morgan from 'morgan'


let app = express();

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(morgan('tiny'));

import config from './configuration/config'

import auth from './middleware/auth'

import Hola from './routes/Hola'
import login from './routes/login'

app.get('/hola/:name', auth.jwtAuth, Hola.sayHelloInMexican);

app.post('/login', login.login) 


let server = app.listen(config.port, () => {
	console.log(`Starting server on port ${config.port}`);
})