import React, { Children } from "react";
import { Button } from "@mui/material";

const CustomButton = ({
    type = "button",
    children,
    sx = {},
    onClick
}) => {
    return (
        <Button type={type} onClick={onClick} variant="contained" sx={{
            backgroundColor: "#1C5DAF",
            width: "150px",
            fontFamily: "'Poppins', sans-serif",
            ...sx,
        }}>{children}</Button>
    );
}

export default CustomButton;