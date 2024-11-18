import AttachFileIcon from "@mui/icons-material/AttachFile";
import {
  Button,
  TextField,
  Typography,
  Box,
  CircularProgress,
  IconButton,
} from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { BASE_URL } from "../constants";

interface FormValues {
  name: string;
  email: string;
  message: string;
  files?: FileList;
}

const Contact: React.FC = () => {
  const { t } = useTranslation();
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
      if (!response.ok) {
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
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        width: "40%",
        margin: "0 auto",
      }}
    >
      <Typography variant="h4" sx={{ textAlign: "center" }}>
        {t("contact")}
      </Typography>
      <TextField
        label={t("name")}
        variant="outlined"
        {...register("name", { required: true })}
        error={!!errors.name}
        helperText={errors.name ? t("nameRequired") : ""}
      />
      <TextField
        label={t("email")}
        variant="outlined"
        type="email"
        {...register("email", { required: true })}
        error={!!errors.email}
        helperText={errors.email ? t("emailRequired") : ""}
      />

      <TextField
        label={t("message")}
        variant="outlined"
        multiline
        rows={4}
        {...register("message", { required: true })}
        error={!!errors.message}
        helperText={errors.message ? t("messageRequired") : ""}
      />
      <Button
        variant="outlined"
        component="label"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px",
          borderRadius: 1,
          textAlign: "left",
          minHeight: "56px",
          backgroundColor: "transparent",
          borderColor: "rgba(0, 0, 0, 0.23)",
          "&:hover": {
            backgroundColor: "rgba(0, 0, 0, 0.08)",
          },
          textTransform: "none",
          color: fileName === t("fileUpload") ? "gray" : "black",
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
        color="primary"
        disabled={isSubmitting}
        sx={{ display: "flex", alignItems: "center", gap: 1 }}
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
                ? "rgba(76, 175, 80, 0.1)"
                : "rgba(244, 67, 54, 0.1)",
            color: statusMessage === t("emailSent") ? "#4caf50" : "#f44336",
            padding: 2,
            borderRadius: 1,
            marginTop: 2,
          }}
        >
          <Typography variant="body1" sx={{ marginRight: 1 }}>
            {statusMessage === t("emailSent") ? "✅" : "❌"} {statusMessage}
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default Contact;
