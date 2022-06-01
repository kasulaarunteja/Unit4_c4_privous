const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
    {
        student_code: { type: String, required: true },
        batch: { type: String, required: true },
        current_status: { type: String, required: true, default: "active" },//"inactive" or "in_disciplinary_action"
    },
    {
        versionKey: false,
        timestamps: true,
    }
);
module.exports = mongoose.model("student", studentSchema);
