import React, { useState } from "react";
import {
  Button,
  Card,
  Typography,
  Modal,
  Box,
  TextField,
  Grid,
  Stack,
  Divider,
} from "@mui/material";

import visa from "../../../assets/images/payment_method_page/visa.png";

const PaymentMethods = () => {
  const [open, setOpen] = useState(false);
  const [paymentMethods, setPaymentMethods] = useState([
    { type: "VISA", last4: "4536" },
  ]);
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleAddPaymentMethod = () => {
    const newMethod = {
      type: "VISA", // In a real application, you should determine the card type from the card number
      last4: cardNumber.slice(-4),
    };
    setPaymentMethods([...paymentMethods, newMethod]);
    handleClose();
  };

  return (
    <Box component="form" sx={{ mt: 2, ml: "16px" }} height={"70vh"}>
      <Stack spacing={1} marginBottom={2}>
        <Typography variant="subtitle_nunito" gutterBottom>
          Account
        </Typography>
        <Divider />
        <Stack
          direction={"row"}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "16px",
          }}
        >
          <Typography variant="body1_nunito" gutterBottom>
            Shipping Information
          </Typography>
          <Button
            variant="outlined"
            onClick={handleOpen}
            color="primary"
            sx={{
              color: "#000000",
              border: "2px solid #999999",
              borderRadius: "0",
              "&:hover": {
                backgroundColor: "#000000",
                color: "#ffffff",
                border: "2px solid #ffffff",
              },
            }}
          >
            <Typography variant="body2_nunito">Add New Address +</Typography>
          </Button>
        </Stack>
      </Stack>
      <Box sx={{overflowY:"scroll" , maxHeight:"50vh"}}>
        {paymentMethods.map((method, index) => (
          <Card
            key={index}
            variant="outlined"
            style={{
              display: "flex",
              alignItems: "center",
              padding: "10px",
              margin: "10px 0",
            }}
          >
            <Box component="img" src={visa} marginRight={1} />
            <Stack direction="column">
              <Typography variant="body2_nunito">{method.type}</Typography>
              <Typography variant="body2_nunito">****{method.last4}</Typography>
            </Stack>
          </Card>
        ))}
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <Stack
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            backgroundColor: "white",
            boxShadow: 24,
            padding: 60,
          }}

        >
          <Box textAlign={"center"} marginBottom={"16px"}>
          <Typography variant="subtitle_alata" gutterBottom >
            New Payment Method
          </Typography>
          </Box>
          
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Card Number"
                variant="filled"
                size="small"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                type="date"
                variant="filled"
                size="small"
                value={expiry}
                onChange={(e) => setExpiry(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="CVC"
                variant="filled"
                size="small"
                value={cvc}
                onChange={(e) => setCvc(e.target.value)}
              />
            </Grid>
          </Grid>
          <Button
            variant="outlined"
            color="primary"
            sx={{
              color: "#ffffff",
              backgroundColor: "#000000",
              borderRadius: "0",
              marginTop: "16px",
              width: "100%",
              "&:hover": {
                backgroundColor: "#444444",
              },
            }}
            onClick={handleAddPaymentMethod}
          >
            <Typography variant="body2_nunito">ADD NEW PAYMENT METHOD</Typography>
          </Button>
        </Stack>
      </Modal>
    </Box>
  );
};

export default PaymentMethods;
