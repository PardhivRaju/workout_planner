import React from "react";
import { Typography } from "@mui/material";
import "@fontsource/poppins";
import { FaDumbbell } from "react-icons/fa6";
import { FaRepeat } from "react-icons/fa6";



export const Heading = ({ children, level = "h1", ...props }) => (
  <Typography
    variant={level}
    sx={{
      fontWeight: 700,
      fontSize: level === "h1" ? "2.5rem" : level === "h2" ? "2rem" : "1.5rem",
      color: "#333",
      fontFamily: "'Poppins', sans-serif",
    //   marginBottom: 2,
    }}
    {...props}
  >
    {children}
  </Typography>
);


export const Title = ({ children, ...props }) => (
  <Typography
    variant="subtitle1"
    sx={{ color: "#333", fontWeight: 400, fontSize: "1.25rem", fontFamily: "'Poppins', sans-serif" }}
    {...props}
  >
    {children}
  </Typography>
);

 
export const LightText = ({ children, ...props }) => (
  <Typography
    variant="body2"
    sx={{ color: "#666", fontWeight: 300, fontSize: "1rem", fontFamily: "'Poppins', sans-serif" }}
    {...props}
  >
    {children}
  </Typography>
);

export const ExerciseText = ({ children, ...props }) => (
  <div style={{ display: "flex",margin : "5px"}}>
    <FaDumbbell size={23} style={{ paddingRight: "5px"}} />
    <LightText sx = {{color: "black",fontSize: "18px"}}> {children} </LightText>
  </div>
);

export const RepeationText = ({ children, ...props }) => (
  <div style={{ display: "flex",margin : "5px"}}>
    <FaRepeat size={20} style={{ paddingRight: "5px"}} />
    <LightText sx = {{color: "black",fontSize: "18px"}}> {children} </LightText>
  </div>
);