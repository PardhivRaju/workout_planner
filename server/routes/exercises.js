import express from "express";
import {
  getAllExercises,
  createNewExercise,
  deleteExerciseById,
  updateExerciseById,
  getAllExercisesOfTheDay,
} from "../controller/exerciseController.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();
router.get("/today", isAuthenticated, getAllExercisesOfTheDay);
router.get("/:workoutId", isAuthenticated, getAllExercises);
router.post("/", isAuthenticated, createNewExercise);
router.put("/:id", isAuthenticated, updateExerciseById);
router.delete("/:id", isAuthenticated, deleteExerciseById);
export default router;
