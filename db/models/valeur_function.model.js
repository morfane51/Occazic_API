module.exports = mongoose => {
    var valfuncSchema = new mongoose.Schema(
        {
            name: {type: String, required: true},
            val_func: Array,
            category: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Category'
            }
        },
        {timestamps: true}
    );

    return mongoose.model('Val_func', valfuncSchema);
};