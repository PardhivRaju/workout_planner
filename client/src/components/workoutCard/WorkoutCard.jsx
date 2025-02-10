import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Title } from "../customTypo/CustomTypo.jsx";
import CustomButton from "../button/CustomButton.jsx";
import { useDeleteWorkoutMutation } from "../../store/WorkoutApi.jsx";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setWorkoutId } from "../../feature/FeatureSlice.jsx";

const WorkoutCard = ({ sx = {}, exercises = [], btnText, name, id }) => {
  const [deleteWorkout, { isLoading }] = useDeleteWorkoutMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDelete = async () => {
    console.log("deleting workout:", id);
    try {
      const response = await deleteWorkout(id).unwrap();
      console.log("Successfully deleted:", response);
    } catch (error) {
      console.error("delete failed:", error);
    }
  };

  const handleEdit = () => {
    dispatch(setWorkoutId(id));
    console.log("Setting workout id as : ", id);

    setTimeout(() => {
      navigate(`/editexercise/${name}`);
    }, 100);
  };

  return (
    <Card
      sx={{
        backgroundColor: "#E5EEFF",
        borderRadius: "12px",
        boxShadow: "0 4px 4px rgba(0, 0, 0, 0.36)",
        width: "40vw",
        height: "245px",
        margin: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        ...sx,
      }}
    >
      <CardContent>
        <Title
          sx={{ textAlign: "center", fontWeight: "bold", fontSize: "22px" }}
        >
          {name}
        </Title>

        <div
          style={{
            maxHeight: "100px",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {exercises.length > 0 ? (
            exercises.slice(0, 3).map((exercise, index) => (
              <div key={index} style={{ fontSize: "14px", color: "#333" }}>
                - {exercise.title} ({exercise.idealSets} sets x{" "}
                {exercise.idealReps} reps)
              </div>
            ))
          ) : (
            <div style={{ fontSize: "14px", color: "#888" }}>
              No exercises added
            </div>
          )}
          {exercises.length > 3 && (
            <div style={{ color: "#666" }}>+ more...</div>
          )}
        </div>
      </CardContent>

      <div
        style={{
          textAlign: "center",
          padding: "10px",
          display: "flex",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        {btnText && <CustomButton onClick={handleEdit}>{btnText}</CustomButton>}
        <CustomButton
          onClick={handleDelete}
          disabled={isLoading}
          sx={{ backgroundColor: "#FE5F55" }}
        >
          {isLoading ? "deleting..." : "Delete"}
        </CustomButton>
      </div>
    </Card>
  );
};

export default WorkoutCard;
