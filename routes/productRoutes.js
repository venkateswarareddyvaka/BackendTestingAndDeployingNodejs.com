const Product = require('../models/productModel.js');
const {getProducts,getProduct,createProduct,updateProduct,deleteProduct} = require('../controllers/productControllers.js')
const express=require('express')

const router = express.Router();


// The following code is needed to make routes work in Vercel
// when the backend is deployed

// The issue is that Vercel rewrites all requests to '/'
// to '/server.js' which is the entry point of the app
// But, express router does not handle this rewriting correctly
// This code fixes the issue

router.get('/*', (req, res, next) => {
  // This Regex is used to match the part after the domain name
  // For example, if the URL is 'https://myapp.vercel.app/api/product',
  // 'api/product' will be matched by the Regex
  const path = req.path.match(/\/([^?]+)/)[1];
  // Call the appropriate route with the matched path
  // The req.baseUrl is the part of the URL before the matched path
  // For example, if the URL is 'https://myapp.vercel.app/api/product',
  // req.baseUrl will be '/api'
    const baseUrl = '/api';
  router.handle(req.baseUrl + path, req, res, next);
});


router.get('/:id',getProduct)

router.post('/',createProduct)

router.put('/:id',updateProduct)

router.delete('/:id',deleteProduct)

module.exports = router