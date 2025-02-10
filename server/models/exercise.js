import mongoose from "mongoose";

const exerciseSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  days: [{type: String, required: true}],
  idealSets: {type: Number, default: 0},
  idealReps: {type: Number, default: 0},
  workoutId: { type: mongoose.Types.ObjectId, required: true },
  userId: {type: mongoose.Types.ObjectId, required: true}
});

const exercise = mongoose.model("exercise", exerciseSchema);
export default exercise;
