const express = require("express");

const auth = require("../middleware/auth");
const role = require("../middleware/role");

const Status = require("../models/status");

const router = express.Router();


router.post("/complete", auth, role("student"), async (req, res) => {
    try {
        const { lessonId, score } = req.body;

        const existing = await Status.findOne({
            studentId: req.user.id,
            lessonId
        });

        if (existing) {
            return res.status(400).json({ message: "Lesson already completed" });
        }

        const badge = score >= 5 ? "Mars Explorer" : "Beginner";

        const status = new Status({
            studentId: req.user.id,

            lessonId,

            completed: true,
            score,
             badge
        });

        await status.save();

        res.json({ message: "Lesson completed", badge });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
                       
