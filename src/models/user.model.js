const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true,unique:true },
        password: { type: String, required: true },
        profile_photo_url: { type: String, required: false },
        roles: [{ type: String, required: true }],
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

userSchema.pre("save", function (next) {
    if (!this.isModified("password")) return next();
    this.password = bcrypt.hashSync(this.password, 8);
    return next();
});



userSchema.methods.checkPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};


module.exports = mongoose.model("user", userSchema);