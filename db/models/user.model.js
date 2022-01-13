module.exports = mongoose => {
    var schema = new mongoose.Schema(
        {
            username: { type: String, required: true, unique: true },
            password: { type: String, required: true }
        },
        {timestamps: true}
    );
    return mongoose.model("user", schema);
};