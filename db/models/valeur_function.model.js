const {boolean} = require("mathjs");
module.exports = mongoose => {
    var valfuncSchema = new mongoose.Schema(
        {
            name: {type: String, required: true},
            array: {type: Boolean, required: true},
            array_val_func: [{
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Array_val_func'
            }],
            category: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Category'
            }
        },
        {timestamps: true}
    );

    return mongoose.model('Val_func', valfuncSchema);
};