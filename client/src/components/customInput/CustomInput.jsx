import React from "react";
import {TextField} from "@mui/material";
import { Controller } from "react-hook-form";

const CustomInput = ({
    name,
    control,
    rules,
    defaultValue = "",
    id,
    label,
    sx = {}
}) => {
    return (
        <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        rules={rules}
        render={({ field, fieldState: { error } }) => (
            <TextField
                id={id}
                label={label}
                variant="outlined"
                {...field}
                error={!!error}
                helperText={error ? error.message : ""}
                InputLabelProps={{
                    // shrink: true,
                    sx: {
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: "1.1rem", // Adjust font size
                    "&.Mui-focused": {
                        color: "#127AFF", // Label color when focused
                    },
                    },
                }}
                InputProps={{
                    sx: {
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: "400",
                    fontSize: "1.1rem",
                    color: "#000",
                    "&::placeholder": {
                        color: "lightgray", // Placeholder text color
                    },
                    },
                }}
                sx={{
                    "& .MuiOutlinedInput-root": {
                    borderRadius: "10px", // Change border radius
                    "& fieldset": {
                        borderColor: "gray", // Default border color
                    },
                    "&:hover fieldset": {
                        borderColor: "black", // Border color on hover
                    },
                    "&.Mui-focused fieldset": {
                        borderColor: "#127AFF", // Border color when focused
                    },
                    },
                    "& .MuiInputBase-input": {
                    color: "#242424", // Inner text color
                    },
                    "& .MuiInputLabel-root": {
                    color: "gray", // Label color
                    },
                    "& .MuiInputLabel-root.Mui-focused": {
                    color: "#127AFF", // Label color when focused
                    },
                    width: "400px",
                    ...sx,
                }}
            />
        )}
        />
        
    );
}

export default CustomInput;


//Below is the CustomInput usage example in an actual form

// import React from "react";
// import { useForm } from "react-hook-form";
// import CustomInput from "./CustomInput";

// export default function App() {
//   const {
//     control,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = (data) => {
//     console.log(data);
//   };

//   return (
//     <div>
//       <h1>Reusable Input with React Hook Form</h1>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <CustomInput
//           name="email"
//           control={control}
//           rules={{
//             required: "Email is required",
//             pattern: {
//               value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
//               message: "Invalid email format",
//             },
//           }}
//           label="Email"
//           type="email"
//         />

//         <CustomInput
//           name="password"
//           control={control}
//           rules={{
//             required: "Password is required",
//             minLength: {
//               value: 6,
//               message: "Password must be at least 6 characters long",
//             },
//           }}
//           label="Password"
//           type="password"
//         />

//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }
