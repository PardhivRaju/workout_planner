import mongoose from "mongoose";

const workoutSchema = new mongoose.Schema({
  title: { type: String, unique: true, required: true },
  userId: { type: mongoose.Types.ObjectId, required: true },
});

const workout = mongoose.model("workout", workoutSchema);
export default workout;
