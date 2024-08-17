import React from "react";
import {
  Box,
  Typography,
  Container,
  Button,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import InventoryIcon from "@mui/icons-material/Inventory";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";

const theme = createTheme({
  palette: {
    primary: {
      main: "#4caf50",
    },
    secondary: {
      main: "#2196f3",
    },
    error: {
      main: "#f44336",
    },
  },
});

const ProductAddResult = ({ status, setAddProduct }) => {
  const isSuccess = status === true;

  const icon = isSuccess ? (
    <CheckCircleOutlineIcon color="primary" sx={{ fontSize: 80, mb: 2 }} />
  ) : (
    <ErrorOutlineIcon color="error" sx={{ fontSize: 80, mb: 2 }} />
  );

  const title = isSuccess
    ? "Product Added Successfully!"
    : "Error Adding Product";
  const message = isSuccess
    ? "Your new product has been added to the inventory."
    : "There was an error while adding your product. Please try again.";

  const primaryButtonText = isSuccess ? "Add New Product" : "Try Again";
  const primaryButtonIcon = isSuccess ? <InventoryIcon /> : <ArrowBackIcon />;
  const primaryButtonColor = isSuccess ? "primary" : "error";

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm">
        <Box sx={{ mt: 8, mb: 4 }}>
          <Box elevation={3} sx={{ p: 4, textAlign: "center" }}>
            {icon}
            <Typography variant="h4" gutterBottom>
              {title}
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              {message}
            </Typography>
            <Box
              sx={{ mt: 4, display: "flex", justifyContent: "center", gap: 2 }}
            >
              <Button
                variant="contained"
                color={primaryButtonColor}
                startIcon={primaryButtonIcon}
                onClick={handleRefresh}
              >
                {primaryButtonText}
              </Button>

              <Link to="/shop/dashboard" style={{ textDecoration: 'none' }}>
                <Button
                  variant="outlined"
                  color="secondary"
                  startIcon={<ArrowBackIcon />}
                >
                  Back to Dashboard
                </Button>
              </Link>
            </Box>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default ProductAddResult;
