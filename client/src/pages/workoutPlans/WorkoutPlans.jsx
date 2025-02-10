import React, { useState, useEffect } from "react";
import WorkoutCard from "../../components/workoutCard/WorkoutCard";
import "./WorkoutPlans.css";
import { Heading } from "../../components/customTypo/CustomTypo.jsx";
import CustomButton from "../../components/button/CustomButton.jsx";
import WorkoutModal from "../../components/workoutModal/workoutModal.jsx";
import CustomHeader from "../../components/header/CustomHeader.jsx";
import CustomFooter from "../../components/footer/CustomFooter.jsx";
import { useGetWorkoutsQuery } from "../../store/WorkoutApi.jsx";
import { useLazyGetExercisesQuery } from "../../store/ExerciseApi.jsx";

const WorkoutPage = () => {
    const [showModal, setShowModal] = useState(false);
    const [workoutName, setWorkoutName] = useState("");
    const { data: response, isLoading, error } = useGetWorkoutsQuery();
    const [fetchExercises] = useLazyGetExercisesQuery();

    
    const [workoutExercises, setWorkoutExercises] = useState({});

    useEffect(() => {
        console.log(response);
        if (response?.workouts) {
            response.workouts.forEach(async (workout) => {
                try {
                    const res = await fetchExercises(workout._id).unwrap();
                    const exercises = res.exercises;
                    setWorkoutExercises((prev) => ({ ...prev, [workout._id]: exercises }));
                } catch (error) {
                    console.error("Error fetching exercises:", error);
                }
            });
        }
    }, [response, fetchExercises]);

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading workouts</p>;

    return (
        <>
            <CustomHeader />
            <div className="workoutpage">
                <Heading>{"All Workout Plans"}</Heading>
                <div className="workoutplans">
                    {response.workouts?.map((workout) => (
                        <WorkoutCard
                            id = {workout._id}
                            key={workout._id}
                            name={workout.title}
                            description={workout.description}
                            exercises={workoutExercises[workout._id]?.slice(0, 3)}
                            moreExercises={workoutExercises[workout._id]?.length > 3}
                            btnText={"Edit"}
                        />
                    ))}
                </div>
                <CustomButton sx={{ width: "30vw", fontSize: "20px" }} onClick={() => setShowModal(true)}>
                    {"Add Workout Plan"}
                </CustomButton>

                {showModal && (
                    <WorkoutModal
                        workoutName={workoutName}
                        setWorkoutName={setWorkoutName}
                        setShowModal={setShowModal}
                    />
                )}
            </div>
            <CustomFooter />
        </>
    );
};

export default WorkoutPage;
