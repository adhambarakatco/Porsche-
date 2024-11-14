const{Router} = require('express');
const adminControllers = require('../controllers/adminControllers.js');
const router = Router();
const authorizationMiddleware = require("../middleware/authorizationMiddleware.js");
const authenticationMiddleware = require("../middleware/authenticationMiddleware.js");


// add new product
router.post('/addProduct',authorizationMiddleware([2]),adminControllers.addNewProduct);

// get all products
router.get('/products',authorizationMiddleware([2]),adminControllers.getAllProducts);

// delete product
router.delete('/deleteProduct/:id',authorizationMiddleware([2]),adminControllers.deleteProduct);

// update product
router.put('/updateProduct/:id',authorizationMiddleware([2]),adminControllers.updateProduct);


module.exports = router;
