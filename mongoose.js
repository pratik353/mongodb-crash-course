const mongoose = require('mongoose');

const Product = require('./models/products');

const url = "mongodb+srv://mongodb-learn:pratik123@cluster0.5j4t3vg.mongodb.net/product_test?retryWrites=true&w=majority";

// connecting mongodb with database help of mongoose
mongoose.connect(url).then(()=>{
    console.log('Connected to database.');
}).catch((err)=>{
    console.log("Connection failed!");
});

const createProduct = async (req, res, next) => {
    const createdProduct = new Product({
        name: req.body.name,
        price: req.body.price
    })

    // save() used to save data into database behind the scene with mangoose
    const result = await createdProduct.save();

    // converting monggose default ID into string
    // console.log( typeof createProduct.id); // return string
    // console.log( typeof createProduct._id); // return object

    res.json(result);
};

const getProducts = async (req, res, next) => {
    // in mangoose find() method returns array bydefault
    // find() does not return real promise but you can convert it into real promis with exec() method
    const products = await Product.find().exec();

    res.json(products);
}

exports.createProduct = createProduct;
exports.getProducts = getProducts;
