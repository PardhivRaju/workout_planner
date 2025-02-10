import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { set, useForm } from "react-hook-form";
import CustomInput from "../../../components/customInput/CustomInput.jsx";
import CustomButton from "../../../components/button/CustomButton.jsx";
import {
  Heading,
  Title,
  LightText,
} from "../../../components/customTypo/CustomTypo.jsx";
import CustomModal from "../../../components/modal/CustomModal.jsx";
import RecordLogParent from "../../../components/recordLog/RecordLogParent.jsx";
import {
  useGetUserQuery,
  useLoginUserMutation,
} from "../../../store/UserApi.jsx";
import "./style.css";

const LoginPage = () => {
  const navigate = useNavigate();
  const { data: response, isLoading, error } = useGetUserQuery();
  const [loginUser, { isLoading: loading }] = useLoginUserMutation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (response) navigate("/");
  }, [response]);

  if (isLoading || loading) return <p>Loading...</p>;
  if (error) {
    console.log("Error loading user");
  }

  const onSubmit = async (data) => {
    try {
      console.log(data);
      await loginUser(data);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="signupPage">
      <form onSubmit={handleSubmit(onSubmit)} className="signupForm loginForm">
        <Heading>Hi, Welcome Back!</Heading>
        <CustomInput
          name="email"
          control={control}
          rules={{
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: "Invalid email format",
            },
          }}
          label="Email"
          type="email"
          sx={{
            width: "350px",
          }}
        />

        <CustomInput
          name="password"
          control={control}
          rules={{
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters long",
            },
          }}
          label="Password"
          type="password"
          sx={{
            width: "350px",
          }}
        />

        <CustomButton
          type="submit"
          sx={{
            width: "250px",
            fontSize: "1.2rem",
          }}
        >
          Submit
        </CustomButton>
        <LightText>
          Don't have an account? <span className="logRed">Sign up</span>
        </LightText>
      </form>
    </div>
  );
};

export default LoginPage;
