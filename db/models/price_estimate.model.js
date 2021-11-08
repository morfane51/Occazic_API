//TODO : Gérer product_category avec l'id de lentrée de la categorie dans la DB.
module.exports = mongoose => {
    var schema = new mongoose.Schema(
        {
            name: String,
            surname: String,
            mail: { type: String, required: true },
            product_category: { type: String, required: true },
            product_ref: String,
            purchase_price: { type: Number, required: true },
            purchase_date: { type: Date, required: true },
            propose_price: Number
        },
        {timestamps: true}
    );

    return mongoose.model("price_estimate", schema);
};
