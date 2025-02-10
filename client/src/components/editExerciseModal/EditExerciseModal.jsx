import React, { useState } from "react";
import CustomButton from "../../components/button/CustomButton.jsx";
import { EditSetsAndReps } from "../numberField/NumberField.jsx";
import MultiDaySelector from "../days/DaySelector.jsx";
import { useCreateExerciseMutation, useUpdateExerciseMutation } from "../../store/ExerciseApi.jsx";

const EditExerciseModal = ({ setShowModal, onAddExercise, workoutId }) => {
    const [exerciseName, setExerciseName] = useState("");
    const [exercisePlan, setExercisePlan] = useState({ sets: 0, reps: 0, selectedDays: [], exerciseId: null});
    const [createExercise, { isLoading }] = useCreateExerciseMutation();

    const handlePlanChange = async (field, value) => {
        setExercisePlan((prev) => ({ ...prev, [field]: value }));
    };

    const handleSave = async () => {
        if (!exerciseName.trim()) {
            alert("Exercise name cannot be empty.");
            return;
        }
        if (!workoutId) {
            alert("Workout ID is missing. Please try again.");
            return;
        }
        const data = {
            title: exerciseName,
            workoutId,
            days: exercisePlan.selectedDays,
            idealSets: exercisePlan.sets,
            idealReps: exercisePlan.reps
        };

        console.log(data);

        try {
            const response = await createExercise(data).unwrap();
            setExercisePlan((prev) => ({ ...prev, ["exerciseId"]: response.exercise._id}));
            onAddExercise({ name: response.exercise.title, ...exercisePlan });
            setShowModal(false);
        } catch (error) {
            console.error("Error adding exercise:", error);
            alert("Failed to add exercise. Please try again.");
        }
    };

    if (isLoading) return <div>Loading...</div>;

    return (
        <div className="modal-overlay">
            <div className="modal">
                <h2>Add Exercise</h2>
                <input
                    type="text"
                    value={exerciseName}
                    onChange={(e) => setExerciseName(e.target.value)}
                    placeholder="Enter exercise name"
                />
                <EditSetsAndReps 
                    label="Total Sets" 
                    initialValue={exercisePlan.sets} 
                    onChange={(value) => handlePlanChange("sets", value)} 
                />
                <EditSetsAndReps 
                    label="Total Reps" 
                    initialValue={exercisePlan.reps} 
                    onChange={(value) => handlePlanChange("reps", value)} 
                />
                <MultiDaySelector 
                    selectedDays={exercisePlan.selectedDays} 
                    onSelectionChange={(value) => handlePlanChange("selectedDays", value)} 
                />
                <div className="modal-buttons">
                    <CustomButton onClick={handleSave}>Save</CustomButton>
                    <CustomButton onClick={() => setShowModal(false)}>Cancel</CustomButton>
                </div>
            </div>
        </div>
    );
};

export default EditExerciseModal;
