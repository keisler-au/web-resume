import { LinkedIn, GitHub } from "@mui/icons-material";
import { TextField, Typography, Box, Link } from "@mui/material";
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import {
  EMAIL_ADDRESS,
  GITHUB_URL,
  LINKEDIN_URL,
  PHONE_NUMBER,
} from "../constants";
import theme from "../theme";

interface CustomTextFieldProps {
  label: string;
  name: string;
  type?: string;
  rows?: number;
  register: any;
  errors: any;
}

export const CustomTextField: React.FC<CustomTextFieldProps> = ({
  label,
  name,
  type = "text",
  rows = 1,
  register,
  errors,
}) => {
  return (
    <TextField
      label={label}
      variant="outlined"
      type={type}
      multiline={rows > 1}
      rows={rows}
      {...register(name, { required: true })}
      error={!!errors[name]}
      helperText={errors[name] ? `${label} is required` : ""}
      sx={{
        "& .MuiOutlinedInput-root": {
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.secondary.main,
            backgroundColor: theme.palette.action.hover,
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.secondary.main,
          },
        },
        "& .MuiInputLabel-root.Mui-focused": {
          color: theme.palette.secondary.main,
        },
      }}
      InputProps={{
        style: {
          color: theme.palette.secondary.main,
        },
      }}
    />
  );
};

const ContactChildren = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 0.5,
      }}
    >
      <Typography
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        <FaPhoneAlt />
        {PHONE_NUMBER}
      </Typography>

      <Link
        href={`https://${GITHUB_URL}`}
        target="_blank"
        rel="noopener noreferrer"
        color={theme.palette.text.primary}
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          textDecoration: "none",
        }}
      >
        <GitHub />
        {GITHUB_URL}
      </Link>
      <Typography
        style={{
          display: "flex",
          alignItems: "center",
          gap: 15,
        }}
      >
        <MdEmail />
        {EMAIL_ADDRESS}
      </Typography>
      <Link
        href={`https://linkedin.com/${LINKEDIN_URL}`}
        target="_blank"
        rel="noopener noreferrer"
        color={theme.palette.text.primary}
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1.5,
          textDecoration: "none",
        }}
      >
        <LinkedIn />
        {LINKEDIN_URL}
      </Link>
    </Box>
  );
};

export default ContactChildren;
