'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config')

const app = express();
const router = express.Router();

//Conectar ao banco de dados
mongoose.connect(config.connectionString)

//Carregar os Models
const Product = require('./models/product');
const User = require('./models/user');
const Order = require('./models/order');

//Carrega as Rotas
const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/product-route');
const userRoute = require('./routes/user-route');
const orderRoute = require('./routes/order-route');

app.use(bodyParser.json({
    limit:'5mb'
}));
app.use(bodyParser.urlencoded({
    extended: false
}));

// Habilita o CORS
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});

app.use('/', indexRoute);
app.use('/products', productRoute);
app.use('/users', userRoute);
app.use('/orders', orderRoute);

module.exports = app;

