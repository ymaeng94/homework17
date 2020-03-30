const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: Number,
  totalDuration: {type:Number, default: 0},
  exercise: [{
    type: {type: String, trim: true, required: "workout type is required"},
    name: {type: String, trim: true, required: "workout type is required"},  
    value: {duration: Number, distance: Number, weight: Number, reps: Number, sets: Number}
    }]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;