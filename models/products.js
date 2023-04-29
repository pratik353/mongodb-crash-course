const mongoose = require('mongoose');

// creating schema with he help of mongoose
const productSchema = mongoose.Schema({
    name: {type: String, required: true},
    price: { type: Number, required: true}
});

// model is used to use schema in our app
// Accept two args => name of schema and ceated schema 
module.exports = mongoose.model('Product', productSchema);