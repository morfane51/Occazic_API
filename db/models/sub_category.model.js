const mongoose = require('mongoose');

var subCatSchema = new mongoose.Schema(
    {
        name: {type: String, required: true},
        picture: String,
    }, {
        timestamps: true,
        toJSON: {virtuals: true},
        toObject: {virtuals: true}
    }
);

subCatSchema.virtual("category", {
    ref: "Category",
    foreignField: "sub_category",
    localField: "_id"
})

const subCategory = mongoose.model('Sub_category', subCatSchema);

module.exports = subCategory;