import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Heading, Title, LightText } from "../customTypo/CustomTypo.jsx";
import CustomButton from "../button/CustomButton.jsx";

import "./style.css"


const CustomCard = ({
  title,
  sx = {},
  children,
  btnText,
}) => {
    return (
        <Card
        sx={{
          backgroundColor: "#E5EEFF",
          borderRadius: "12px",
          boxShadow: "0 4px 4px rgba(0, 0, 0, 0.36)",
          width: "500px",
          ...sx
        }}
      >
        <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
        >
          <Title>
            {title}
          </Title>
          {children && (
            <LightText>{children}</LightText>
          )}
          {btnText && (
            <div className="buttonContainer">
              <CustomButton>{btnText}</CustomButton>
            </div>
          )}
        </CardContent>
        
      </Card>
    );
}

export default CustomCard;