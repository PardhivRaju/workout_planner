import express from "express";
import userRouter from "./routes/user.js";
import exerciseRouter from "./routes/exercises.js";
import workoutRouter from "./routes/workout.js";
import setRouter from "./routes/sets.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const URI = process.env.MONGO_URI;

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS", "HEAD"],
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json({ limit: "30mb", extended: true }));

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});

mongoose
  .connect(URI)
  .then(() => console.log("Connected to Database"))
  .catch((err) => console.log(err));

app.use("/api/v1/user", userRouter);
// app.use("/api/v1/tasks", tasksRouter);
app.use("/api/v1/exercises", exerciseRouter);
app.use("/api/v1/workouts", workoutRouter);
app.use("/api/v1/sets", setRouter);
