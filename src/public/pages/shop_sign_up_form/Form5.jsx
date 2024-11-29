import React, { forwardRef, useImperativeHandle } from "react";
import {
  Box,
  TextField,
  Typography,
  Grid,
  Autocomplete,
  Button,
  Avatar,
} from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";
import { Stack } from "@mui/system";
import { useFormik } from "formik";
import * as Yup from "yup";

// Sample category options
const clothCategories = [
    { title: "Men's Clothing" },
    { title: "Women's Clothing" },
    { title: "Kids' Clothing" },
    { title: "Activewear" },
    { title: "Formal Wear" },
    { title: "Casual Wear" },
    { title: "Outerwear" },
    { title: "Underwear & Sleepwear" },
    { title: "Accessories" }
  ];

const Form5 = (props , ref) => {
  const [image, setImage] = React.useState(null);

  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
        formik.setFieldValue("logo", reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Formik configuration
  const formik = useFormik({
    initialValues: {
      shopDescription: "",
      categories: [],
      facebookLink: "",
      instagramLink: "",
      logo: "", // Image field
    },
    validationSchema: Yup.object({
      shopDescription: Yup.string().required("Shop description is required"),
      categories: Yup.array().min(1, "At least one category is required"),
      facebookLink: Yup.string(),
      instagramLink: Yup.string(),
      logo: Yup.string().required("Storefront image is required"), // Image validation
    }),
    onSubmit: (values) => {
        props.setForm5Data(values);
        console.log("Form values:", values);
      // Add your form submission logic here
    },
  });

  useImperativeHandle(ref , () => {
    return {
        submitForm: () => {
            formik.handleSubmit();
        }
    }
  })

  return (
    <Box sx={{ width: "100%", maxHeight: "70vh", p: 2, borderRadius: 2 , padding:"30px 50px" }}>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            sm={7}
            sx={{ borderRight: "1px solid #f0f0f0", paddingRight: "100px" }}
          >
            <Stack direction="column" sx={{ marginBottom: "30px" }} spacing={0.3}>
              <Typography variant="subtitle_alata">Shop Information</Typography>
              <Typography variant="body1_nunito" color="#999999" gutterBottom>
                Essential Details About Your Store
              </Typography>
            </Stack>
            <Box display="flex" flexDirection="column" gap={2}>
              <TextField
                label="Shop Description"
                multiline
                rows={3}
                variant="filled"
                fullWidth
                name="shopDescription"
                value={formik.values.shopDescription}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.shopDescription &&
                  Boolean(formik.errors.shopDescription)
                }
                helperText={
                  formik.touched.shopDescription &&
                  formik.errors.shopDescription
                }
              />
              <Autocomplete
                multiple
                limitTags={2}
                id="multiple-limit-tags"
                size="small"
                options={clothCategories}
                getOptionLabel={(option) => option.title}
                onChange={(event, value) =>
                  formik.setFieldValue("categories", value)
                }
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Categories"
                    placeholder="Select Categories"
                  />
                )}
                sx={{ width: "100%" }}
                value={formik.values.categories}
                error={
                  formik.touched.categories && Boolean(formik.errors.categories)
                }
                helperText={
                  formik.touched.categories && formik.errors.categories
                }
              />
              <TextField
                label="Facebook Link"
                variant="filled"
                size="small"
                fullWidth
                name="facebookLink"
                value={formik.values.facebookLink}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.facebookLink &&
                  Boolean(formik.errors.facebookLink)
                }
                helperText={
                  formik.touched.facebookLink && formik.errors.facebookLink
                }
              />
              <TextField
                label="Instagram Link"
                variant="filled"
                size="small"
                fullWidth
                name="instagramLink"
                value={formik.values.instagramLink}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.instagramLink &&
                  Boolean(formik.errors.instagramLink)
                }
                helperText={
                  formik.touched.instagramLink && formik.errors.instagramLink
                }
              />
              {/* Error message for image */}
              {formik.touched.storefrontImage &&
                formik.errors.storefrontImage && (
                  <Typography color="error">
                    {formik.errors.storefrontImage}
                  </Typography>
                )}
            </Box>
          </Grid>
          <Grid item xs={12} sm={5}>
            <Stack direction="column" sx={{ marginBottom: "80px" , paddingLeft:'30px' }} spacing={0.3}>
              <Typography variant="subtitle_alata">Shop Logo</Typography>
              <Typography variant="body1_nunito" color="#999999" gutterBottom>
              Upload your store's logo to enhance brand visibility.
              </Typography>
            </Stack>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              gap={2}
            >
              <Avatar
                src={image}
                alt="Storefront Image"
                sx={{ width: 150, height: 150 }}
              />
              <Button
                variant="outlined"
                component="label"
                startIcon={<PhotoCamera />}
              >
                <Typography variant="body2_alata">Upload Logo</Typography>

                <input
                  hidden
                  accept="image/*"
                  type="file"
                  onChange={handleImageChange}
                />
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default forwardRef(Form5);
