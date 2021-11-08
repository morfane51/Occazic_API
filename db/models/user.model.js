module.exports = mongoose => {
    var schema = new mongoose.Schema(
        {
            pseudo: { type: String, required: true },
            password: { type: String, required: true }
        },
        {timestamps: true}
    );
    return mongoose.model("user", schema);
};