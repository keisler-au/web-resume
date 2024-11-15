import AttachFileIcon from "@mui/icons-material/AttachFile";
import {
  Button,
  TextField,
  Typography,
  Box,
  CircularProgress,
  IconButton,
} from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { BASE_URL } from "../constants";

interface FormValues {
  name: string;
  email: string;
  message: string;
  file?: FileList;
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
  const [fileName, setFileName] = useState<string | null>(t("fileUpload"));
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [statusType, setStatusType] = useState<"success" | "error" | null>(
    null,
  );

  const onSubmit = async (data: FormValues) => {
    console.log(data);
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("message", data.message);
    console.log(data.file);
    if (data.file && data.file.length > 0) {
      let fileNames = "";
      Array.from(data.file).forEach((file) => {
        formData.append("file", file); // Append each file to the 'file' field
        fileNames += `${file.name}  `;
      });
      setFileName(fileNames);
    }

    try {
      setIsSubmitting(true);
      console.log(formData.get("file"));
      await axios.post(`${BASE_URL}/api/send_email/`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setStatusMessage(t("emailSent"));
      setIsSubmitting(false);
      setStatusType("success");
      reset();
      setFileName(t("fileUpload"));
    } catch (error) {
      console.error(error);
      setStatusMessage(t("emailFailed"));
      setStatusType("error");
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
          minHeight: "56px", // Matches height of TextField
          backgroundColor: "transparent", // Make button look like a text field
          borderColor: "rgba(0, 0, 0, 0.23)", // Border similar to TextField
          "&:hover": {
            backgroundColor: "rgba(0, 0, 0, 0.08)", // Hover effect
          },
          textTransform: "none", // Prevent the text from being capitalized
          color: fileName === t("fileUpload") ? "gray" : "black",
        }}
      >
        <Typography variant="body1">{fileName}</Typography>
        <input
          data-testid="file-input"
          type="file"
          multiple
          {...register("file")}
          hidden
          onChange={(e) => {
            if (e.target.files) {
              setFileName(e.target.files[0].name);
            }
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

      {/* Display status message */}
      {statusMessage && (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor:
              statusType === "success"
                ? "rgba(76, 175, 80, 0.1)"
                : "rgba(244, 67, 54, 0.1)",
            color: statusType === "success" ? "#4caf50" : "#f44336",
            padding: 2,
            borderRadius: 1,
            marginTop: 2,
          }}
        >
          {statusType === "success" ? (
            <Typography variant="body1" sx={{ marginRight: 1 }}>
              ✅ {statusMessage}
            </Typography>
          ) : (
            <Typography variant="body1" sx={{ marginRight: 1 }}>
              ❌ {statusMessage}
            </Typography>
          )}
        </Box>
      )}
    </Box>
  );
};

export default Contact;
