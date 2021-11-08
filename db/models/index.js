const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.price_estimate = require("./price_estimate.model.js")(mongoose);
db.accurate_estimate = require("./accurate_estimate.model.js")(mongoose);
db.user = require("./user.model.js")(mongoose);

module.exports = db;