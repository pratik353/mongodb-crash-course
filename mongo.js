//import mongodb
const MongoClient = require('mongodb').MongoClient;

// connecting URL of mongodb
const url = "mongodb+srv://mongodb-learn:pratik123@cluster0.5j4t3vg.mongodb.net/?retryWrites=true&w=majority";

// fetching data storing data in database are async functions
const createProduct = async (req, res, next) => {
    const newProduct = {
        name: req.body.name,
        price: req.body.price
    }

    // creating new instance of mongodb client
    const client = new MongoClient(url);

    try {
        // connecting to mangodb client
        await client.connect();

        // connecting to mongodb database
        const db = client.db('product_test');
        console.log("Pinged your deployment. You successfully connected to MongoDB!");

        // creating new document in mongo database
        // add new product in database
        // if collecation is not present in db then it create new connection or write it into existing collection
        // insertOne() => add one entry into collection
        const result = db.collection('products').insertOne(newProduct);
    } catch (error) {
        console.log(error);
        return res.json({message:'Coulsd not store data.'});
    }finally{
        // close opened connection ofter every req completed. important note
        // await client.close();
    }
    res.json(newProduct);


};

const getProducts = async (req, res, next) => {
    const client = new MongoClient(url);
    let products;
    try {
        await client.connect();
        const db = client.db('product_test');
        products = await db.collection('products').find().toArray(); // find().toArray() => use to fined all documents in array format
    } catch (error) {
        return res.json('Could not get product.');
    }
    res.json(products);
};

exports.createProduct = createProduct;
exports.getProducts = getProducts;
