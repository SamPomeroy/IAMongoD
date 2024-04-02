const express = require('express')
const router = express.Router()
const {getAllProducts, createProduct, getProductById, updateProductById} = require('./controller/productController')

router.get('/get-all-products', async (req, res)=>{
    try {
        let foundAllProducts = await getAllProducts()
        res.json({message: 'success', foundAllProducts})
    } catch (error) {
        res.json({message: 'failure', error: error.message})
    }
})

router.post('/create-product', async (req, res)=>{
    try {
        let savedProduct = await createProduct(req.body)
        res.json({message: 'successfully created product.', savedProduct})
    } catch (error) {
        res.json({message: 'error', error: error.message})
    }
})

router.get('/get-product/:id', async (req, res)=>{
    try {
        let getById = await getProductById(req.params.id)
        res.json({message: 'success', getById})
    } catch (error) {
        res.json({message: 'error', error: error.message})
    }
})

router.put('/update-product/:id', async (req, res)=>{
    try {
        let updatedProduct = await updateProductById(req.params.id, req.body)
        res.json({message: 'success', updatedProduct})
    } catch (error) {
        res.json({message: 'error', error: error.message})
    }
})

module.exports = router