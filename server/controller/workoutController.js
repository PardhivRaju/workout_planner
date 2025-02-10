import workout from "../models/workout.js";

export const getAllWorkouts = async (req, res) => {
  try {
    const userId = req.user._id;
    const workouts = await workout.find({ userId });
    res.status(201).json({
      success: true,
      workouts,
    });
  } catch (err) {
    console.log("Error fetching all workouts:", err);
    res.status(500).json({
      success: false,
      message: "Error fetching workouts",
      error: err.message,
    });
  }
};

// export const getExerciseById = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const currentTask = await task.findById(id);
//     res.status(200).json({
//       success: true,
//       task: currentTask,
//       message: "Task updated successfully",
//     });
//   } catch (err) {
//     console.log("Error getting task:", err);
//     res.status(500).json({
//       success: false,
//       message: "Error getting task",
//       error: err.message,
//     });
//   }
// };

export const createNewWorkout = async (req, res) => {
  try {
    const { title } = req.body;
    const userId = req.user._id;
    const newWorkout = new workout({
      title,
      userId,
    });
    await newWorkout.save();
    const workouts = await workout.find({ userId });

    res.status(201).json({
      success: true,
      workout: newWorkout,
      workouts,
    });
  } catch (err) {
    console.log("Error creating workout:", err);
    res.status(500).json({
      success: false,
      message: "Error creating workout",
      error: err.message,
    });
  }
};

export const updateWorkoutById = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedDetails = req.body;
    const currentWorkout = await workout.findById(id);
    if (updatedDetails.title) {
      currentWorkout.title = updatedDetails.title;
    }
    await currentWorkout.save();
    const workouts = await workout.find();
    res.status(200).json({
      success: true,
      workouts,
      message: "Workout updated successfully",
    });
  } catch (err) {
    console.log("Error updating workout:", err);
    res.status(500).json({
      success: false,
      message: "Error updating workout",
      error: err.message,
    });
  }
};

export const deleteWorkoutById = async (req, res) => {
  try {
    const { id } = req.params;
    const deletingWorkout = await workout.findById(id);
    await deletingWorkout.deleteOne();
    res.status(200).json({
      success: true,
      message: "Workout removed",
    });
  } catch (err) {
    console.log("Error deleting workout:", err);
    res.status(500).json({
      success: false,
      message: "Error deleting workout",
      error: err.message,
    });
  }
};
