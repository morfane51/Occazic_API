module.exports = mongoose => {
    var schema = new mongoose.Schema(
        {
            function: { type: String, required: true },
            category: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'Category'
                },
            propose_price: { type: String, required: true }
        },
        {timestamps: true}
    );

    return mongoose.model("Calcul", schema);
};