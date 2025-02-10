import express from "express";
import {
  getAllWorkouts,
  createNewWorkout,
  updateWorkoutById,
  deleteWorkoutById,
} from "../controller/workoutController.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();
router.get("/", isAuthenticated, getAllWorkouts);
router.post("/", isAuthenticated, createNewWorkout);
router.put("/:id", isAuthenticated, updateWorkoutById);
router.delete("/:id", isAuthenticated, deleteWorkoutById);
export default router;
