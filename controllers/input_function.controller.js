const db = require("../db/models");
const Input_func = db.Input_func;

// Create request for estimate price
exports.create = (req, res) => {
// Validate request
    if (!req.body.value) {
        res.status(400).send({message: "Content can not be empty!"});
        return;
    }

    // Create a request
    const inputFunc = new Input_func({
        value: req.body.value,
        price_estimate_id: req.body.price_estimate_id,
        val_func_id: req.body.val_func_id
    });
    console.log(inputFunc);
    console.log(inputFunc.id);

    // Save request in mongodb
    inputFunc
        .save(inputFunc)
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
    Input_func.findByIdAndUpdate(id, req.body, {useFindAndModify: false})
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

// Delete Input Function with price_estimate_id
exports.deleteWithPriceEstimId = (req, res) => {
    // Recover all Input Function with price_estimate_id
    const price_estimate_id = req.params.price_estimate_id;
    console.log(price_estimate_id)
    // Delete Input Function
    Input_func.deleteMany({ price_estimate_id: price_estimate_id})
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete input function with id=${price_estimate_id}. Maybe input function was not found!`
                });
            } else {
                res.send({
                    message: `${data.deletedCount} input function were deleted successfully!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete input function with id=" + id
            });
        });
};

// Delete Input func
exports.delete = (req, res) => {
    // Recover request with id
    const id = req.params.id;
    // Delete request
    Input_func.findByIdAndRemove(id)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete input with id=${id}. Maybe input was not found!`
                });
            } else {
                res.send({
                    message: "Input was deleted successfully!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete input with id=" + id
            });
        });
};

// Delete All request
exports.deleteAll = (req, res) => {
    Input_func.deleteMany({})
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

    Input_func
        .findById(id)
        .populate('price_estimate_id val_func_id')
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
    const name = req.query.value;
    var condition = name ? {name: {$regex: new RegExp(name), $options: "i"}} : {};

    Input_func
        .find(condition)
        .populate('price_estimate_id val_func_id')
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