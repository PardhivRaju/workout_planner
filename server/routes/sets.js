import express from "express";
import { isAuthenticated } from "../middlewares/auth.js";
import {
  getAllSets,
  createNewSet,
  updateSetById,
  deleteSetById,
  getAllTodaySets,
} from "../controller/setController.js";

const router = express.Router();
router.get("/:exerciseId", isAuthenticated, getAllSets);
router.get("/:exerciseId/today", isAuthenticated, getAllTodaySets);
router.post("/", isAuthenticated, createNewSet);
router.put("/:id", isAuthenticated, updateSetById);
router.delete("/:id", isAuthenticated, deleteSetById);
export default router;
