module.exports = mongoose => {
    var schema = new mongoose.Schema(
        {
            price_estimate_id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'price_estimate'
            },
            val_func_id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Val_func'
            },
            value: String
        },
        {timestamps: true}
    );

    return mongoose.model("Input_func", schema);
};