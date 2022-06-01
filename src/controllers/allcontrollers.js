const express = require("express");

const User = require("../models/user.model");
const Student= require("../models/student.model");
const Submission = require("../models/submission.model");
const Evaluation = require("../models/evaluation.model");

const uploadSingle = require("../middlewares/upload");
const authenticate = require("../middlewares/authenticate");
const authorise = require("../middlewares/authorise");
const router = express.Router();

router.post("/users", authenticate, authorise(["student", "ia", "teacher", "operations", "admin"]), uploadSingle("profile_photo_url"),
    async (req, res) => {
        try {
            const user = await User.create({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                profile_photo_url: req.file.path,
                roles: req.body.roles,
            });
            return res.send({ user });
        } catch (err) {
            return res.status(500).send(err);
        }
    }
);
//evaluations


router.post("/evaluations", authenticate, authorise(["teacher", "operations", "admin"]),
    async (req, res) => {
        try {
            const evaluation = await Evaluation.create({
                title: req.body.title,
                created_by: req.body.created_by,
                start_date: req.body.start_date,
                end_date: req.body.end_date,
            });
            return res.send({ evaluation });
        } catch (err) {
            return res.status(500).send(err);
        }
    }
);


//submissions

router.post("/submissions", authenticate, authorise(["teacher", "operations", "admin"]),
    async (req, res) => {
        try {
            const submission = await Submission.create({
                evaluation_id: req.body.evaluation_id,
                answered_by: req.body.answered_by,
                status: req.body.status,
                submission_time: req.body.submission_time,
                score: req.body.score,
                assessed_by: req.body.assessed_by,
                submission_link: req.file.path,
            });
            return res.send({ submission });
        } catch (err) {
            return res.status(500).send(err);
        }
    }
);
/// students

router.post("/students", authenticate, authorise(["teacher", "operations", "admin"]),
    async (req, res) => {
        try {
            const student = await Student.create({
                student_code: req.body.student_code,
                batch: req.body.batch,
                current_status: req.body.current_status,
         
            });
            return res.send({ student });
        } catch (err) {
            return res.status(500).send(err);
        }
    }
);



///get for batches

router.get("/submissions/delta", async (req, res) => {
    try {
        const submission = await Submission.find().lean().exec();

        let delta = [];
        let charlie = [];
        let bravo = [];
        let alpha = [];
        
            
    
        if (submission.score > 7.5) delta.push(submission.answered_by);

        //if (submission.score > 7.5) charlie.push(submission.answered_by);
        return res.send(delta);
    } catch (err) {
        return res.sendStatus(500).send(err);
    }
});
router.get("/submissions/charlie", async (req, res) => {
    try {
        const submission = await Submission.find().lean().exec();

        let delta = [];
        let charlie = [];
        let bravo = [];
        let alpha = [];
        
            
    
        if (submission.score > 5 && submission.score < 7.5 ) charlie.push(submission.answered_by);

        //if (submission.score > 7.5) charlie.push(submission.answered_by);
        return res.send(charlie);
    } catch (err) {
        return res.sendStatus(500).send(err);
    }
});

router.get("/submissions/bravo", async (req, res) => {
    try {
        const submission = await Submission.find().lean().exec();

        let delta = [];
        let charlie = [];
        let bravo = [];
        let alpha = [];
        
            
    
        if (submission.score > 3.5 && submission.score < 5 ) bravo.push(submission.answered_by);

        //if (submission.score > 7.5) charlie.push(submission.answered_by);
        return res.send(bravo);
    } catch (err) {
        return res.sendStatus(500).send(err);
    }
});


router.get("/submissions/alpha", async (req, res) => {
    try {
        const submission = await Submission.find().lean().exec();

        let delta = [];
        let charlie = [];
        let bravo = [];
        let alpha = [];
        
            
    
        if (submission.score > 2.5 && submission.score < 3.5 ) alpha.push(submission.answered_by);

        //if (submission.score > 7.5) charlie.push(submission.answered_by);
        return res.send(alpha);
    } catch (err) {
        return res.sendStatus(500).send(err);
    }
});

router.get("/submissions/repeat", async (req, res) => {
    try {
        const submission = await Submission.find().lean().exec();

        let delta = [];
        let charlie = [];
        let bravo = [];
        let alpha = [];
        let repeat1 = [];
            
    
        if (submission.score < 2.5 ) repeat1.push(submission.answered_by);

        //if (submission.score > 7.5) charlie.push(submission.answered_by);
        return res.send(repeat1);
    } catch (err) {
        return res.sendStatus(500).send(err);
    }
});

module.exports = router;