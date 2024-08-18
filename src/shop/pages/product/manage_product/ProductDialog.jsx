import React from "react";
import {
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Divider,
  IconButton,
  Typography,
  Grid,
  Button,
  DialogActions,
  List,
  ListItem,
  ListItemText,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import { Link } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import InventoryIcon from "@mui/icons-material/Inventory";
import TableChartIcon from "@mui/icons-material/TableChart";
import LocalLaundryServiceIcon from "@mui/icons-material/LocalLaundryService";
import ImageIcon from "@mui/icons-material/Image";
import InfoIcon from "@mui/icons-material/Info";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import fallbackImage from "../../../assets/images/fallback.jpg";
import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "../../../../config/firebaseConfig";

const colorMap = {
  White: "#FFFFFF",
  Green: "#008000",
  Yellow: "#FFFF00",
  Blue: "#0000FF",
  Black: "#000000",
  Brown: "#A52A2A",
  Grey: "#808080",
  Beige: "#F5F5DC",
  "Light-Green": "#90EE90",
  Purple: "#800080",
  Pink: "#FFC0CB",
  Teal: "#008080",
};

const getColorHex = (color) => {
  return colorMap[color] || "#000000"; // Default to black if color not found
};

const ImageComponent = ({ id, color }) => {
  const [imageUrl, setImageUrl] = React.useState("");
  console.log("ImageComponent", id, color);
  React.useEffect(() => {
    const downloadImage = async () => {
      try {
        const imageRef = ref(storage, `productImages/${id}${color}/img0`);
        const url = await getDownloadURL(imageRef);
        setImageUrl(url);
      } catch (error) {
        console.error("Error fetching image URL:", error);
      }
    };
    downloadImage();
  }, []);

  return (
    <Box
      component="img"
      sx={{
        width: "100%",
        height: "auto",
        borderRadius: "8px",
      }}
      alt="image Not Found"
      src={imageUrl || fallbackImage}
    />
  );
};

const ProductDialog = ({ open, handleClose, selectedRow }) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="sm"
      fullWidth
      sx={{ height: "100vh" }}
    >
      <DialogTitle sx={{ backgroundColor: "#C0A888" }}>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box display="flex" alignItems="center">
            {selectedRow && (
              <Typography
                variant="h6"
                component="div"
                ml={2}
                style={{
                  textTransform: "uppercase",
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                {selectedRow.generalInformation.productName}
              </Typography>
            )}
          </Box>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <Divider />
      <DialogContent>
        <DialogContentText>
          <Grid container spacing={2}>
            {/* Left Column */}
            <Grid item xs={4.5} mr={6}>
              <Box mb={2}>
                <Box display="flex" alignItems="center">
                  <Box
                    sx={{
                      width: "35px",
                      height: "35px",
                      borderRadius: "50%",
                      backgroundColor: "#D9D9D9",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <InventoryIcon fontSize="small" sx={{ color: "black" }} />
                  </Box>
                  <Typography
                    variant="h6"
                    gutterBottom
                    ml={2}
                    mt={1}
                    sx={{ fontWeight: "bold", color: "black" }}
                  >
                    General Info
                  </Typography>
                </Box>
                {selectedRow && (
                  <>
                    <Grid container spacing={1} ml={3} mt={0.25}>
                      <Grid item xs={4}>
                        <Typography variant="body2">
                          <strong>Product SkuCode</strong>
                        </Typography>
                      </Grid>
                      <Grid item xs={8}>
                        <Typography
                          variant="body2"
                          sx={{ textAlign: "right", color: "black" }}
                        >
                          {selectedRow.generalInformation.sku}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid container spacing={1} ml={3} mt={0.25}>
                      <Grid item xs={4}>
                        <Typography variant="body2">
                          <strong>Description</strong>
                        </Typography>
                      </Grid>
                      <Grid item xs={8}>
                        <Typography
                          variant="body2"
                          sx={{ textAlign: "right", color: "black" }}
                        >
                          {selectedRow.generalInformation.description}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid container spacing={1} ml={3} mt={0.25}>
                      <Grid item xs={4}>
                        <Typography variant="body2">
                          <strong>gender</strong>
                        </Typography>
                      </Grid>
                      <Grid item xs={8}>
                        <Typography
                          variant="body2"
                          sx={{ textAlign: "right", color: "black" }}
                        >
                          {selectedRow.generalInformation.gender}swear
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid container spacing={1} ml={3} mt={0.25}>
                      <Grid item xs={4}>
                        <Typography variant="body2">
                          <strong>Category</strong>
                        </Typography>
                      </Grid>
                      <Grid item xs={8}>
                        <Typography
                          variant="body2"
                          sx={{ textAlign: "right", color: "black" }}
                        >
                          {selectedRow.generalInformation.category}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid container spacing={1} ml={3} mt={0.25}>
                      <Grid item xs={4}>
                        <Typography variant="body2">
                          <strong>Sub Category</strong>
                        </Typography>
                      </Grid>
                      <Grid item xs={8}>
                        <Typography
                          variant="body2"
                          sx={{ textAlign: "right", color: "black" }}
                        >
                          {selectedRow.generalInformation.subcategory}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid container spacing={1} ml={3} mt={0.25}>
                      <Grid item xs={4}>
                        <Typography variant="body2">
                          <strong>Brand</strong>
                        </Typography>
                      </Grid>
                      <Grid item xs={8}>
                        <Typography
                          variant="body2"
                          sx={{ textAlign: "right", color: "black" }}
                        >
                          {selectedRow.generalInformation.brand}
                        </Typography>
                      </Grid>
                    </Grid>
                  </>
                )}
              </Box>
              <Box mb={2}>
                <Box display="flex" alignItems="center">
                  <Box
                    sx={{
                      width: "35px",
                      height: "35px",
                      borderRadius: "50%",
                      backgroundColor: "#D9D9D9",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <TableChartIcon fontSize="small" sx={{ color: "black" }} />
                  </Box>
                  <Typography
                    variant="h6"
                    gutterBottom
                    ml={2}
                    mt={1}
                    sx={{ fontWeight: "bold", color: "black" }}
                  >
                    Pricing & Availability
                  </Typography>
                </Box>
                {selectedRow && (
                  <>
                    <Grid container spacing={1} ml={3} mt={0.25}>
                      <Grid item xs={4}>
                        <Typography variant="body2">
                          <strong>Unit Price (Rs.)</strong>
                        </Typography>
                      </Grid>
                      <Grid item xs={8}>
                        <Typography
                          variant="body2"
                          sx={{ textAlign: "right", color: "black" }}
                        >
                          {selectedRow.pricing.basePrice}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid container spacing={1} ml={3} mt={0.25}>
                      <Grid item xs={4}>
                        <Typography variant="body2">
                          <strong>Discount Type</strong>
                        </Typography>
                      </Grid>
                      <Grid item xs={8}>
                        <Typography
                          variant="body2"
                          sx={{ textAlign: "right", color: "black" }}
                        >
                          {selectedRow.pricing.discountType}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid container spacing={1} ml={3} mt={0.25}>
                      <Grid item xs={4}>
                        <Typography variant="body2">
                          <strong>Discount</strong>
                        </Typography>
                      </Grid>
                      <Grid item xs={8}>
                        <Typography
                          variant="body2"
                          sx={{ textAlign: "right", color: "black" }}
                        >
                          {selectedRow.pricing.discount}
                        </Typography>
                      </Grid>
                    </Grid>
                  </>
                )}
              </Box>
              <Box mb={2}>
                <Box display="flex" alignItems="center">
                  <Box
                    sx={{
                      width: "35px",
                      height: "35px",
                      borderRadius: "50%",
                      backgroundColor: "#D9D9D9",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <InfoIcon fontSize="small" sx={{ color: "black" }} />
                  </Box>
                  <Typography
                    variant="h6"
                    gutterBottom
                    ml={2}
                    mt={1}
                    sx={{ fontWeight: "bold", color: "black" }}
                  >
                    Additional Info
                  </Typography>
                </Box>
                {selectedRow && (
                  <>
                    <Grid container spacing={1} ml={3} mt={0.25}>
                      <Grid item xs={4}>
                        <Typography variant="body2">
                          <strong>Occasions</strong>
                        </Typography>
                      </Grid>
                      {selectedRow.additionalInfo.occasions.map(
                        (occasion, index) => (
                          <Grid item xs={8} key={index}>
                            <Typography
                              variant="body2"
                              sx={{ textAlign: "right", color: "black" }}
                            >
                              {occasion}
                            </Typography>
                          </Grid>
                        )
                      )}
                    </Grid>
                    <Grid container spacing={1} ml={3} mt={0.25}>
                      <Grid item xs={4}>
                        <Typography variant="body2">
                          <strong>Season</strong>
                        </Typography>
                      </Grid>
                      <Grid item xs={8}>
                        <Typography
                          variant="body2"
                          sx={{ textAlign: "right", color: "black" }}
                        >
                          {selectedRow.additionalInfo.season}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid container spacing={1} ml={3} mt={0.25}>
                      <Grid item xs={4}>
                        <Typography variant="body2">
                          <strong>Age Group</strong>
                        </Typography>
                      </Grid>
                      <Grid item xs={8}>
                        <Typography
                          variant="body2"
                          sx={{ textAlign: "right", color: "black" }}
                        >
                          {selectedRow.additionalInfo.ageGroup}
                        </Typography>
                      </Grid>
                    </Grid>
                    {/* <Grid container spacing={1} ml={3} mt={0.25}>
                      <Grid item xs={4}>
                        <Typography variant="body2">
                          <strong>Age Group</strong>
                        </Typography>
                      </Grid>
                      <Grid item xs={8}>
                        <Typography
                          variant="body2"
                          sx={{ textAlign: "right", color: "black" }}
                        >
                          {selectedRow.ageGroup}
                        </Typography>
                      </Grid>
                    </Grid> */}
                  </>
                )}
              </Box>
              <Box mb={2}>
                <Box display="flex" alignItems="center">
                  <Box
                    sx={{
                      width: "35px",
                      height: "35px",
                      borderRadius: "50%",
                      backgroundColor: "#D9D9D9",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <LocalLaundryServiceIcon
                      fontSize="small"
                      sx={{ color: "black" }}
                    />
                  </Box>
                  <Typography
                    variant="h6"
                    gutterBottom
                    ml={2}
                    mt={1}
                    sx={{ fontWeight: "bold", color: "black" }}
                  >
                    Material & Care
                  </Typography>
                </Box>
                {selectedRow && (
                  <>
                    <Grid container spacing={1} ml={3} mt={0.25}>
                      <Grid item xs={4}>
                        <Typography variant="body2">
                          <strong>material</strong>
                        </Typography>
                      </Grid>
                      <Grid item xs={8}>
                        <Typography
                          variant="body2"
                          sx={{ textAlign: "right", color: "black" }}
                        >
                          {selectedRow.materialCare.material}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid container spacing={1} ml={3} mt={0.25}>
                      <Grid item xs={4}>
                        <Typography variant="body2">
                          <strong>Pattern</strong>
                        </Typography>
                      </Grid>
                      <Grid item xs={8}>
                        <Typography
                          variant="body2"
                          sx={{ textAlign: "right", color: "black" }}
                        >
                          {selectedRow.materialCare.pattern}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid container spacing={1} ml={3} mt={0.25}>
                      <Grid item xs={4}>
                        <Typography variant="body2">
                          <strong>Care Instructions</strong>
                        </Typography>
                      </Grid>
                      <Grid item xs={8}>
                        <Typography
                          variant="body2"
                          sx={{ textAlign: "right", color: "black" }}
                        >
                          {selectedRow.materialCare.careInstructions}
                        </Typography>
                      </Grid>
                    </Grid>
                    {/* <Grid container spacing={1} ml={3} mt={0.25}>
                      <Grid item xs={4}>
                        <Typography variant="body2">
                          <strong>Age Group</strong>
                        </Typography>
                      </Grid>
                      <Grid item xs={8}>
                        <Typography
                          variant="body2"
                          sx={{ textAlign: "right", color: "black" }}
                        >
                          {selectedRow.ageGroup}
                        </Typography>
                      </Grid>
                    </Grid> */}
                  </>
                )}
              </Box>
            </Grid>

            <Grid item xs={6}>
              <Box display="flex" alignItems="center" mb={2}>
                <Box
                  sx={{
                    width: "35px",
                    height: "35px",
                    borderRadius: "50%",
                    backgroundColor: "#D9D9D9",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <LocalLaundryServiceIcon
                    fontSize="small"
                    sx={{ color: "black" }}
                  />
                </Box>
                <Typography
                  variant="h6"
                  gutterBottom
                  ml={2}
                  mt={1}
                  sx={{ fontWeight: "bold", color: "black" }}
                >
                  Variants
                </Typography>
              </Box>
              {selectedRow?.variantBoxes.map((box) => (
                <Grid item key={box.id} md={12}>
                  <Grid container spacing={0} alignItems="center">
                    {/* Text Section */}
                    <Grid item xs={8}>
                      <Typography variant="h6" component="div" color="black">
                        {box.colorVariant} - {box.status}
                      </Typography>
                      <Grid container spacing={1}>
                        <Grid item xs={6}>
                          <Typography variant="body2">
                            <strong>Size</strong>
                          </Typography>
                        </Grid>
                        <Grid item xs={6}>
                          <Typography variant="body2">
                            <strong>Quantity</strong>
                          </Typography>
                        </Grid>
                        {box.sizeQuantityChart.map((sizeChart) => (
                          <React.Fragment key={sizeChart.id}>
                            <Grid item xs={6}>
                              <Typography variant="body2" color="black">
                                {sizeChart.size}
                              </Typography>
                            </Grid>
                            <Grid item xs={6}>
                              <Typography variant="body2" color="black">
                                {sizeChart.quantity}
                              </Typography>
                            </Grid>
                          </React.Fragment>
                        ))}
                      </Grid>
                    </Grid>
                    {/* Image Section */}
                    <Grid item xs={4}>
                      <ImageComponent id={selectedRow.id} color={box.colorVariant}/>
                    </Grid>
                  </Grid>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={handleClose}
          sx={{ backgroundColor: "#C0A888" }}
          variant="contained"
        >
          Edit
        </Button>
        <Button onClick={handleClose} color="error" variant="contained">
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ProductDialog;
