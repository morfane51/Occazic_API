const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.price_estimate = require("./price_estimate.model.js")(mongoose);
db.accurate_estimate = require("./accurate_estimate.model.js")(mongoose);
db.user = require("./user.model.js")(mongoose);
db.Calcul = require("./calcul.model.js")(mongoose);
db.Val_func = require("./valeur_function.model.js")(mongoose);
db.Input_func = require("./input_function.model.js")(mongoose);
db.Array_val_func = require("./array_value_function.model.js")(mongoose);
db.Sub_category = require("./sub_category.model.js");
db.Category = require("./category.model.js");

module.exports = db;