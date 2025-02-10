import exercise from "../models/exercise.js";

export const getAllExercises = async (req, res) => {
  try {
    const { workoutId } = req.params;
    const exercises = await exercise.find({ workoutId });
    res.status(201).json({
      success: true,
      exercises,
    });
  } catch (err) {
    console.log("Error fetching all exercises:", err);
    res.status(500).json({
      success: false,
      message: "Error fetching exercises",
      error: err.message,
    });
  }
};

export const getAllExercisesOfTheDay = async (req, res) => {
  try {
    const userId = req.user._id;
    const today = new Date().toLocaleString("en-US", { weekday: "short" });
    const exercises = await exercise.find({
      userId,
      days: { $in: [today] },
    });
    console.log(today);
    console.log(exercises);
    
    res.status(201).json({
      success: true,
      exercises,
    });
  } catch (err) {
    console.log("Error fetching all exercises of today:", err);
    res.status(500).json({
      success: false,
      message: "Error fetching exercises of today",
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

export const createNewExercise = async (req, res) => {
  try {
    const data = req.body;
    const userId = req.user._id;
    console.log(data);
    // {
    //   title,
    //   days,
    //   workoutId,
    //   idealReps,
    //   idealSets
    // }
    const newExercise = new exercise({...data, userId});
    await newExercise.save();
    const workoutId = data.workoutId;
    const exercises = await exercise.find({workoutId});

    res.status(201).json({
      success: true,
      exercise: newExercise,
      exercises,
    });
  } catch (err) {
    console.log("Error creating exercise:", err);
    res.status(500).json({
      success: false,
      message: "Error creating exercise",
      error: err.message,
    });
  }
};

export const updateExerciseById = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedDetails = req.body;
    console.log(updatedDetails);
    console.log(id);
    const currentExercise = await exercise.findById(id);
    if (updatedDetails.title) {
      currentExercise.title = updatedDetails.title;
    }
    if (updatedDetails.days) {
      currentExercise.days = updatedDetails.days;
    }
    if(updatedDetails.idealReps) {
      currentExercise.idealReps = updatedDetails.idealReps;
    }
    if(updatedDetails.idealSets) {
      currentExercise.idealSets = updatedDetails.idealSets;
    }
    await currentExercise.save();
    const exercises = await exercise.find();
    res.status(200).json({
      success: true,
      exercises,
      message: "Exercise updated successfully",
    });
  } catch (err) {
    console.log("Error updating Exercise:", err);
    res.status(500).json({
      success: false,
      message: "Error updating Exercise",
      error: err.message,
    });
  }
};

export const deleteExerciseById = async (req, res) => {
  try {
    const { id } = req.params;
    const deletingExercise = await exercise.findById(id);
    await deletingExercise.deleteOne();
    res.status(200).json({
      success: true,
      message: "Exercise removed",
    });
  } catch (err) {
    console.log("Error deleting Exercise:", err);
    res.status(500).json({
      success: false,
      message: "Error deleting Exercise",
      error: err.message,
    });
  }
};
