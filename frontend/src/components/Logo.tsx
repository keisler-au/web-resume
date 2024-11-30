import { Box, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

const Logo: React.FC<{ scrollY: number }> = ({ scrollY }) => {
  const { t } = useTranslation();
  const white = "black";
  const black = "white";
  return (
    // <Box sx={{}}>
    <Box
      sx={{
        display: "flex",
        // justifyContent: "center",
        alignItems: "center",
        paddingLeft: "12vw",
        position: "sticky",
        top: "17vh",
        height: 0,
      }}
    >
      <Box
        sx={{
          width: "20vh",
          height: "20vh",
          backgroundColor: white, // Outer circle color
          borderRadius: "50%", // Makes it a circle
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative", // Positioning context for the inner circle
          transformOrigin: "center right",
          transform:
            scrollY > 500
              ? `scale(${1 - Math.min(scrollY / 2000, 0.55)})`
              : "none",
          transition: "transform 0.1s ease",
        }}
      >
        {/* White donut hole in the center */}
        <Box
          sx={{
            position: "absolute",
            width: "8.12rem", // Inner circle width (donut hole)
            height: "8.12rem", // Inner circle height (donut hole)
            backgroundColor: "black", // Hole color
            borderRadius: "50%", // Makes it a circle
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)", // Centers the inner circle
            border: "2px solid white", // 2px border around the donut hole
          }}
        />
        {/* Middle white1 circle */}
        <Box
          sx={{
            width: "7.9rem",
            height: "7.9rem",
            backgroundColor: white, // Outer circle color
            borderRadius: "50%", // Makes it a circle
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative", // Positioning context for the inner circle
          }}
        >
          {/* Text in the center of the donut */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
          >
            {/* Left Dot */}
            <Box
              sx={{
                position: "absolute",
                left: "-30%", // Position left dot
                top: "50%",
                transform: "translateY(-50%)",
                width: 4, // Dot size
                height: 4,
                backgroundColor: black, // Dot color
                borderRadius: "50%", // Makes it a circle
              }}
            />

            {/* Text */}
            <Typography
              sx={{
                color: black, // Text color
                fontSize: 48, // Font size
                zIndex: 1, // Ensure text appears above other elements
              }}
            >
              JK
            </Typography>

            {/* Right Dot */}
            <Box
              sx={{
                position: "absolute",
                right: "-30%", // Position right dot
                top: "50%",
                transform: "translateY(-50%)",
                width: 4, // Dot size
                height: 4,
                backgroundColor: black, // Dot color
                borderRadius: "50%", // Makes it a circle
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
    // </Box>
  );
};

export default Logo;
