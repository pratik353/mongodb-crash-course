# install mongodb in project
npm install --save mongodb

# their are two ways two wayes to connect mangodb databse
--> useing plane mongodb driver:
# import mongodb client
const MongoClient = require('mongodb').MongoClient;
# creating mongodb client
const client = new MongoClient(url);
# connecting to mangodb client
await client.connect();
# connecting to mongodb database
const db = client.db('product_test');
# inserting into db
const result = db.collection('products').insertOne(newProduct);


--> useing mongoose
# import mongoose
const mongoose = require('mongoose');
# creating schema with he help of mongoose
const productSchema = mongoose.Schema({
    name: {type: String, required: true},
    price: { type: Number, required: true}
});
# export schema
module.exports = mongoose.model('Product', productSchema);
# connecting mongodb with database help of mongoose
mongoose.connect(url).then(()=>{
    console.log('Connected to database.');
}).catch((err)=>{
    console.log("Connection failed!");
});
# save document into database
const result = await createdProduct.save();

