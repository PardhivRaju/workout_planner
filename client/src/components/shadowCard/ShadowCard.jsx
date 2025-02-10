import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import "@fontsource/poppins";

// import "./style.css"


const ShadowCard = ({
  sx1 = {},
  sx2 = {},
  children
}) => {
    return (
        <Card
        sx={{
          backgroundColor: "#fff",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2), 0 -2px 4px rgba(0, 0, 0, 0.1)",
          width: "500px",
          fontFamily: "'Poppins', sans-serif",
          ...sx1
        }}
      >
        <CardContent
        sx={{
          // display: "flex",
        //   flexDirection: "column",
        //   gap: "1rem",
        fontFamily: "'Poppins', sans-serif",
        ...sx2
        }}
        >
          {children}
        </CardContent>
      </Card>
    );
}

export default ShadowCard;