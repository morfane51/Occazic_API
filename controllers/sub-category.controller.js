const db = require("../db/models");
const fs = require("fs");
const subCategory = db.Sub_category;

//TODO : La fonction correspondnate a la categorie doit etre stocké dans une table differente, pour eviter qu'un appel GET non authentifié recupére la fonction de calcul.

// Create category with function
exports.create = async (req, res) => {
// Validate request
    if (!req.body.name) {
        res.status(400).send({message: "Content can not be empty!"});
        return;
    }

    let picture = 'images/base.png';

    try{
        picture = req.files[0].path;
    }
    catch{
        picture = 'images/base.png';
    }

    // Create a request
    const addSubCategory = new subCategory({
        name: req.body.name,
        picture: picture
    });
    console.log(addSubCategory);
    // Save request in mongodb
    addSubCategory
        .save(addSubCategory)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the sub-category."
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
    subCategory.findByIdAndUpdate({ _id: id }, req.body, { new: true })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update sub-category with id=${id}. Maybe sub-category was not found!`
                });
            } else res.send({message: "Sub-category was updated successfully."});
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
    subCategory.findByIdAndRemove(id)
        .then(data => {
            const pname = data.picture.split('images/')[1]
            console.log(pname)

            if(pname !== 'base.png'){
                fs.unlinkSync(`images/${pname}`)
            }

            if (!data) {
                res.status(404).send({
                    message: `Cannot delete sub-category with id=${id}. Maybe sub-category was not found!`
                });
            } else {
                res.send({
                    message: "Sub-category was deleted successfully!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete sub-category with id=" + id + " Erreur :" + err
            });
        });
};

// Delete All category
exports.deleteAll = (req, res) => {
    subCategory.deleteMany({})
        .then(data => {
            res.send({
                message: `${data.deletedCount} sub-category were deleted successfully!`
            });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all sub-category."
            });
        });
};

// Retrieve a single category
exports.findOne = (req, res) => {
    // Recover request with id
    const id = req.params.id;

    subCategory
        .findById(id)
        .populate('category')
        .then(data => {
            if (!data)
                res.status(404).send({message: "Not found sub-category with id " + id});
            else res.send(data);
        })
        .catch(err => {
            res
                .status(500)
                .send({message: "Error retrieving sub-category with id=" + id});
        });
};

// Retrieve all category with condition
exports.findAll = (req, res) => {
    // Recover request with name
    const name = req.query.name;
    var condition = name ? {name: {$regex: new RegExp(name), $options: "i"}} : {};

    subCategory
        .find(condition)
        .populate('category') // <- use the populate() function
        .then(data => {
            if (!data)
                res.status(404).send({message: "Not found sub-category with id " + id});
            else res.send(data);
        })
        .catch(err => {
            res
                .status(500)
                .send({message: "Error retrieving sub-category with id=" + id});
        });
};