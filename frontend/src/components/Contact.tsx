import AttachFileIcon from "@mui/icons-material/AttachFile";
import {
  Button,
  TextField,
  Typography,
  Box,
  CircularProgress,
  IconButton,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

import { BASE_URL } from "../constants";

interface FormValues {
  name: string;
  email: string;
  message: string;
  files?: FileList;
}

const CustomTextField: React.FC<{
  label: string;
  name: string;
  type?: string;
  rows?: number;
  register: any;
  errors: any;
  theme: any;
}> = ({ label, name, type = "text", rows = 1, register, errors, theme }) => {
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
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        width: { xs: "90%", sm: "70%", md: "40%" },
        margin: "0 auto",
        padding: { xs: theme.spacing(2), sm: theme.spacing(4) },
        border: `1px solid ${theme.palette.secondary.main}`,
        borderRadius: 1,
        marginBottom: "3rem",
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
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: theme.spacing(1.5),
          borderRadius: 1,
          textAlign: "left",
          minHeight: "56px",
          borderColor: theme.palette.primary.dark,
          "&:hover": {
            borderColor: theme.palette.secondary.main,
            backgroundColor: theme.palette.action.hover,
          },
          textTransform: "none",
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
          display: "flex",
          alignItems: "center",
          gap: 1,
          "&:hover": {
            backgroundColor: theme.palette.primary.dark,
          },
          color: allFieldsFilled
            ? theme.palette.secondary.main
            : theme.palette.text.primary,
        }}
      >
        {isSubmitting ? <CircularProgress size={24} color="inherit" /> : "Send"}
      </Button>

      {statusMessage && (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: theme.palette.background.paper,
            padding: theme.spacing(2),
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
  );
};

export default Contact;
