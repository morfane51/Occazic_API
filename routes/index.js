var express = require('express');
var router = express.Router();

const multer = require('../middleware/multer.config');
const auth = require('../middleware/auth.config');


// Route for simple price estimate
const priceEstim = require("../controllers/price_estimate.controller.js");

/* Create simple purchase request . */
router.post('/price_estim', priceEstim.create);

// Modify simple purchase request
router.put('/price_estim/:id', priceEstim.update);

// Delete simple purchase request
router.delete('/price_estim/:id', priceEstim.delete);
router.delete('/price_estim', priceEstim.deleteAll)

// Get simple purchase request
router.get('/price_estim', priceEstim.findAll);
router.get('/price_estim/:id', priceEstim.findOne);


// Route for accurate price estimate
const accurateEstim = require("../controllers/accurate_estimate.controller.js");

/* Create simple purchase request . */
router.post('/accurate_estim', multer, accurateEstim.create);

// Modify simple purchase request
router.put('/accurate_estim/:id', accurateEstim.update);

// Delete simple purchase request
router.delete('/accurate_estim/:id', accurateEstim.delete);
router.delete('/price_estim', accurateEstim.deleteAll)

// Get simple purchase request
router.get('/accurate_estim', accurateEstim.findAll);
router.get('/accurate_estim/:id', accurateEstim.findOne);

// Route for user
const user = require("../controllers/user.controller.js");

// Create user
router.post('/user/signup', user.signup);

// Login
router.post('/user/login', user.login);

// Get info for one user
router.get('/user/:id', user.findOne);
router.get('/user', user.findAll);

// Modify user
router.put('/user', user.update);

// Delete user
router.delete('/user', user.delete);
router.delete('/user/:id', user.deleteAll);

module.exports = router;

// Route for category
const category = require("../controllers/category.controller.js");

// Create fonction
router.post('/category', [multer], category.create)

// Modify fonction
router.put('/category/:id', category.update);

// Get fonction
router.get('/category/:id', category.findOne);
router.get('/category', category.findAll);

// Delete fonction
router.delete('/category/:id', category.delete);
router.delete('/category', category.deleteAll);

// Route for calcul
const calcul = require("../controllers/calcul.controller.js");

// Calcul function
router.post('/calcul', calcul.run);

// Get fonction
router.get('/calcul/:id', calcul.findOne);
router.get('/calcul', calcul.findAll);

// Delete fonction
router.delete('/calcul/:id', calcul.delete);
router.delete('/calcul', calcul.deleteAll);

// Route for arguments
const val_func = require("../controllers/valeur_function.controller.js");

// Create fonction
router.post('/val_func', val_func.create);

// Modify fonction
router.put('/val_func/:id', val_func.update);

// Get fonction
router.get('/val_func/:id', val_func.findOne);
router.get('/val_func', val_func.findAll);

// Delete fonction
router.delete('/val_func/category/:cat_id', val_func.deleteWithCatId)
router.delete('/val_func/:id', val_func.delete);
router.delete('/val_func', val_func.deleteAll);

// Route for arguments value
const input_func = require("../controllers/input_function.controller.js");

// Create arguments value
router.post('/input_func', input_func.create);

// Modify arguments value
router.put('/input_func/:id', input_func.update);

// Get arguments value
router.get('/input_func/:id', input_func.findOne);
router.get('/input_func', input_func.findAll);

// Delete arguments value
router.delete('/input_func/:id', input_func.delete);
router.delete('/input_func/price_estimate/:price_estimate_id', input_func.deleteWithPriceEstimId)
router.delete('/input_func', input_func.deleteAll);

// Route for array value
const array_val_func = require("../controllers/array_value_function.controller");

// Create array value
router.post('/array_val', array_val_func.create);

// Modify array value
router.put('/array_val/:id', array_val_func.update);

// Get array value
router.get('/array_val/:id', array_val_func.findOne);
router.get('/array_val', array_val_func.findAll);

// Delete array value
router.delete('/array_val/:id', array_val_func.delete);
router.delete('/array_val', array_val_func.deleteAll);