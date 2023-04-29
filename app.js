const express = require('express');
const bodyParser = require('body-parser');

// const mongoPractice = require('./mongo');
const mongooosePractice = require('./mongoose');

const app = express();

app.use(bodyParser.json());

// app.post('/products', mongoPractice.createProduct);
app.post('/products', mongooosePractice.createProduct);

// app.get('/products', mongoPractice.getProducts);
app.get('/products', mongooosePractice.getProducts);

app.listen(3000);