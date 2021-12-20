module.exports = mongoose => {
    var schema = new mongoose.Schema(
        {
            function: { type: String, required: true },
            category: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'Category'
                },
            price_estimate: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'price_estimate'
            },
            marge: Number,
            propose_price: { type: String, required: true }
        },
        {timestamps: true}
    );

    return mongoose.model("Calcul", schema);
};