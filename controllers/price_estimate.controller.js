const db = require("../db/models");
const Price_estim = db.price_estimate;

// Create request for estimate price
exports.create = (req, res) => {
// Validate request
    if (!req.body.category) {
        res.status(400).send({message: "Category not be empty!"});
        return;
    }

    // Create a request
    const priceEstim = new Price_estim({
        name: req.body.name,
        surname: req.body.surname,
        mail: req.body.mail,
        product_category_id: req.body.product_category_id,
        product_ref: req.body.product_ref
    });
    console.log(priceEstim);
    console.log(priceEstim.id);

    // Save request in mongodb
    priceEstim
        .save(priceEstim)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the request."
            });
        });
};

// Modify request for estimate price
exports.update = (req, res) => {
// Validate request
    if (!req.body) {
        res.status(400).send({message: "Content can not be empty!"});
        return;
    }
    // Recover request with ID
    const id = req.params.id;
    // Modify a request
    Price_estim.findByIdAndUpdate(id, req.body, {useFindAndModify: false})
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update request with id=${id}. Maybe request was not found!`
                });
            } else res.send({message: "Request was updated successfully."});
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating request with id=" + id
            });
        });
};

// Delete request for estimate price
exports.delete = (req, res) => {
    // Recover request with id
    const id = req.params.id;
    // Delete request
    Price_estim.findByIdAndRemove(id)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete request with id=${id}. Maybe request was not found!`
                });
            } else {
                res.send({
                    message: "Request was deleted successfully!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete request with id=" + id
            });
        });
};

// Delete All request
exports.deleteAll = (req, res) => {
    Price_estim.deleteMany({})
        .then(data => {
            res.send({
                message: `${data.deletedCount} request were deleted successfully!`
            });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all request."
            });
        });
};

// Retrieve a single request
exports.findOne = (req, res) => {
    // Recover request with id
    const id = req.params.id;

    Price_estim
        .findById(id)
        .populate('product_category_id')
        .then(data => {
            if (!data)
                res.status(404).send({message: "Not found request with id " + id});
            else res.send(data);
        })
        .catch(err => {
            res
                .status(500)
                .send({message: "Error retrieving request with id=" + id});
        });
};

// Retrieve all request with condition
exports.findAll = (req, res) => {
    // Recover request with name
    const name = req.query.name;
    var condition = name ? {name: {$regex: new RegExp(name), $options: "i"}} : {};

    Price_estim
        .find(condition)
        .populate('product_category_id')
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving request."
            });
        });
};