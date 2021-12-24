const db = require("../db/models");
const fs = require("fs");
const Category = db.Category;
const Val_func = db.Val_func;

//TODO : La fonction correspondnate a la categorie doit etre stocké dans une table differente, pour eviter qu'un appel GET non authentifié recupére la fonction de calcul.

// Create category with function
exports.create = async (req, res) => {
// Validate request
    if (!req.body.function) {
        res.status(400).send({message: "Content can not be empty!"});
        return;
    }
    // Create a request
    const addCategory = new Category({
        name: req.body.name,
        function: req.body.function,
        marge: req.body.marge,
        picture: req.files[0].path
    });
    console.log(addCategory);
    console.log(addCategory);

    // Save request in mongodb
    addCategory
        .save(addCategory)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the category."
            });
        });
};

// Modify category or function
exports.update = (req, res) => {
// Validate request
    if (!req.body) {
        res.status(400).send({message: "Content can not be empty!"});
        return;
    }
    // Recover request with ID
    const id = req.params.id;
    // Modify a request
    Category.findByIdAndUpdate(id, req.body, {useFindAndModify: false})
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update category with id=${id}. Maybe category was not found!`
                });
            } else res.send({message: "Category was updated successfully."});
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating request with id=" + id
            });
        });
};

// Delete category
exports.delete = (req, res) => {
    // Recover request with id
    const id = req.params.id;
    // Delete request
    Category.findByIdAndRemove(id)
        .then(data => {
            const pname = data.picture.split('images/')[1]
            console.log(pname)
            fs.unlinkSync(`images/${pname}`)
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete category with id=${id}. Maybe category was not found!`
                });
            } else {
                res.send({
                    message: "Category was deleted successfully!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete category with id=" + id + " Erreur :" + err
            });
        });
};

// Delete All category
exports.deleteAll = (req, res) => {
    Category.deleteMany({})
        .then(data => {
            res.send({
                message: `${data.deletedCount} category were deleted successfully!`
            });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all category."
            });
        });
};

// Retrieve a single category
exports.findOne = (req, res) => {
    // Recover request with id
    const id = req.params.id;

    Category
        .findById(id)
        .populate('val_func')
        .then(data => {
            if (!data)
                res.status(404).send({message: "Not found category with id " + id});
            else res.send(data);
        })
        .catch(err => {
            res
                .status(500)
                .send({message: "Error retrieving category with id=" + id});
        });
};

// Retrieve all category with condition
exports.findAll = (req, res) => {
    // Recover request with name
    const name = req.query.name;
    var condition = name ? {name: {$regex: new RegExp(name), $options: "i"}} : {};

    Category
        .find(condition)
        .populate('val_func') // <- use the populate() function
        .then(data => {
            if (!data)
                res.status(404).send({message: "Not found category with id " + id});
            else res.send(data);
        })
        .catch(err => {
            res
                .status(500)
                .send({message: "Error retrieving category with id=" + id});
        });
};