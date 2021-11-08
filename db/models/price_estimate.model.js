module.exports = mongoose => {
    var schema = new mongoose.Schema(
        {
            name: String,
            surname: String,
            mail: String,
            product_category: String,
            product_ref: String,
            purchase_price: Number,
            purchase_date: Date,
            propose_price: Number
        },
        {timestamps: true}
    );

    return mongoose.model("price_estimate", schema);
};
