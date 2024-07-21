import React, { forwardRef, useImperativeHandle } from "react";
import {
  Box,
  Stack,
  Typography,
  Button,
  TextField,
  InputLabel,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

const Form4 = (props, ref) => {
  const formik = useFormik({
    initialValues: {
      businessRegNo: props.form4Data.businessRegNo ? props.form4Data.businessRegNo : "",
      businessRegDate: props.form4Data.businessRegDate ? props.form4Data.businessRegDate : "",
      businessType: props.form4Data.businessType ? props.form4Data.businessType : "",
      businessEmail: props.form4Data.businessEmail ? props.form4Data.businessEmail : "",
      businessDocument: props.form4Data.businessDocument ? props.form4Data.businessDocument : null,
    },
    validationSchema: Yup.object().shape({
      businessRegNo: Yup.string().required(
        "Business Registration Number is Required"
      ),
      businessRegDate: Yup.date()
        .max(new Date(), "Date should be past date")
        .required("Business Registration date is Required"),
      businessType: Yup.string().required("Business Type is required"),
      businessEmail: Yup.string()
        .email("Enter valid email")
        .required("Email is required"),
      businessDocument: Yup.mixed().required("Business Document is required"), // Validate file
    }),
    onSubmit: (values) => {
      props.setForm4Data(values);
      console.log(values);
    },
  });

  const handleFileChange = (event) => {
    const file = event.currentTarget.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        formik.setFieldValue("businessDocument", reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  useImperativeHandle(ref, () => ({
    submitForm: () => {
      formik.handleSubmit();
    },
  }));

  return (
    <Stack direction="row" height="60vh" sx={{ paddingLeft: "32px" }}>
      {/* Left Side: Business Document Upload */}
      <Stack
        width="45%"
        height="90%"
        sx={{ padding: "16px", border: "1px solid #f0f0f0" }}
      >
        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <Typography variant="body1_alata">
            Upload Business Document (PDF)
          </Typography>
          {/* Custom-styled file input */}
          <label
            htmlFor="businessDocument"
            style={{ marginTop: "8px", cursor: "pointer" }}
          >
            <Stack direction="row" alignItems="center" spacing={1}>
              <Button variant="outlined" component="span">
                <Typography variant="body2_alata">Upload PDF</Typography>
              </Button>
              <Typography variant="body2" color="textSecondary">
                {formik.values.businessDocument
                  ? formik.values.businessDocument.name
                  : "No file chosen"}
              </Typography>
            </Stack>
          </label>
          <input
            id="businessDocument"
            name="businessDocument"
            type="file"
            onChange={handleFileChange}
            style={{ display: "none" }}
          />
          {/* Display error message if needed */}
          {formik.touched.businessDocument && formik.errors.businessDocument ? (
            <Typography color="error">
              {formik.errors.businessDocument}
            </Typography>
          ) : null}
        </Box>
      </Stack>

      {/* Right Side: Business Information Form */}
      <Stack
        width="55%"
        height="90%"
        sx={{ padding: "16px", paddingLeft: "70px" }}
      >
        <Stack>
          <Typography variant="subtitle_alata">Business Information</Typography>
          <Typography variant="body1_nunito" color="textSecondary">
            Provide essential details about your business.
          </Typography>
        </Stack>
        <Box
          component="form"
          onSubmit={formik.handleSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            height: "100%",
          }}
        >
          {/* Form Fields */}
          <InputLabel htmlFor="businessRegNo">
            <Typography variant="body1_alata">
              Business Registration Number
            </Typography>
          </InputLabel>
          <TextField
            id="businessRegNo"
            name="businessRegNo"
            type="text"
            variant="filled"
            size="small"
            value={formik.values.businessRegNo}
            onChange={formik.handleChange}
            error={
              formik.touched.businessRegNo &&
              Boolean(formik.errors.businessRegNo)
            }
            helperText={
              formik.touched.businessRegNo && formik.errors.businessRegNo
            }
            sx={{ marginBottom: "8px", width: "80%" }}
          />
          <InputLabel htmlFor="businessRegDate">
            <Typography variant="body1_alata">Registration Date</Typography>
          </InputLabel>
          <TextField
            id="businessRegDate"
            name="businessRegDate"
            type="date"
            variant="filled"
            size="small"
            value={formik.values.businessRegDate}
            onChange={formik.handleChange}
            error={
              formik.touched.businessRegDate &&
              Boolean(formik.errors.businessRegDate)
            }
            helperText={
              formik.touched.businessRegDate && formik.errors.businessRegDate
            }
            sx={{ marginBottom: "8px", width: "80%" }}
          />

          <InputLabel htmlFor="businessType">
            <Typography variant="body1_alata">Business Type</Typography>
          </InputLabel>
          <TextField
            id="businessType"
            name="businessType"
            label="Business Type"
            type="text"
            variant="filled"
            size="small"
            value={formik.values.businessType}
            onChange={formik.handleChange}
            error={
              formik.touched.businessType && Boolean(formik.errors.businessType)
            }
            helperText={
              formik.touched.businessType && formik.errors.businessType
            }
            sx={{ marginBottom: "8px", width: "80%" }}
          />

          <InputLabel htmlFor="businessEmail">
            <Typography variant="body1_alata">Business Email</Typography>
          </InputLabel>
          <TextField
            id="businessEmail"
            name="businessEmail"
            label="Business Email"
            type="email"
            variant="filled"
            size="small"
            value={formik.values.businessEmail}
            onChange={formik.handleChange}
            error={
              formik.touched.businessEmail &&
              Boolean(formik.errors.businessEmail)
            }
            helperText={
              formik.touched.businessEmail && formik.errors.businessEmail
            }
            sx={{ marginBottom: "8px", width: "80%" }}
          />
        </Box>
      </Stack>
    </Stack>
  );
};

export default forwardRef(Form4);
