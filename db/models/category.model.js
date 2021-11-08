module.exports = mongoose => {
    var schema = new mongoose.Schema(
        {
            name: { type: String, required: true },
            function: { type: String, required: true }
        },
        {timestamps: true}
    );

    return mongoose.model("category", schema);
};