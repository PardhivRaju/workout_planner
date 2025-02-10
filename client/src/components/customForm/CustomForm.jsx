import React from "react";
import ShadowCard from "../shadowCard/ShadowCard";
import CustomInput from "../customInput/CustomInput";
import CustomButton from "../button/CustomButton";
import { Title } from "../customTypo/CustomTypo";
import { Controller, useForm } from "react-hook-form";

const CustomForm = ({
    title,
    children,
    btnText,
    sx = {}
}) => {
    return (
        <ShadowCard sx={{
            ...sx
        }}>
            <Title>{title}</Title>
            {children && (
                {children}
            )}
            <CustomButton>{btnText}</CustomButton>
        </ShadowCard>
    );
}

export default CustomForm;