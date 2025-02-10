import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Title } from "../customTypo/CustomTypo.jsx";
import { EditSetsAndReps } from "../numberField/NumberField.jsx";
import MultiDaySelector from "../days/DaySelector.jsx";
import { useUpdateExerciseMutation, useDeleteExerciseMutation } from "../../store/ExerciseApi.jsx";
import CustomButton from "../button/CustomButton.jsx";

const EditExerciseCard = ({ sx = {}, id, plan, onUpdate }) => {
    const [updatedPlan, setUpdatedPlan] = useState(plan);
    const [updateExercise, { isLoading }] = useUpdateExerciseMutation();
    const [deleteExercise, {isLoading: load}] = useDeleteExerciseMutation();

    const handleSaveChanges = async () => {
        console.log("Updating exercise:", updatedPlan);
        const data = {
            idealSets: updatedPlan.sets,
            idealReps: updatedPlan.reps,
            days: updatedPlan.selectedDays,
        };

        try {
            const response = await updateExercise({ id, body: { ...data } }).unwrap();
            console.log("Update successful:", response);
            onUpdate(updatedPlan);
        } catch (error) {
            console.error("Update failed:", error);
        }
    };

    const handleSetsChange = (sets) => {
        setUpdatedPlan((prev) => ({ ...prev, sets }));
    };

    const handleRepsChange = (reps) => {
        setUpdatedPlan((prev) => ({ ...prev, reps }));
    };

    const handleDaysChange = (selectedDays) => {
        setUpdatedPlan((prev) => ({ ...prev, selectedDays }));
    };

    const handleDelete = async () => {
        console.log("deleting exercise:", id);
        try {
            const response = await deleteExercise(id).unwrap();
            console.log("Successfully deleted:", response);
        } catch (error) {
            console.error("delete failed:", error);
        }
    }

    return (
        <Card
            sx={{
                backgroundColor: "#E5EEFF",
                borderRadius: "12px",
                boxShadow: "0 4px 4px rgba(0, 0, 0, 0.36)",
                width: "40vw",
                height: "260px",
                margin: "20px",
                padding: "10px",
                ...sx,
            }}
        >
            <CardContent>
                <Title sx={{ textAlign: "center", fontWeight: "bold", fontSize: "22px" }}>
                    {plan.title}
                </Title>
                <EditSetsAndReps
                    label="Total Sets"
                    initialValue={plan.idealSets}
                    onChange={handleSetsChange}
                />
                <EditSetsAndReps
                    label="Total Reps"
                    initialValue={plan.idealReps}
                    onChange={handleRepsChange}
                />
                <MultiDaySelector selectedDays={plan.days} onSelectionChange={handleDaysChange} />

                <div style={{ marginTop: "10px", textAlign: "center", display: "flex", gap: "10px", justifyContent: "center" }}>
                    <CustomButton onClick={handleSaveChanges} disabled={isLoading}>
                        {isLoading ? "Saving..." : "Save Changes"}
                    </CustomButton>
                    <CustomButton onClick={handleDelete} disabled={load} sx={{backgroundColor: "#FE5F55"}}>
                        {load ? "deleting..." : "Delete"}
                    </CustomButton>
                </div>
            </CardContent>
        </Card>
    );
};

export default EditExerciseCard;