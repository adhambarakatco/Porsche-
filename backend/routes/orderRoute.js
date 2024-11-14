const {Router} = require('express');
const orderControllers = require('../controllers/orderControllers.js');
const authorizationMiddleware = require('../middleware/authorizationMiddleware.js');
const router = Router();

router.post('/placeOrder', authorizationMiddleware([1]),orderControllers.placeOrder);
router.get('/orders', authorizationMiddleware([1]),orderControllers.getOrders);

module.exports = router;