import React from "react";
import { Heading, LightText, Title } from "../customTypo/CustomTypo";
import { Box, Typography, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import "@fontsource/poppins";

const CustomFooter = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "black",
        color: "white",
        py: 3,
        px: 2,
        textAlign: "center",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
  
      <Heading sx={{color: "white", fontSize: "2.2rem", marginBottom: "1rem"}}>Workout</Heading>

      <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mb: 1 }}>
        {["Home", "About", "Contact"].map((item) => (
          <LightText
            key={item}
            variant="body2"
            sx={{
              cursor: "pointer",
              transition: "opacity 0.3s ease",
              "&:hover": { opacity: 0.7 },
            }}
          >
            {item}
          </LightText>
        ))}
      </Box>

      <Box>
        {[FacebookIcon, TwitterIcon, InstagramIcon].map((Icon, index) => (
          <IconButton key={index} sx={{ color: "white", "&:hover": { opacity: 0.7 } }}>
            <Icon />
          </IconButton>
        ))}
      </Box>

      <LightText variant="body2" sx={{ mt: 2 }}>
        © {new Date().getFullYear()} Workout. All rights reserved.
      </LightText>
    </Box>
  );
};

export default CustomFooter;
