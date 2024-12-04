import * as React from "react";
import PropTypes from "prop-types";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import Typography from "@mui/material/Typography";

import { createTheme, ThemeProvider } from "@mui/material/styles";

import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";

import AddressForm from "./AddressForm";
import getCheckoutTheme from "./getCheckoutTheme";
import Info from "./Info";
import InfoMobile from "./InfoMobile";
import PaymentForm from "./PaymentForm";
import { Link } from "react-router-dom";
import { getDownloadURL, getStorage, ref } from "firebase/storage";
import WebApi from "../../api/WebApi";
import { useState } from "react";
import { storage } from "../../../config/firebaseConfig";
import { useEffect } from "react";

const steps = ["Shipping address", "Payment details"];

const logoStyle = {
  width: "140px",
  height: "56px",
  marginLeft: "-4px",
  marginRight: "-8px",
};

function getStepContent(step, setFormValues , postOrder) {
  switch (step) {
    case 0:
      return <AddressForm setFormValues={setFormValues} />;
    case 1:
      return <PaymentForm postOrder={postOrder}/>;
    default:
      throw new Error("Unknown step");
  }
}

export default function Checkout() {
  const [mode, setMode] = React.useState("light");
  const [showCustomTheme, setShowCustomTheme] = React.useState(true);
  const checkoutTheme = createTheme(getCheckoutTheme(mode));
  const defaultTheme = createTheme({ palette: { mode } });
  const [activeStep, setActiveStep] = React.useState(0);


  const [cartItems, setCartItems] = useState([]);
  const [imageUrls, setImageUrls] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);
  const [formValues, setFormValues] = React.useState({});
  const [loading, setLoading] = useState(true);

  React.useEffect(() => {
    console.log(formValues);
  }, [formValues])

  React.useEffect(() => {
    const fetchCartData = async () => {
      try {
        const response = await WebApi.get(`/shopper/order/getCart/${localStorage.getItem('id')}`);
        const items = response.data.cartItems;

        // Fetch image URLs for each cart item
        const urls = {};

        for (const item of items) {
          const filePath = `/productImages/${item.productId}${item.color}/img0`; // Adjust path as needed
          const fileRef = ref(storage, filePath);

          try {
            const url = await getDownloadURL(fileRef);
            urls[item.id] = url;
          } catch (error) {
            console.error(`Error fetching image for product ${item.productId}:`, error);
            urls[item.id] = '/path/to/placeholder.jpg';
          }
        }

        setCartItems(items);
        setImageUrls(urls);

        // Calculate the total price of the cart
        const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
        setTotalPrice(total.toFixed(2));
        setLoading(false);
      } catch (error) {
        console.error("Error fetching cart data:", error);
        setLoading(false);
      }
    };

    fetchCartData();
  }, []);

  const [product, setProduct] = React.useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const products = await Promise.all(
          cartItems.map(async (cart) => {
            // Fetch shop ID for each cart item
            const response = await WebApi.get(`/public/product/getShopIdByProductID/${cart.productId}`);
            console.log(response.data.shopId);
            cart.shopId = parseInt(response.data.shopId);
            cart.status = "pending"
            return cart
          })
        );
        console.log(products);
        setProduct(products);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchProduct();
  }, [cartItems]);

  useEffect(() => {
    console.log("Product data:", product);
  }, [product]);



  const postOrder = async () => {
    try {
      console.log("address" , formValues);
      const responseData = {
        "userId": localStorage.getItem('id'),
        "shippingAddress": formValues,
        "totalCost": totalPrice,
        "orderItems":product
      }
      console.log("finalData" , responseData)
      const response = await WebApi.post("/shopper/order/createOrder", responseData)
      console.log("husss", response.data);
    } catch (error) {
      console.error(error)
    }
  }


  const toggleColorMode = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };
  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <ThemeProvider theme={showCustomTheme ? checkoutTheme : defaultTheme}>
      <CssBaseline />
      <Grid
        container
        pl={5}
        sx={{ height: { xs: "100%", sm: "100dvh" } }}
        direction={"row-reverse"}
      >
        <Grid
          item
          xs={12}
          sm={5}
          lg={5}
          sx={{
            display: { xs: "none", md: "flex" },
            flexDirection: "column",
            backgroundColor: "background.paper",
            borderRight: { sm: "none", md: "1px solid" },
            borderColor: { sm: "none", md: "divider" },
            alignItems: "start",
            px: 10,
            gap: 4,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "end",
              height: 70,
            }}
          >
            <Button
              startIcon={<ArrowBackRoundedIcon />}
              component="a"
              href="/material-ui/getting-started/templates/landing-page/"
              sx={{
                ml: "-8px",
                fontFamily: '"Nunito Sans", sans-serif',
                borderRadius: "0",
              }}
            >
              Back to
            </Button>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              flexGrow: 1,
              width: "100%",
              maxWidth: 500,
            }}
          >
            {loading ? (
              <Typography>Loading...</Typography>
            ) : (
              <Info totalPrice={totalPrice} imageUrls={imageUrls} cartItems={cartItems} />
            )}
          </Box>
        </Grid>
        <Grid
          item
          sm={12}
          md={7}
          lg={7}
          sx={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "100%",
            width: "100%",
            backgroundColor: { xs: "transparent", sm: "background.default" },
            alignItems: "start",
            pt: { xs: 2, sm: 4 },
            px: { xs: 2, sm: 10 },
            gap: { xs: 4, md: 8 },
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: { sm: "space-between", md: "flex-end" },
              alignItems: "center",
              width: "100%",
              maxWidth: { sm: "100%", md: 800 },
            }}
          >
            <Box
              sx={{
                display: { xs: "flex", md: "none" },
                flexDirection: "row",
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <Button
                startIcon={<ArrowBackRoundedIcon />}
                component="a"
                href="/material-ui/getting-started/templates/landing-page/"
                sx={{
                  alignSelf: "start",
                  fontFamily: '"Nunito Sans", sans-serif',
                  borderRadius: "0",
                }}
              >
                Back to
              </Button>
            </Box>
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "flex-end",
                flexGrow: 1,
                height: 10,
              }}
            >
              <Stepper
                id="desktop-stepper"
                activeStep={activeStep}
                sx={{
                  width: "100%",
                  height: 40,
                }}
              >
                {steps.map((label) => (
                  <Step
                    sx={{
                      ":first-child": { pl: 0 },
                      ":last-child": { pr: 0 },
                    }}
                    key={label}
                  >
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Box>
          </Box>
          <Card
            sx={{
              display: { xs: "flex", md: "none" },
              width: "100%",
            }}
          >
            <CardContent
              sx={{
                display: "flex",
                width: "100%",
                alignItems: "center",
                justifyContent: "space-between",
                ":last-child": { pb: 2 },
              }}
            >
              <div>
                <Typography variant="subtitle2" gutterBottom>
                  Selected products
                </Typography>
                <Typography variant="body1">
                  {activeStep >= 2 ? "$144.97" : "$134.98"}
                </Typography>
              </div>
              <InfoMobile
                totalPrice={activeStep >= 2 ? "$144.97" : "$134.98"}
              />
            </CardContent>
          </Card>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              flexGrow: 1,
              width: "100%",
              maxWidth: { sm: "100%", md: 1000 },
              maxHeight: "720px",
              gap: { xs: 5, md: "none" },
            }}
          >
            <Stepper
              id="mobile-stepper"
              activeStep={activeStep}
              alternativeLabel
              sx={{ display: { sm: "flex", md: "none" } }}
            >
              {steps.map((label) => (
                <Step
                  sx={{
                    ":first-child": { pl: 0 },
                    ":last-child": { pr: 0 },
                    "& .MuiStepConnector-root": { top: { xs: 6, sm: 12 } },
                  }}
                  key={label}
                >
                  <StepLabel
                    sx={{
                      ".MuiStepLabel-labelContainer": { maxWidth: "70px" },
                    }}
                  >
                    {label}
                  </StepLabel>
                </Step>
              ))}
            </Stepper>
            {activeStep === steps.length ? (
              <Stack spacing={2} useFlexGap>
                <Typography variant="h1">📦</Typography>
                <Typography variant="h5">Thank you for your order!</Typography>
                <Typography variant="body1" color="text.secondary">
                  Your order number is
                  <strong>&nbsp;#140396</strong>. We have emailed your order
                  confirmation and will update you once its shipped.
                </Typography>
                <Link to="/public/women">
                  <Button
                    variant="contained"
                    sx={{
                      alignSelf: "start",
                      width: { xs: "100%", sm: "auto" },
                      borderRadius: 0,
                      fontFamily: '"Nunito Sans", sans-serif',
                    }}
                  >
                    Go to Home Page
                  </Button>
                </Link>
              </Stack>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep, setFormValues , postOrder)}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column-reverse", sm: "row" },
                    justifyContent:
                      activeStep !== 0 ? "space-between" : "flex-end",
                    alignItems: "end",
                    flexGrow: 0,
                    gap: 1,
                    pb: { xs: 12, sm: 0 },
                    mt: { xs: 2, sm: 0 },
                    mb: "60px",
                  }}
                >
                  {activeStep !== 0 && (
                    <Button
                      startIcon={<ChevronLeftRoundedIcon />}
                      onClick={handleBack}
                      variant="text"
                      sx={{
                        display: { xs: "none", sm: "flex" },
                        borderRadius: 0,
                        fontFamily: '"Nunito Sans", sans-serif',
                      }}
                    >
                      Previous
                    </Button>
                  )}

                  {activeStep !== 0 && (
                    <Button
                      startIcon={<ChevronLeftRoundedIcon />}
                      onClick={handleBack}
                      variant="outlined"
                      fullWidth
                      sx={{
                        display: { xs: "flex", sm: "none" },
                        borderRadius: 0,
                        fontFamily: '"Nunito Sans", sans-serif',
                      }}
                    >
                      Previous
                    </Button>
                  )}
                  {activeStep !== 1 && (
                    <Button
                      variant="contained"
                      endIcon={<ChevronRightRoundedIcon />}
                      onClick={handleNext}
                      sx={{
                        width: { xs: "100%", sm: "fit-content" },
                        borderRadius: 0,
                        fontFamily: '"Nunito Sans", sans-serif',
                      }}
                    >
                      {activeStep === steps.length - 1 ? "Place order" : "Next"}
                    </Button>
                  )}
                </Box>
              </React.Fragment>
            )}
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
