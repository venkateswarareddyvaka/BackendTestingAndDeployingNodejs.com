const Product = require('../models/productModel.js');
const {getProducts,getProduct,createProduct,updateProduct,deleteProduct} = require('../controllers/productControllers.js')
const express=require('express')

const router = express.Router();

router.get('/', (req,res)=>{
    res.send("Making fetch request")
})

router.get('/:id',getProduct)

router.post('/',createProduct)

router.put('/:id',updateProduct)

router.delete('/:id',deleteProduct)

module.exports = router