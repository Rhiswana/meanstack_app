const express = require("express");
const User = require("../models/User");
const Status = require("../models/status");
const auth = require("../middleware/auth");
const role = require("../middleware/role");

const router = express.Router();

router.get("/students", auth, role("teacher"), async (req, res) => {
    try {
        const students = await User.find({
            role: "student",
            schoolId: req.user.schoolId
        });

        const results = [];

        for (let student of students) {
          const progress = await Status.find({ studentId: student._id });

         const totalScore = progress.reduce((sum, item) => sum + item.score, 0);

         const latestBadge = progress.length > 0 
              ? progress[progress.length - 1].badge  : "No badge";

          results.push({
           name: student.name,
             email: student.email,
           score: totalScore,
             badge: latestBadge
                  });

        }

        res.json(results);

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
