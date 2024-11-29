import React from "react";
import { Box, Typography, Button, IconButton, Stack } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";

const Section2 = ({ handleClose, setIsSubmit }) => {
  const navigate = useNavigate();

  const handleHandleNavigation = (e) => {
    navigate("/public/men");
    handleClose(e);
  };

  return (
    <Stack
      sx={{
        width: "400px",
        margin: "auto",
        padding: "20px 40px",
        border: "1px solid #ddd",
        textAlign: "center",
        position: "relative",
        backgroundColor: "#fff",
      }}
      spacing={1.5}
    >
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={{
          position: "absolute",
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
        disableFocusRipple
        disableRipple
      >
        <CloseIcon />
      </IconButton>
      <Typography variant="body1_alata" gutterBottom>
        You’re In
      </Typography>
      <Typography variant="body2_nunito" gutterBottom>
        Welcome to Stylit! You’re all set to explore the latest trends and
        exclusive deals.
      </Typography>
      <Typography variant="body1_alata" sx={{ marginTop: 2 }}>
        What’s Next?
      </Typography>
      <Stack
        direction="column"
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Button
          variant="contained"
          fullWidth
          sx={{
            marginTop: 2,
            background: "black",
            color: "white",
            width: "50%",
            borderRadius: "0",
          }}
          onClick={handleHandleNavigation} // Call the function here
        >
          <Typography variant="body2_nunito">CONTINUE SHOPPING</Typography>
        </Button>
      </Stack>
    </Stack>
  );
};

export default Section2;
