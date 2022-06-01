const mongoose = require("mongoose");

const submissionSchema = new mongoose.Schema(
    {
        evaluation_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "evalution",
            required: true,
        },
        answered_by: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "student",
            required: true,
        },
        status: { type: String, required: true },
        submission_time: { type: Date, required: true },
        score: { type: Number, required: true },
        assessed_by: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user",
            required: true,
        },
        submission_link: { type: String, required: true },//will be a file which will be submitted by the student 
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

module.exports = mongoose.model("submission", submissionSchema);
