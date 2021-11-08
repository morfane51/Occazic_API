module.exports = mongoose => {
    var schema = new mongoose.Schema(
        {
            name: String,
            surname: String,
            mail: String,
            product_category: String,
            product_ref: String,
            purchase_price: Number,
            sell_price: Number,
            purchase_date: Date,
            propose_price: Number,
            picture_front: String,
            picture_over: String,
            picture_under: String,
            picture_right: String,
            picture_left: String,
            picture_back: String,
            picture_detail: String
        },
        {timestamps: true}
    );

    return mongoose.model("accurate_estimate", schema);
};