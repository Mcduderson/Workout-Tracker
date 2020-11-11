const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: () => new Date()
    },
    exercises: [{
        type: { 
            type: String,
            trim: true,
            required: "An exercise is required"
        },
        name: {
            type: String,
            trim: true,
            required: "An exercise name is required"
        },
        duration: {
            type: Number,
            required: "Please enter the duration of the workout"
        },
        weight: {
            type: Number
        },
        sets: {
            type: Number
        },
        reps: {
            type: Number
        },
        distance: {
            type: Number
        } 
    }]
    
},
{
    toJSON:{ virtuals: true }
}
);

workoutSchema.virtual("totalDuration").get(function(){
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;
    },0);
})

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;

//I should also be able to track the name, type, weight, sets, reps, and duration of exercise. If the exercise is a cardio exercise, I should be able to track my distance traveled.