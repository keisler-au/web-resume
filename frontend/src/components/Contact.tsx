import { LinkedIn, GitHub } from "@mui/icons-material";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import {
  Button,
  TextField,
  Typography,
  Box,
  CircularProgress,
  IconButton,
  useTheme,
  Link,
} from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import {
  BASE_URL,
  EMAIL_ADDRESS,
  GITHUB_URL,
  LINKEDIN_URL,
  PHONE_NUMBER,
} from "../constants";

interface CustomTextFieldProps {
  label: string;
  name: string;
  type?: string;
  rows?: number;
  register: any;
  errors: any;
  theme: any;
}

const CustomTextField: React.FC<CustomTextFieldProps> = ({
  label,
  name,
  type = "text",
  rows = 1,
  register,
  errors,
  theme,
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

interface FormValues {
  name: string;
  email: string;
  message: string;
  files?: FileList;
}

const Contact: React.FC = () => {
  const theme = useTheme();
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fileName, setFileName] = useState("No Files Uploaded");
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const watchFields = watch(["name", "email", "message"]);
  const allFieldsFilled = watchFields.every(
    (value) => value && value.trim() !== "",
  );

  const onSubmit = async (data: FormValues) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("message", data.message);

    if (data.files && data.files.length > 0) {
      Array.from(data.files).forEach((file) => {
        formData.append("files", file);
      });
    }

    try {
      setIsSubmitting(true);
      const response = await fetch(`${BASE_URL}/api/send_email/`, {
        method: "POST",
        body: formData,
      });

      if (response && !response.ok) {
        throw new Error("Failed to fetch data");
      }

      setStatusMessage("Email sent!");
      setIsSubmitting(false);
      reset();
      setFileName("No Files Uploaded");
    } catch (error) {
      console.error(error);
      setStatusMessage("Email failed to send.");
      setIsSubmitting(false);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          width: { xs: "90%", sm: "70%", md: "35%" },
          margin: "0 auto",
          padding: { xs: 2, sm: 4 },
          display: "flex",
          flexDirection: "column",
          gap: 2,
          border: `1px solid ${theme.palette.secondary.main}`,
          // borderRadius: 1,
          // marginBottom: "3rem",
        }}
      >
        <CustomTextField
          label="Name"
          name="name"
          register={register}
          errors={errors}
          theme={theme}
        />
        <CustomTextField
          label="Email"
          name="email"
          type="email"
          register={register}
          errors={errors}
          theme={theme}
        />
        <CustomTextField
          label="Message"
          name="message"
          rows={4}
          register={register}
          errors={errors}
          theme={theme}
        />

        <Button
          variant="outlined"
          component="label"
          sx={{
            minHeight: "56px",
            display: "flex",
            // alignItems: "center",
            justifyContent: "space-between",
            // padding: theme.spacing(1.5),
            // borderRadius: 1,
            // textAlign: "left",
            textTransform: "none",
            borderColor: theme.palette.primary.dark,
            "&:hover": {
              borderColor: theme.palette.secondary.main,
              backgroundColor: theme.palette.action.hover,
            },
          }}
        >
          <Typography
            variant="body1"
            sx={{
              color:
                fileName === "No Files Uploaded"
                  ? theme.palette.text.primary
                  : theme.palette.secondary.main,
            }}
          >
            {fileName}
          </Typography>
          <input
            type="file"
            multiple
            hidden
            {...register("files")}
            onChange={(e) => {
              if (e.target.files) {
                const fileNames = Array.from(e.target.files).map(
                  (file) => file.name,
                );
                setFileName(fileNames.join(", "));
              }
              register("files").onChange(e);
            }}
          />
          <IconButton component="span">
            <AttachFileIcon />
          </IconButton>
        </Button>

        <Button
          type="submit"
          variant="contained"
          disabled={isSubmitting}
          sx={{
            // display: "flex",
            // alignItems: "center",
            // gap: 1,
            color: allFieldsFilled
              ? theme.palette.secondary.main
              : theme.palette.text.primary,
            "&:hover": {
              backgroundColor: theme.palette.primary.dark,
            },
          }}
        >
          {isSubmitting ? (
            <CircularProgress size={24} color="inherit" />
          ) : (
            "Send"
          )}
        </Button>

        {statusMessage && (
          <Box
            sx={{
              padding: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: theme.palette.background.paper,
              borderRadius: 1,
            }}
          >
            <Typography
              variant="body1"
              sx={{
                marginRight: 1,
                color:
                  statusMessage === "Email sent!"
                    ? theme.palette.success.main
                    : theme.palette.error.main,
              }}
            >
              {statusMessage === "Email sent!" ? "✅" : "❌"} {statusMessage}
            </Typography>
          </Box>
        )}
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1,
          margin: "auto",
          position: {
            xs: "relative",
            md: "fixed",
          },
          bottom: {
            xs: "auto",
            md: "1.5rem",
          },
          left: {
            xs: "auto",
            md: "1.5rem",
          },
        }}
      >
        <Typography
          color="secondary"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            // justifyContent: "flex-start",
          }}
        >
          <FaPhoneAlt fontSize="1.6rem" />
          {PHONE_NUMBER}
        </Typography>

        <Link
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          color="secondary"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            // justifyContent: "flex-start",
            textDecoration: "none",
          }}
        >
          <GitHub fontSize="large" />
          {GITHUB_URL}
        </Link>
        <Typography
          style={{
            color: theme.palette.secondary.main,
            display: "flex",
            alignItems: "center",
            gap: 15,
            textDecoration: "none",
            cursor: "pointer",
          }}
        >
          <MdEmail fontSize="1.9rem" />
          {EMAIL_ADDRESS}
        </Typography>
        <Link
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          color="secondary"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1.5,
            // justifyContent: "flex-start",
            textDecoration: "none",
          }}
        >
          <LinkedIn fontSize="large" />
          {LINKEDIN_URL}
        </Link>
      </Box>
    </Box>
  );
};

export default Contact;
