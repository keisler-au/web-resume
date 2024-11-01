import { Button, TextField, Typography, Box } from "@mui/material";
import axios from "axios";
import React from "react";
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
  } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("message", data.message);

    if (data.file && data.file.length > 0) {
      formData.append("file", data.file[0]);
    }

    try {
      await axios.post(`${BASE_URL}/api/send_email/`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      //   alert(t("emailSent")); // success message;
    } catch (error) {
      console.error(error);
      //   alert(t("emailFailed")); // error message;
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{ display: "flex", flexDirection: "column", gap: 2 }}
    >
      <Typography variant="h4">{t("contact")}</Typography>

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

      <Button variant="contained" component="label">
        {t("uploadFile")}
        <input type="file" {...register("file")} hidden />
      </Button>

      <Button type="submit" variant="contained" color="primary">
        {t("send")}
      </Button>
    </Box>
  );
};

export default Contact;
