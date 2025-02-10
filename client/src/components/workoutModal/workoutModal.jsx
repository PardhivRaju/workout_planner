import React from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../components/button/CustomButton.jsx";
import "../../pages/workoutPlans/WorkoutPlans.css";
import { useCreateWorkoutMutation } from "../../store/WorkoutApi.jsx";
import { useDispatch, useSelector } from "react-redux";
import { setWorkoutId } from "../../feature/FeatureSlice.jsx";

const WorkoutModal = ({
  workoutName,
  setWorkoutName,
  handleAddPlan,
  setShowModal,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [createWorkout, { isLoading, data }] = useCreateWorkoutMutation();

  const handleSave = async () => {
    try {
      const response = await createWorkout({ title: workoutName }).unwrap();
      dispatch(setWorkoutId(response.workout._id));
      console.log("New Workout ID:", response.workout._id);

      setTimeout(() => {
        navigate(`/editexercise/${workoutName}`);
      }, 100);
    } catch (error) {
      alert("Error creating new workout");
    }
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Add Workout Plan</h2>
        <input
          type="text"
          value={workoutName}
          onChange={(e) => setWorkoutName(e.target.value)}
          placeholder="Enter workout name"
        />
        <div className="modal-buttons">
          <CustomButton onClick={handleSave}>Save</CustomButton>
          <CustomButton onClick={() => setShowModal(false)}>
            Cancel
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default WorkoutModal;
