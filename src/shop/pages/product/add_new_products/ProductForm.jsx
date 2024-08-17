import React, { useState, useEffect } from "react";
import {
  Box,
  TextField,
  Typography,
  Button,
  Grid,
  Select,
  MenuItem,
  ToggleButtonGroup,
  ToggleButton,
  IconButton,
  InputAdornment,
  InputLabel,
  FormControl,
  LinearProgress,
} from "@mui/material";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from "@mui/icons-material/Save";
import AddIcon from "@mui/icons-material/Add";
import { Autocomplete, Chip } from "@mui/material";
import ProductCategory from "./ProductCategory";
import { Colors } from "./ProductCategory";
import { useFormik } from "formik";
import * as Yup from "yup";
import DialogBox from "./DialogBox";
import { Stack } from "@mui/system";
import ProductAddResult from "./ProductAddResult";
import WebApi from "../../../api/WebApi";
import { storage } from "../../../../config/firebaseConfig";
import { ref, uploadBytes } from "firebase/storage";

const ProductForm = () => {
  const [gender, setGender] = useState("");
  const [category, setCategory] = useState("");
  const [subcategory, setSubcategory] = useState("");
  const [discountType, setDiscountType] = useState("");
  const [loading, setLoading] = useState(false);
  const [addProduct, setAddProduct] = useState(false);
  const [responseStatus, setResponseStatus] = useState();

  const formik = useFormik({
    initialValues: {
      generalInformation: {
        sku: "",
        productName: "",
        gender: "",
        category: "",
        subcategory: "",
        brand: "",
        description: "",
      },
      pricing: {
        basePrice: "",
        discount: 0,
        discountType: "",
      },
      materialCare: {
        material: "",
        pattern: "",
        careInstructions: "",
      },
      additionalInfo: {
        occasions: [],
        season: "",
        ageGroup: "",
      },
      variantBoxes: [
        {
          colorVariant: "",
          sizeQuantityChart: [
            {
              size: "",
              quantity: "",
            },
          ],
          status: "Active",
        },
      ],
    },
    validationSchema: Yup.object({
      generalInformation: Yup.object({
        sku: Yup.string().required("SKU is required"),
        productName: Yup.string().required("Product name is required"),
        gender: Yup.string().required("Gender is required"),
        category: Yup.string().required("Category is required"),
        subcategory: Yup.string().required("Subcategory is required"),
        brand: Yup.string().required("Brand is required"),
        description: Yup.string().required("Description is required"),
      }),
      pricing: Yup.object({
        basePrice: Yup.number()
          .required("Base price is required")
          .positive("Base price must be a positive number"),
        discount: Yup.number()
          .nullable()
          .min(0, "Discount cannot be negative")
          .max(100, "Discount should be less than 100"),
        discountType: Yup.string().nullable(),
      }),
      materialCare: Yup.object({
        material: Yup.string().nullable(),
        pattern: Yup.string().nullable(),
        careInstructions: Yup.string().nullable(),
      }),
      additionalInfo: Yup.object({
        occasions: Yup.array().of(Yup.string()),
        season: Yup.string().nullable(),
        ageGroup: Yup.string().nullable(),
      }),
      variantBoxes: Yup.array().of(
        Yup.object({
          colorVariant: Yup.string().required("Color variant is required"),
          sizeQuantityChart: Yup.array().of(
            Yup.object({
              size: Yup.string(),
              quantity: Yup.number().min(1, "Quantity must be at least 1"),
            })
          ),
          status: Yup.string().required("Status is required"),
        })
      ),
    }),
    onSubmit: async (values) => {
      values["shopId"] = localStorage.getItem("id");
      console.log("Form Data", values);
      setLoading(true);

      try {
        const response = await WebApi.post(
          "/shop/product/add_new_product",
          values
        );
        console.log("Response Data", response.data);

        const productId = response.data.data.ProductId;

        console.log(variantBoxes);

        // Create an array of promises for uploading images
        const uploadPromises = variantBoxes.map(async (box) => {
          const imgRef = ref(storage, `sizeChartImages/${productId}chart`);
          await uploadBytes(imgRef, box.sizeChartImage);
          console.log("Uploaded size chart image");

          const imgPromises = box.productImages.map(async (image, index) => {
            const imgRef = ref(storage, `productImages/${productId}${box.colorVariant}/img${index}`);
            await uploadBytes(imgRef, image);
            console.log(`Uploaded product image ${index}`);
          });

          await Promise.all(imgPromises);
        });

        // Wait for all image uploads to complete
        await Promise.all(uploadPromises);
        

        setResponseStatus(true);
        setAddProduct(true);
      } catch (error) {
        if (error.response) {
          console.error("Server Error:", error.response.data);
          if (error.response.status === 401) {
            alert("Unauthorized: Please log in again.");
          } else if (error.response.status === 500) {
            alert("Internal Server Error: Please try again later.");
          } else {
            alert("Error: " + (error.response.data.message || error.message));
          }
        } else if (error.request) {
          console.error("No response received:", error.request);
          alert("Network error: Please check your internet connection.");
        } else {
          console.error("Error setting up request:", error.message);
          alert("An unexpected error occurred: " + error.message);
        }
      } finally {
        setLoading(false);
      }
    },
  });

  const handleGenderChange = (event) => {
    const gender = event.target.value;
    formik.setFieldValue("generalInformation.gender", gender);
    setGender(gender);
    setCategory("");
    setSubcategory("");
  };

  const handleCategoryChange = (event) => {
    const newCategory = event.target.value;
    formik.setFieldValue("generalInformation.category", newCategory);
    setCategory(newCategory);
    setSubcategory("");
  };

  const handleSubcategoryChange = (event) => {
    setSubcategory(event.target.value);
    formik.setFieldValue("generalInformation.subcategory", event.target.value);
  };

  const [variantBoxes, setVariantBoxes] = useState([
    {
      colorVariant: "",
      sizeQuantityChart: [{ size: "", quantity: "" }],
      sizeChartImage: null,
      productImages: [],
      status: "Active",
    },
  ]);

  const handleAddSizeChartImage = (boxIndex, event) => {
    const newVariantBoxes = [...variantBoxes];
    newVariantBoxes[boxIndex].sizeChartImage = event.target.files[0];
    setVariantBoxes(newVariantBoxes);
  };

  const handleDeleteVariantBox = (index) => {
    setVariantBoxes((prevBoxes) => prevBoxes.filter((_, i) => i !== index));
  };

  const addVariantBox = () => {
    setVariantBoxes([
      ...variantBoxes,
      {
        colorVariant: "",
        sizeQuantityChart: [{ size: "", quantity: "" }],
        sizeChartImage: null,
        productImages: [],
        status: "Active",
      },
    ]);

    // Updating Formik values only for fields other than 'sizeChartImage' and 'productImages'
    const newFormikValues = [
      ...formik.values.variantBoxes,
      {
        colorVariant: "",
        sizeQuantityChart: [{ size: "", quantity: "" }],
        status: "Active",
      },
    ];

    formik.setFieldValue(`variantBoxes`, newFormikValues);
  };

  const updateVariantBox = (index, field, value) => {
    const newVariantBoxes = [...variantBoxes];
    newVariantBoxes[index][field] = value;
    setVariantBoxes(newVariantBoxes);

    // Updating Formik values only for fields other than 'sizeChartImage' and 'productImages'
    if (field !== "sizeChartImage" && field !== "productImages") {
      const newFormikValues = [...formik.values.variantBoxes];
      newFormikValues[index][field] = value;
      console.log(newFormikValues);
      formik.setFieldValue(`variantBoxes`, newFormikValues);
    }
  };

  const addSizeQuantityRow = (boxIndex) => {
    const newVariantBoxes = [...variantBoxes];
    newVariantBoxes[boxIndex].sizeQuantityChart.push({
      size: "",
      quantity: "",
    });
    setVariantBoxes(newVariantBoxes);
  };

  const handleAddProductImage = (boxIndex, event) => {
    if(variantBoxes[boxIndex].productImages.length == 5) {
      alert("Maximum of 5 images can be uploaded for each product variant.");
      return;
    }

    const newVariantBoxes = [...variantBoxes];

    // Convert the selected files into an array of URLs
    const newImages = event.target.files[0];

    // Append the new images to the existing product images array
    newVariantBoxes[boxIndex].productImages = [
      ...newVariantBoxes[boxIndex].productImages,
      newImages,
    ];

    setVariantBoxes(newVariantBoxes);
  };

  return (
    <Stack>
      {loading && <LinearProgress color="primary" />}
      {addProduct && (
        <ProductAddResult
          status={responseStatus}
          setAddProduct={setAddProduct}
        />
      )}

      {!addProduct && (
        <Box p={3} bgcolor="white" boxShadow={1}>
          <Grid container spacing={2}>
            {/* Left Column: Product Info, Pricing, Material & Care, Additional Info */}
            <Grid item xs={12} md={6}>
              <Box
                p={2}
                sx={{
                  border: null,
                  borderRadius: 3,
                  boxShadow: 1,
                  marginBottom: 2,
                }}
              >
                <Typography variant="h5" mb={2}>
                  General Information
                </Typography>
                <TextField
                  label="SKU"
                  fullWidth
                  variant="outlined"
                  sx={{ mb: 2, color: "#F5F4F4" }}
                  name="generalInformation.sku"
                  value={formik.values.generalInformation.sku}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.generalInformation?.sku &&
                    Boolean(formik.errors.generalInformation?.sku)
                  }
                  helperText={
                    formik.touched.generalInformation?.sku &&
                    formik.errors.generalInformation?.sku
                  }
                />
                <TextField
                  label="Product Name"
                  fullWidth
                  variant="outlined"
                  sx={{ mb: 2, color: "#F5F4F4" }}
                  name="generalInformation.productName"
                  value={formik.values.generalInformation.productName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.generalInformation?.productName &&
                    Boolean(formik.errors.generalInformation?.productName)
                  }
                  helperText={
                    formik.touched.generalInformation?.productName &&
                    formik.errors.generalInformation?.productName
                  }
                />
                <FormControl
                  fullWidth
                  variant="outlined"
                  sx={{ mb: 2 }}
                  error={
                    formik.touched.generalInformation?.gender &&
                    Boolean(formik.errors.generalInformation?.gender)
                  }
                >
                  <InputLabel>Gender</InputLabel>
                  <Select
                    value={gender}
                    onChange={handleGenderChange}
                    label="Gender"
                  >
                    <MenuItem key={"men"} value={"men"}>
                      Men
                    </MenuItem>
                    <MenuItem key={"women"} value={"women"}>
                      Women
                    </MenuItem>
                  </Select>
                </FormControl>
                <FormControl
                  fullWidth
                  variant="outlined"
                  sx={{ mb: 2 }}
                  error={
                    formik.touched.generalInformation?.category &&
                    Boolean(formik.errors.generalInformation?.category)
                  }
                >
                  <InputLabel>Category</InputLabel>
                  <Select
                    value={category}
                    onChange={handleCategoryChange}
                    label="Category"
                    disabled={!gender}
                  >
                    {gender &&
                      Object.keys(ProductCategory[gender].categories).map(
                        (cat) => (
                          <MenuItem key={cat} value={cat}>
                            {cat}
                          </MenuItem>
                        )
                      )}
                  </Select>
                </FormControl>
                <FormControl
                  fullWidth
                  variant="outlined"
                  sx={{ mb: 2 }}
                  error={
                    formik.touched.generalInformation?.subcategory &&
                    Boolean(formik.errors.generalInformation?.subcategory)
                  }
                >
                  <InputLabel>Sub Category</InputLabel>
                  <Select
                    value={subcategory}
                    onChange={handleSubcategoryChange}
                    label="Sub Category"
                    disabled={!category}
                  >
                    {category &&
                      ProductCategory[gender].categories[category].map(
                        (subcat) => (
                          <MenuItem key={subcat} value={subcat}>
                            {subcat}
                          </MenuItem>
                        )
                      )}
                  </Select>
                </FormControl>
                <TextField
                  label="Brand"
                  fullWidth
                  variant="outlined"
                  sx={{ mb: 2, color: "#F5F4F4" }}
                  name="generalInformation.brand"
                  value={formik.values.generalInformation.brand}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.generalInformation?.brand &&
                    Boolean(formik.errors.generalInformation?.brand)
                  }
                  helperText={
                    formik.touched.generalInformation?.brand &&
                    formik.errors.generalInformation?.brand
                  }
                />
                <TextField
                  label="Description of the Product"
                  fullWidth
                  variant="outlined"
                  multiline
                  rows={4}
                  sx={{ color: "#F5F4F4" }}
                  name="generalInformation.description"
                  value={formik.values.generalInformation.description}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.generalInformation?.description &&
                    Boolean(formik.errors.generalInformation?.description)
                  }
                  helperText={
                    formik.touched.generalInformation?.description &&
                    formik.errors.generalInformation?.description
                  }
                />
              </Box>

              <Box
                p={2}
                sx={{
                  border: null,
                  borderRadius: 3,
                  boxShadow: 1,
                  marginBottom: 2,
                }}
              >
                <Typography variant="h5" mb={2}>
                  Pricing
                </Typography>
                <TextField
                  label="Base Price"
                  fullWidth
                  variant="outlined"
                  name="pricing.basePrice"
                  value={formik.values.pricing.basePrice}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">$</InputAdornment>
                    ),
                  }}
                  sx={{ mb: 2, color: "#F5F4F4" }}
                  error={
                    formik.touched.pricing?.basePrice &&
                    Boolean(formik.errors.pricing?.basePrice)
                  }
                  helperText={
                    formik.touched.pricing?.basePrice &&
                    formik.errors.pricing?.basePrice
                  }
                />
                <Typography variant="h6" mb={1}>
                  Discount Type
                </Typography>
                <ToggleButtonGroup
                  value={formik.values.pricing.discountType}
                  exclusive
                  onChange={(event, newValue) => {
                    // Update Formik's value when a new toggle button is selected
                    setDiscountType(event.target.value);
                    formik.setFieldValue("pricing.discountType", newValue);
                  }}
                  onBlur={formik.handleBlur}
                  aria-label="discount type"
                  sx={{ mb: 2 }} // Use sx for MUI styling
                >
                  <ToggleButton value="No Discount">No Discount</ToggleButton>
                  <ToggleButton value="Seasonal Discounts">
                    Seasonal Discounts
                  </ToggleButton>
                  <ToggleButton value="Percentage Discount">
                    Percentage Discount
                  </ToggleButton>
                </ToggleButtonGroup>
                <TextField
                  label="Discount"
                  fullWidth
                  variant="outlined"
                  name="pricing.discount"
                  type="number"
                  value={formik.values.pricing.discount}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">%</InputAdornment>
                    ),
                  }}
                  sx={{ mb: 2, color: "#F5F4F4", mt: 3 }}
                  error={
                    formik.touched.pricing?.discount &&
                    Boolean(formik.errors.pricing?.discount)
                  }
                  helperText={
                    formik.touched.pricing?.discount &&
                    formik.errors.pricing?.discount
                  }
                  disabled={discountType == "No Discount" || discountType == ""}
                />
              </Box>

              <Box
                p={2}
                sx={{
                  border: null,
                  borderRadius: 3,
                  boxShadow: 1,
                  marginBottom: 2,
                }}
              >
                <Typography variant="h5" mb={2}>
                  Material & Care Instructions
                </Typography>
                <TextField
                  label="Material"
                  fullWidth
                  variant="outlined"
                  name="materialCare.material"
                  value={formik.values.materialCare.material}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  sx={{ mb: 2, color: "#F5F4F4" }}
                  error={
                    formik.touched.materialCare?.material &&
                    Boolean(formik.errors.materialCare?.material)
                  }
                  helperText={
                    formik.touched.materialCare?.material &&
                    formik.errors.materialCare?.material
                  }
                />
                <TextField
                  label="Pattern"
                  fullWidth
                  variant="outlined"
                  name="materialCare.pattern"
                  value={formik.values.materialCare.pattern}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  sx={{ mb: 2, color: "#F5F4F4" }}
                  error={
                    formik.touched.materialCare?.pattern &&
                    Boolean(formik.errors.materialCare?.pattern)
                  }
                  helperText={
                    formik.touched.materialCare?.pattern &&
                    formik.errors.materialCare?.pattern
                  }
                />
                <TextField
                  label="Care Instructions"
                  fullWidth
                  variant="outlined"
                  name="materialCare.careInstructions"
                  multiline
                  rows={2}
                  value={formik.values.materialCare.careInstructions}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  sx={{ mb: 2, color: "#F5F4F4" }}
                  error={
                    formik.touched.materialCare?.careInstructions &&
                    Boolean(formik.errors.materialCare?.careInstructions)
                  }
                  helperText={
                    formik.touched.materialCare?.careInstructions &&
                    formik.errors.materialCare?.careInstructions
                  }
                />
              </Box>

              <Box
                p={2}
                sx={{
                  border: null,
                  borderRadius: 3,
                  boxShadow: 1,
                  marginBottom: 2,
                }}
              >
                <Typography variant="h5" mb={2}>
                  Additional Information
                </Typography>
                <Autocomplete
                  multiple
                  id="occasions"
                  options={[
                    "Casual Wear",
                    "Formal Wear",
                    "Party Wear",
                    "Activewear",
                  ]}
                  value={formik.values.additionalInfo.occasions}
                  onChange={(event, newValue) => {
                    formik.setFieldValue("additionalInfo.occasions", newValue);
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      variant="outlined"
                      label="Occasions"
                      placeholder="Select occasions"
                    />
                  )}
                  renderTags={(value, getTagProps) =>
                    value.map((option, index) => (
                      <Chip
                        variant="outlined"
                        label={option}
                        {...getTagProps({ index })}
                        key={index}
                      />
                    ))
                  }
                  sx={{ mb: 2 }}
                />
                <TextField
                  label="Season"
                  fullWidth
                  variant="outlined"
                  sx={{ mb: 2, color: "#F5F4F4" }}
                  name="additionalInfo.season"
                  value={formik.values.additionalInfo.season}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.additionalInfo?.season &&
                    Boolean(formik.errors.additionalInfo?.season)
                  }
                  helperText={
                    formik.touched.additionalInfo?.season &&
                    formik.errors.additionalInfo?.season
                  }
                />
                <TextField
                  label="Age Group"
                  fullWidth
                  variant="outlined"
                  multiline
                  sx={{ mb: 2, color: "#F5F4F4" }}
                  name="additionalInfo.ageGroup"
                  value={formik.values.additionalInfo.ageGroup}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.additionalInfo?.ageGroup &&
                    Boolean(formik.errors.additionalInfo?.ageGroup)
                  }
                  helperText={
                    formik.touched.additionalInfo?.ageGroup &&
                    formik.errors.additionalInfo?.ageGroup
                  }
                />
              </Box>
            </Grid>

            {/* Right Column: Variant Boxes, Gender */}
            <Grid item xs={12} md={6}>
              {variantBoxes.map((box, boxIndex) => (
                <Box
                  key={boxIndex}
                  p={2}
                  sx={{
                    border: null,
                    borderRadius: 3,
                    boxShadow: 1,
                    marginBottom: 2,
                  }}
                >
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    mb={2}
                  >
                    <Typography variant="h5">Variant {boxIndex + 1}</Typography>
                    <IconButton
                      onClick={() => handleDeleteVariantBox(boxIndex)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Box>

                  <FormControl
                    fullWidth
                    variant="outlined"
                    sx={{ mb: 3 }}
                    error={
                      formik.touched.variantBoxes?.[boxIndex]?.colorVariant &&
                      Boolean(
                        formik.errors.variantBoxes?.[boxIndex]?.colorVariant
                      )
                    }
                  >
                    <InputLabel>Color</InputLabel>
                    <Select
                      value={box.colorVariant}
                      onChange={(e) =>
                        updateVariantBox(
                          boxIndex,
                          "colorVariant",
                          e.target.value
                        )
                      }
                      label="Color Variant"
                      fullWidth
                    >
                      {Colors.colors.map((color) => (
                        <MenuItem key={color.name} value={color.name}>
                          <Box
                            sx={{
                              width: 20,
                              height: 20,
                              borderRadius: "50%",
                              backgroundColor: color.hexCode,
                              display: "inline-block",
                              marginRight: 2,
                            }}
                          />
                          {color.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>

                  {!(category == "bags" || category == "accessories") && (
                    <Box>
                      <Typography variant="h6" mb={2}>
                        Size & Quantity Chart
                      </Typography>
                      {box.sizeQuantityChart.map((row, rowIndex) => (
                        <Box key={rowIndex} sx={{ display: "flex", mb: 2 }}>
                          <TextField
                            label="Size"
                            value={row.size}
                            onChange={(e) => {
                              const newChart = [...box.sizeQuantityChart];
                              newChart[rowIndex].size = e.target.value;
                              updateVariantBox(
                                boxIndex,
                                "sizeQuantityChart",
                                newChart
                              );
                            }}
                            sx={{ mr: 2, flexGrow: 1 }}
                          />
                          <TextField
                            label="Quantity"
                            type="number"
                            value={row.quantity}
                            inputProps={{ min: 1 }}
                            onChange={(e) => {
                              const newChart = [...box.sizeQuantityChart];
                              newChart[rowIndex].quantity = e.target.value;
                              updateVariantBox(
                                boxIndex,
                                "sizeQuantityChart",
                                newChart
                              );
                            }}
                            sx={{ flexGrow: 1 }}
                            error={Boolean(
                              formik.errors.variantBoxes?.[boxIndex]?.sizes?.[
                                rowIndex
                              ]?.quantity
                            )}
                            helperText={
                              formik.errors.variantBoxes?.[boxIndex]?.sizes?.[
                                rowIndex
                              ]?.quantity
                            }
                          />
                        </Box>
                      ))}
                      <Button
                        onClick={() => addSizeQuantityRow(boxIndex)}
                        variant="outlined"
                        sx={{
                          mb: 3,
                          color: "#C0A888",
                          border: "1px #C0A888 solid",
                        }}
                      >
                        Add Size/Quantity
                      </Button>

                      <Typography variant="h6" mb={2}>
                        Size Chart Image
                      </Typography>
                      <Button
                        variant="contained"
                        component="label"
                        startIcon={<AddPhotoAlternateIcon />}
                        sx={{ mb: 3, backgroundColor: "#C0A888" }}
                      >
                        Upload Size Chart
                        <input
                          type="file"
                          accept="image/*"
                          hidden
                          onChange={(e) => handleAddSizeChartImage(boxIndex, e)}
                        />
                      </Button>
                      <Grid container spacing={2}>
                        {box.sizeChartImage && (
                          <Grid item xs={4}>
                            <Box sx={{ position: "relative" }}>
                              <img
                                src={URL.createObjectURL(box.sizeChartImage)}
                                alt="Size Chart"
                                width="100%"
                                height="auto"
                              />
                              <IconButton
                                onClick={() => {
                                  const newVariantBoxes = [...variantBoxes];
                                  newVariantBoxes[boxIndex].sizeChartImage =
                                    null;
                                  setVariantBoxes(newVariantBoxes);
                                }}
                                sx={{ position: "absolute", top: 8, right: 8 }}
                              >
                                <DeleteIcon />
                              </IconButton>
                            </Box>
                          </Grid>
                        )}
                      </Grid>
                    </Box>
                  )}

                  <Typography variant="h6" mb={2} mt={2}>
                    Product Images
                  </Typography>
                  <Button
                    variant="contained"
                    component="label"
                    startIcon={<AddPhotoAlternateIcon />}
                    sx={{ mb: 2, backgroundColor: "#C0A888" }}
                  >
                    Upload Image
                    <input
                      type="file"
                      accept="image/*"
                      hidden
                      onChange={(e) => handleAddProductImage(boxIndex, e)}
                    />
                  </Button>
                  <Grid container spacing={2}>
                    {variantBoxes[boxIndex].productImages.map(
                      (image, index) => (
                        <Grid item xs={4} key={index}>
                          <Box sx={{ position: "relative" }}>
                            <img
                              src={URL.createObjectURL(image)}
                              alt={`Product ${index}`}
                              width="100%"
                              height="auto"
                            />
                            <IconButton
                              onClick={() => {
                                const newVariantBoxes = [...variantBoxes];
                                const newImages = [
                                  ...newVariantBoxes[boxIndex].productImages,
                                ];

                                // Remove the image at the specified index
                                newImages.splice(index, 1);

                                // Update the productImages for the specific variant box
                                newVariantBoxes[boxIndex].productImages =
                                  newImages;

                                // Update the state with the modified variant boxes
                                setVariantBoxes(newVariantBoxes);
                              }}
                              sx={{ position: "absolute", top: 8, right: 8 }}
                            >
                              <DeleteIcon />
                            </IconButton>
                          </Box>
                        </Grid>
                      )
                    )}
                  </Grid>
                  <Typography variant="h6" mb={2} mt={2}>
                    Status
                  </Typography>
                  <ToggleButtonGroup
                    value={box.status}
                    exclusive
                    onChange={(e, newStatus) => {
                      if (newStatus !== null) {
                        updateVariantBox(boxIndex, "status", newStatus);
                      }
                    }}
                    aria-label="status"
                    sx={{ mb: 3 }}
                  >
                    <ToggleButton value="Active">Active</ToggleButton>
                    <ToggleButton value="Inactive">Inactive</ToggleButton>
                  </ToggleButtonGroup>
                </Box>
              ))}

              <Button
                onClick={addVariantBox}
                variant="contained"
                startIcon={<AddIcon />}
                sx={{ mb: 2, backgroundColor: "#C0A888" }}
              >
                Add Variant Box
              </Button>

              {/* <Box p={2} sx={{ border: null, borderRadius: 3, boxShadow: 1, marginBottom: 2}}>
            <Typography variant="h5" mb={2}>Gender</Typography>
            <ToggleButtonGroup
              value={gender}
              exclusive
              onChange={handleGenderChange}
              aria-label="gender"
              sx={{ mb: 2 }}
            >
              <ToggleButton value="Women">Women</ToggleButton>
              <ToggleButton value="Men">Men</ToggleButton>
              <ToggleButton value="Unisex">Unisex</ToggleButton>
            </ToggleButtonGroup>
          </Box> */}

              {/* <Box p={2} sx={{ border: null, borderRadius: 3, boxShadow: 1, marginBottom: 2, marginTop: 2}}>
          </Box> */}
            </Grid>
          </Grid>
          <DialogBox formik={formik} loading={loading} />
        </Box>
      )}
    </Stack>
  );
};

export default ProductForm;
