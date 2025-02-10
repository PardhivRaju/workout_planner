import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import "@fontsource/poppins";
import { useNavigate } from "react-router-dom";
import { useLazyLogoutUserQuery } from "../../store/UserApi";

import logo from "../../assets/logo.png";
import CustomButton from "../button/CustomButton";
import "./style.css";

const CustomHeader = () => {
  const navigate = useNavigate();
  const [logoutUser, { isLoading }] = useLazyLogoutUserQuery();

  const navigateToPage = (dest) => {
    if (dest === "Home") navigate("/");
    if (dest === "Workouts") navigate("/workoutplans");
  };

  const handleLogout = async () => {
    await logoutUser();
    navigate("/login");
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "white",
        fontFamily: "'Poppins', sans-serif",
        boxShadow: 2,
      }}
    >
      <Toolbar
        className="toolHeader"
        sx={{
          justifyContent: "space-between",
        }}
      >
        <img
          src={logo}
          alt="workout"
          className="logo"
          onClick={() => navigate("/")}
        />

        <div className="navTabs">
          {["Home", "Workouts", "My Activity"].map((tab) => (
            <ButtonBase
              key={tab}
              sx={{
                padding: "8px 16px",
                borderRadius: "8px",
                transition: "all 0.3s ease",
                typography: "h6",
                fontWeight: "bold",
                color: "black",
                "&:hover": {
                  opacity: 0.75,
                  transform: "scale(1.05)",
                },
                "&:active": {
                  opacity: 0.5,
                  transform: "scale(0.98)",
                },
              }}
              onClick={() => navigateToPage(tab)}
            >
              <Typography variant="h6">{tab}</Typography>
            </ButtonBase>
          ))}
        </div>

        <CustomButton
          sx={{
            backgroundColor: "#2378e0",
            width: "100px",
          }}
          onClick={() => handleLogout()}
        >
          Logout
        </CustomButton>
      </Toolbar>
    </AppBar>
  );
};

export default CustomHeader;
