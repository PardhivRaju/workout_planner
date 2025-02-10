import React, { useState } from "react";
import EditExerciseCard from "../../components/editExerciseCard/EditExerciseCard.jsx";
import { Heading } from "../../components/customTypo/CustomTypo.jsx";
import "../workoutPlans/WorkoutPlans.css";
import CustomButton from "../../components/button/CustomButton.jsx";
import EditExerciseModal from "../../components/editExerciseModal/EditExerciseModal.jsx";
import CustomHeader from "../../components/header/CustomHeader.jsx";
import CustomFooter from "../../components/footer/CustomFooter.jsx";
import {
  useGetExercisesQuery,
  useCreateExerciseMutation,
} from "../../store/ExerciseApi.jsx";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const EditExercisesPage = () => {
  const [plans, setPlans] = useState([
    { name: "Cheast", sets: 3, reps: 4, selectedDays: ["Mon", "Fri", "Tue"] },
    { name: "Cheast", sets: 2, reps: 4, selectedDays: ["Mon", "Wed", "Fri"] },
    { name: "Cheast", sets: 3, reps: 2, selectedDays: ["Mon", "Tue", "Sat"] },
    { name: "Cheast", sets: 3, reps: 4, selectedDays: ["Wed", "Sat", "Sun"] },
  ]);
  const { name } = useParams();
  const [showModal, setShowModal] = useState(false);
  const workoutId = useSelector((state) => state.feature.workoutId);
  const { data, isLoading, error } = useGetExercisesQuery(workoutId, {
    skip: !workoutId,
  });

  const [createExercise, { isLoading: loading }] = useCreateExerciseMutation();

  console.log("API Data:", data);
  console.log("Workout ID:", workoutId);

  const updatePlan = (index, updatedPlan) => {
    setPlans((prevPlans) =>
      prevPlans.map((plan, i) => (i === index ? updatedPlan : plan))
    );
  };

  const addExercise = (newExercise) => {
    setPlans([...plans, newExercise]);
  };

  if (isLoading || loading) return <div>loading...</div>;
  if (!data?.exercises) return <div>No exercises found.</div>;

  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <CustomHeader />
      <div className="workoutpage" style={{ flexGrow: 1 }}>
        <Heading>{name}</Heading>
        <div className="workoutplans">
          {data?.exercises?.map((exercise, index) => (
            <EditExerciseCard
              id={exercise._id}
              key={index}
              plan={exercise}
              onUpdate={(updatedPlan) => updatePlan(index, updatedPlan)}
            />
          ))}
        </div>
        <CustomButton
          sx={{ width: "30vw", fontSize: "20px" }}
          onClick={() => setShowModal(true)}
        >
          {"Add Exercise"}
        </CustomButton>

        {showModal && (
          <EditExerciseModal
            setShowModal={setShowModal}
            onAddExercise={addExercise}
            workoutId={workoutId}
          />
        )}
      </div>
      <CustomFooter />
    </div>
  );
};

export default EditExercisesPage;
