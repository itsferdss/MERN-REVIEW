const Product = require('../models/Product');

//ger all products
const getAllProducts = async (req, res) => {
    let products = await Product.find();
    return res.status(200).send(products);
}

// create a new product
const createProduct = async (req, res) => {
    let product = await Product.create(req.body);
    return res.status(201).send({
      error: false,
      product
    })
}

//delete a product
const deleteProduct = async (req, res) => {
    const {id} = req.params;

    let product = await Product.findByIdAndDelete(id);

    return res.status(202).send({
      error: false,
      product
    })
}

//update a product
const updateProduct = async (req, res) => {
    const {id} = req.params;

    let product = await Product.findByIdAndUpdate(id, req.body);

    return res.status(202).send({
      error: false,
      product
    })

}


module.exports = {
    getAllProducts,
    createProduct,
    deleteProduct,
    updateProduct
}