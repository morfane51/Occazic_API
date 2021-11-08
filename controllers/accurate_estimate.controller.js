const db = require("../db/models");
const Accurate_estim = db.accurate_estimate;
const fs = require('fs');

// Create request for estimate price
exports.create = async (req, res) => {
// Validate request
    if (!req.body.name) {
        res.status(400).send({message: "Content can not be empty!"});
        return;
    }

    // Create a request
    const accurateEstim = new Accurate_estim({
        name: req.body.name,
        surname: req.body.surname,
        mail: req.body.mail,
        product_category: req.body.product_category,
        product_ref: req.body.product_ref,
        purchase_price: req.body.purchase_price,
        sell_price: req.body.sell_price,
        purchase_date: req.body.purchase_date,
        propose_price: req.body.propose_price,
        picture_front: req.files[0].path,
        picture_over: req.files[1].path,
        picture_under: req.files[2].path,
        picture_right: req.files[3].path,
        picture_left: req.files[4].path,
        picture_back: req.files[5].path,
        picture_detail: req.files[6].path
    });
    console.log(accurateEstim);
    console.log(accurateEstim.id);
    console.log(req.files);

    // Save request in mongodb
    accurateEstim
        .save(accurateEstim)
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
    Accurate_estim.findByIdAndUpdate(id, req.body, {useFindAndModify: false})
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
    Accurate_estim.findByIdAndRemove(id)
        .then(data => {
            const pname1 = data.picture_back.split('images/')[1]
            const pname2 = data.picture_detail.split('images/')[1]
            const pname3 = data.picture_front.split('images/')[1]
            const pname4 = data.picture_left.split('images/')[1]
            const pname5 = data.picture_over.split('images/')[1]
            const pname6 = data.picture_right.split('images/')[1]
            const pname7 = data.picture_under.split('images/')[1]
            fs.unlinkSync(`images/${pname1}`)
            fs.unlinkSync(`images/${pname2}`)
            fs.unlinkSync(`images/${pname3}`)
            fs.unlinkSync(`images/${pname4}`)
            fs.unlinkSync(`images/${pname5}`)
            fs.unlinkSync(`images/${pname6}`)
            fs.unlinkSync(`images/${pname7}`)
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
    Accurate_estim.deleteMany({})
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

    Accurate_estim.findById(id)
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

    Accurate_estim.find(condition)
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