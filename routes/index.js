var express = require('express');
var router = express.Router();

const multer = require('../middleware/multer.config');
const auth = require('../middleware/auth.config');


// Route for simple price estimate
const priceEstim = require("../controllers/price_estimate.controller.js");

/* Create simple purchase request . */
router.post('/price_estim', priceEstim.create);

// Modify simple purchase request
router.put('/price_estim/:id', auth, priceEstim.update);

// Delete simple purchase request
router.delete('/price_estim/:id', auth, priceEstim.delete);
router.delete('/price_estim', auth, priceEstim.deleteAll)

// Get simple purchase request
router.get('/price_estim', auth, priceEstim.findAll);
router.get('/price_estim/:id', auth, priceEstim.findOne);


// Route for accurate price estimate
const accurateEstim = require("../controllers/accurate_estimate.controller.js");

/* Create simple purchase request . */
router.post('/accurate_estim', multer, accurateEstim.create);

// Modify simple purchase request
router.put('/accurate_estim/:id', auth, accurateEstim.update);

// Delete simple purchase request
router.delete('/accurate_estim/:id', auth, accurateEstim.delete);
router.delete('/price_estim', auth, accurateEstim.deleteAll)

// Get simple purchase request
router.get('/accurate_estim', auth, accurateEstim.findAll);
router.get('/accurate_estim/:id', auth, accurateEstim.findOne);

// Route for user
const user = require("../controllers/user.controller.js");

// Create user
router.post('/user/signup', user.signup);

// Login
router.post('/user/login', user.login);

// Get info for one user
router.get('/user/:id', auth, user.findOne)

// Get info for all user
router.get('/user', auth, user.findAll)

module.exports = router;

// Route for calcul
const category = require("../controllers/category.controller.js");

// Create fonction
router.post('/category', auth, category.create);

// Modify fonction
router.put('/category/:id', auth, category.update);

// Get fonction
router.get('/category/:id', category.findOne);
router.get('/category', category.findAll);

// Delete fonction
router.delete('/category/:id', auth, category.delete);
router.delete('/category', auth, category.deleteAll);
