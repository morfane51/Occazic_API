const db = require("../db/models");
const Calcul = db.Calcul;
const Category = db.Category;
const Val_func = db.Val_func;
const Price_estim = db.price_estimate;
const Input_func = db.Input_func;
var mathjs = require('mathjs');

//TODO: Probleme possible avec calcul

// Calcul
exports.run = async (req, res) => {
// Validate request
    if (!req.body.price_estimID) {
        res.status(400).send({message: "Content can not be empty!"});
        return;
    }
    // Front pass category id

    const priceEstim = await Price_estim.findById(req.body.price_estimID);
    const category = await Category.findById(priceEstim.product_category_id);
    // Create a request
    const calcul = new Calcul({
        function: category.function,
        category: category._id,
        marge: category.marge,
        price_estimate: priceEstim._id,
        propose_price: await runCalcul(category.function)
    });
    console.log(calcul);
    console.log(calcul.id);

    // Save request in mongodb purchase_date: req.body.purchase_date,
    calcul
        .save(calcul)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the calcul."
            });
        });

// Function calcul function with val_func
    async function runCalcul(func) {
        const tab_val = [];
        var globalFunction = func;
        while (globalFunction.includes('{')) {
            // Found var with special characters
            var t_val = globalFunction.substring(
                globalFunction.indexOf("{") + 1,
                globalFunction.indexOf("}")
            );

            // Replace var with unique code
            var var_t_val = '{' + t_val + '}';
            globalFunction = globalFunction.replace(var_t_val, "213478")

            const priceEstim_id = priceEstim._id;
            const category_id = category._id;


            const condition_val = {name: t_val, category: category_id};
            const val_func = await Val_func.findOne(condition_val);

            const valFunc_id = val_func._id

            const condition = {price_estimate_id: priceEstim_id, val_func_id: valFunc_id};
            const input_func = await Input_func.findOne(condition);
            tab_val.push(input_func.value);

        }
        var i = 0;
        // Replace unique code with value func_val
        while (globalFunction.includes('213478')) {
            globalFunction = globalFunction.replace("213478", tab_val[i]);
            i = i + 1;
        }
        // Calcul function
        var calcul_globalFunction = mathjs.evaluate(globalFunction);
        console.log(calcul_globalFunction);

        return calcul_globalFunction;
    }
};

// Delete category
exports.delete = (req, res) => {
    // Recover request with id
    const id = req.params.id;
    // Delete request
    Calcul.findByIdAndRemove(id)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete calcul with id=${id}. Maybe calcul was not found!`
                });
            } else {
                res.send({
                    message: "Calcul was deleted successfully!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete calcul with id=" + id
            });
        });
};

// Delete All category
exports.deleteAll = (req, res) => {
    Calcul.deleteMany({})
        .then(data => {
            res.send({
                message: `${data.deletedCount} calcul were deleted successfully!`
            });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all calcul."
            });
        });
};

// Retrieve a single category
exports.findOne = (req, res) => {
    // Recover request with id
    const id = req.params.id;
    console.log(id);

    Calcul.findById(id)
        .populate({
            path:"category",
            model:"Category"
        })
        .then(data => {
            if (!data)
                res.status(404).send({message: "Not found calcul with id " + id});
            else res.send(data);
        })
        .catch(err => {
            res
                .status(500)
                .send({message: "Error retrieving calcul with id=" + id});
        });
};

// Retrieve all category with condition
exports.findAll = (req, res) => {
    // Recover request with name
    const name = req.query.function;
    var condition = name ? {function: {$regex: new RegExp(name), $options: "i"}} : {};

    Calcul.find(condition)
        .populate({
            path:"category",
            model:"Category"
        })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving calcul."
            });
        });
};