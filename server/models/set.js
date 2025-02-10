import mongoose from "mongoose";

const setSchema = new mongoose.Schema({
  reps: { type: Number, required: true, default: 0 },
  weight: { type: Number },
  distance: { type: Number },
  duration: { type: Number },
  exerciseId: { type: mongoose.Types.ObjectId, required: true },
}, {timestamps: true});

const set = mongoose.model("set", setSchema);
export default set;
