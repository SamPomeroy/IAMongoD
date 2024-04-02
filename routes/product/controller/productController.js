const Product = require('../model/Product')

async function getAllProducts(){
    try {
        const foundAllProducts = await Product.find({})
        return foundAllProducts
    } catch (error) {
        return error
    }
}

async function createProduct(body){
    try {
        const addProduct = new Product({
            productName: body.productName
        })
        return await addProduct.save()
    } catch (error) {
        return error
    }
}

async function getProductById(id){
    try {
        return await Product.find({_id: id})
    } catch (error) {
        return error
    }
}

async function updateProductById(id, body){
    try {
        return await Product.findByIdAndUpdate({_id: id}, body, {new:true})
    } catch (error) {
        return error
    }
}

module.exports = {
    getAllProducts, 
    createProduct,
    getProductById,
    updateProductById
}