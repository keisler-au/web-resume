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
import { useTranslation } from "react-i18next";

import { BASE_URL } from "../constants";
import { CardLayout, TextLayout } from "./CardLayout";
import { Description } from "./Descriptions";
import PageLayout from "./PageLayout";

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
    />
  );
};

const Contact: React.FC<{ description: Description[] }> = ({ description }) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fileName, setFileName] = useState<string>(t("fileUpload"));
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

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
        throw new Error(t("failedFetch"));
      }

      setStatusMessage(t("emailSent"));
      setIsSubmitting(false);
      reset();
      setFileName(t("fileUpload"));
    } catch (error) {
      console.error(error);
      setStatusMessage(t("emailFailed"));
      setIsSubmitting(false);
    }
  };

  return (
    <PageLayout
      heading="Get in Touch"
      description="Feel free to reach out through the email form, LinkedIn, or GitHub, I look forward to hearing from you!"
    >
      <TextLayout
        section={description[0].sections[0]}
        styles={{ textAlign: "center" }}
      />
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          width: "40%",
          margin: "0 auto",
          padding: theme.spacing(4), // Padding for form
          border: `1px solid ${theme.palette.secondary.main}`,
          borderRadius: 1,
          marginBottom: "3rem",
        }}
      >
        <CustomTextField
          label={t("name")}
          name="name"
          register={register}
          errors={errors}
          theme={theme}
        />
        <CustomTextField
          label={t("email")}
          name="email"
          type="email"
          register={register}
          errors={errors}
          theme={theme}
        />
        <CustomTextField
          label={t("message")}
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
            color:
              fileName === t("fileUpload")
                ? theme.palette.text.disabled
                : theme.palette.text.primary,
          }}
        >
          <Typography variant="body1">{fileName}</Typography>
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
              backgroundColor: theme.palette.primary.dark, // Hover effect for primary button
            },
          }}
        >
          {isSubmitting ? (
            <CircularProgress size={24} color="inherit" />
          ) : (
            t("send")
          )}
        </Button>

        {statusMessage && (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor:
                statusMessage === t("emailSent")
                  ? theme.palette.success.light
                  : theme.palette.error.light,
              color:
                statusMessage === t("emailSent")
                  ? theme.palette.success.main
                  : theme.palette.error.main,
              padding: theme.spacing(2),
              borderRadius: 1,
            }}
          >
            <Typography variant="body1" sx={{ marginRight: 1 }}>
              {statusMessage === t("emailSent") ? "✅" : "❌"} {statusMessage}
            </Typography>
          </Box>
        )}
      </Box>
    </PageLayout>
  );
};

export default Contact;
