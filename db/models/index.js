const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.price_estimate = require("./price_estimate.model.js")(mongoose);
db.accurate_estimate = require("./accurate_estimate.model.js")(mongoose);
db.user = require("./user.model.js")(mongoose);
db.Category = require("./category.model.js");
db.Calcul = require("./calcul.model.js")(mongoose);
db.Val_func = require("./valeur_function.model.js")(mongoose);
db.Input_func = require("./input_function.model.js")(mongoose);


module.exports = db;