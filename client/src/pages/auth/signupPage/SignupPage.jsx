import React from "react";
import { useForm } from "react-hook-form";
import CustomInput from "../../../components/customInput/CustomInput.jsx";
import CustomButton from "../../../components/button/CustomButton.jsx";
import {
  Heading,
  Title,
  LightText,
} from "../../../components/customTypo/CustomTypo.jsx";
import { useRegisterUserMutation } from "../../../store/UserApi.jsx";
import "./style.css";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const [registerUser, { isLoading }] = useRegisterUserMutation();
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      console.log(data);
      await registerUser(data);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="signupPage">
      <form onSubmit={handleSubmit(onSubmit)} className="signupForm">
        <Heading>Create an account</Heading>
        <CustomInput
          name="username"
          control={control}
          rules={{
            required: "Username is required",
          }}
          label="Username"
          type="username"
          sx={{
            width: "350px",
          }}
        />

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
          Already have an account? <span className="logRed">Log in</span>
        </LightText>
      </form>
    </div>
  );
};

export default SignupPage;
