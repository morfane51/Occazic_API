module.exports = mongoose => {
    var arrayvalfuncSchema = new mongoose.Schema(
        {
            name: {type: String, required: true},
            val_func_id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Val_func'
            },
            value: {type: Number, required: true}
        },
        {timestamps: true}
    );

    return mongoose.model('Array_val_func', arrayvalfuncSchema);
};