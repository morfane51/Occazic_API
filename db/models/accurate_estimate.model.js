module.exports = mongoose => {
    var schema = new mongoose.Schema(
        {
            name: String,
            surname: String,
            mail: { type: String, required: true },
            product_category: { type: String, required: true },
            product_ref: String,
            purchase_price: { type: Number, required: true },
            sell_price: Number,
            purchase_date: { type: Date, required: true },
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