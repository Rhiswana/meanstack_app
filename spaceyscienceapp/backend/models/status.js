const mongoose = require("mongoose");

const statusSchema = new mongoose.Schema({
    studentId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    lessonId: String,
    completed: Boolean,
    score: Number,
    badge: String,
    updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Status", statusSchema);
