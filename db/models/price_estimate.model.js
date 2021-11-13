//TODO : Gérer product_category avec l'id de lentrée de la categorie dans la DB.
module.exports = mongoose => {
    var schema = new mongoose.Schema(
        {
            name: String,
            surname: String,
            mail: { type: String, required: true },
            product_category_id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Category',
                required: true
            },
            product_ref: String,
            input_func_id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Input_func'
            },
            calcul_id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Calcul'
            }
        },
        {timestamps: true}
    );

    return mongoose.model("price_estimate", schema);
};
