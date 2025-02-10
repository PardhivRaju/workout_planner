import React from "react";
import { useForm } from "react-hook-form";
import CustomInput from "../customInput/CustomInput.jsx";
import CustomButton from "../button/CustomButton.jsx";
import { Title } from "../customTypo/CustomTypo.jsx";
import "./style.css";

const RecordSet = ({ setId, onSubmit }) => {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const handleFormSubmit = (data) => {
        console.log(`Set ${setId} submitted:`, data);
        onSubmit();  // Notify parent that this set is submitted
    };

    return (
        <form onSubmit={handleSubmit(handleFormSubmit)} className="recordSetForm">
            <Title style={{ fontSize: "2rem" }}>Set {setId}</Title>

            <CustomInput
                name="reps"
                control={control}
                rules={{ required: "Reps are required" }}
                label="Total Reps"
                type="reps"
                sx={{ width: "350px" }}
            />

            <CustomInput
                name="weight"
                control={control}
                label="Weight Lifted"
                type="weight"
                sx={{ width: "350px" }}
            />

            <CustomInput
                name="duration"
                control={control}
                label="Duration"
                type="duration"
                sx={{ width: "350px" }}
            />

            <div className="setSubmit" style={{ display: "flex", justifyContent: "center" }}>
                <CustomButton type="submit" sx={{ width: "150px", fontSize: "1rem" }}>
                    Submit
                </CustomButton>
            </div>
        </form>
    );
};

export default RecordSet;
