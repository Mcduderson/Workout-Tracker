const router = require("express").Router();
const Workout = require("../models/index");

router.get("/api/workouts", (req, res) => {
    Workout.find()
    .then(data => {
        res.json(data);
    }).catch(err => {
        res.json(err);
    })
});

router.get("/api/workouts/range", (req, res) => {
    Workout.find().limit(7)
    .then(data => {
        res.json(data);
    }).catch(err => {
        res.json(err);
    })
});

router.put("/api/workouts/range", (req, res) => {

});

router.post("/api/workouts/range", (req, res) => {

});

router.delete("/api/workouts/range", (req, res) => {
//ok true
});