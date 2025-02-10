import React, { useState, useEffect } from "react";

import ExerciseCard from "../../components/exerciseCard/ExerciseCard.jsx";
import { Title, Heading } from "../../components/customTypo/CustomTypo.jsx";
import CustomButton from "../../components/button/CustomButton.jsx";
import "../workoutPlans/WorkoutPlans.css";
import CustomHeader from "../../components/header/CustomHeader.jsx";
import CustomFooter from "../../components/footer/CustomFooter.jsx";
import {useGetTodaysExercisesQuery} from "../../store/ExerciseApi.jsx"


const TodayWorkoutPlans = () => {
    const { data, isLoading, error } = useGetTodaysExercisesQuery();
    console.log(data);

  if(isLoading) return <div>Loading...</div>

  return (
    <>
      <CustomHeader />
      <div className="workoutpage">
        <Heading>{`Today's Exercise Plan`}</Heading>
        <div className="workoutplans">
          {data.exercises.length > 0 ? (
            data.exercises.map((plan, index) => (
              <ExerciseCard
                key={index}
                setsAndReps={plan}
                btnText="Record logs"
              />
            ))
          ) : (
            <p>No exercises for today!</p>
          )}
        </div>
      </div>
      <CustomFooter />
    </>
  );
};

export default TodayWorkoutPlans;
