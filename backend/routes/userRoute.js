const {Router} = require('express');
const userControllers = require('../controllers/userControllers');
const orderControllers = require('../controllers/orderControllers.js');
const authorizationMiddleware = require('../middleware/authorizationMiddleware.js');
const authenticationMiddleware = require('../middleware/authenticationMiddleware.js');
const router = Router();

// register
router.post('/register', userControllers.register);
// login
router.post('/login', userControllers.login);

module.exports = router;