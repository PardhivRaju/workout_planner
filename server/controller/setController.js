import set from "../models/set.js";

export const getAllSets = async (req, res) => {
  try {
    const { exerciseId } = req.params;
    const sets = await set.find({ exerciseId });
    res.status(201).json({
      success: true,
      sets,
    });
  } catch (err) {
    console.log("Error fetching all sets:", err);
    res.status(500).json({
      success: false,
      message: "Error fetching sets",
      error: err.message,
    });
  }
};

export const getAllTodaySets = async (req, res) => {
  try {
    const { exerciseId } = req.params;
    const today = new Date().toISOString().split("T")[0];

    const sets = await set.find({
      exerciseId,
      createdAt: { $gte: new Date(today) },
    });
    res.status(201).json({
      success: true,
      sets,
    });
  } catch (err) {
    console.log("Error fetching today sets:", err);
    res.status(500).json({
      success: false,
      message: "Error fetching today sets",
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

export const createNewSet = async (req, res) => {
  try {
    const setObj = req.body;
    console.log(setObj);
    const newSet = new set(setObj);
    await newSet.save();
    const exerciseId = setObj.exerciseId;
    const sets = await set.find({ exerciseId });

    res.status(201).json({
      success: true,
      set: newSet,
      sets,
    });
  } catch (err) {
    console.log("Error creating set:", err);
    res.status(500).json({
      success: false,
      message: "Error creating set",
      error: err.message,
    });
  }
};

export const updateSetById = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedDetails = req.body;
    const currentSet = await set.findById(id);
    if (updatedDetails.reps) {
      currentSet.reps = updatedDetails.reps;
    }
    if (updatedDetails.weight) {
      currentSet.weight = updatedDetails.weight;
    }
    if (updatedDetails.distance) {
      currentSet.distance = updatedDetails.distance;
    }
    if (updatedDetails.duration) {
      currentSet.duration = updatedDetails.duration;
    }
    await currentSet.save();
    const sets = await set.find();
    res.status(200).json({
      success: true,
      sets,
      message: "Set updated successfully",
    });
  } catch (err) {
    console.log("Error updating Set:", err);
    res.status(500).json({
      success: false,
      message: "Error updating Set",
      error: err.message,
    });
  }
};

export const deleteSetById = async (req, res) => {
  try {
    const { id } = req.params;
    const deletingSet = await set.findById(id);
    await deletingSet.deleteOne();
    res.status(200).json({
      success: true,
      message: "Set removed",
    });
  } catch (err) {
    console.log("Error deleting Set:", err);
    res.status(500).json({
      success: false,
      message: "Error deleting Set",
      error: err.message,
    });
  }
};
