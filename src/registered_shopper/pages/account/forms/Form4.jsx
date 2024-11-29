import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Paper,
  Grid,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  Stack,
  Divider,
} from "@mui/material";
import QRCode from "qrcode.react";
import img from "../../../../public/assets/images/men_page/cover.png";
const Form4 = () => {
  const [open, setOpen] = useState(false);
  const [qrCodeValue, setQrCodeValue] = useState("");

  const handleOpen = (orderNumber) => {
    setQrCodeValue(`Order Number: ${orderNumber}`);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Stack component="form" sx={{ mt: 2, ml: "16px" }} height={"70vh"}>
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
        </Stack>
      </Stack>
      <Paper
        elevation={1}
        sx={{
          padding: 2,
          marginBottom: 2,
          borderRadius: 0,
          border: "1px solid #999999",
        }}
      >
        <Grid container alignItems="center" spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="body1_nunito">Order #12</Typography>
            <Stack>
              <Typography variant="body1_nunito" color="green">
                SHIPPED
              </Typography>
              <Typography variant="body2_nunito" color="#999999">
                2 ITEMS
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={6} md={4} container spacing={1}>
            {[1, 2, 3].map((_, index) => (
              <Grid item xs={4} key={index}>
                <Box
                  component="img"
                  src={img}
                  sx={{
                    width: 70,
                    height: 70,
                    backgroundColor: "grey.300",
                    objectFit: "cover",
                  }}
                />
              </Grid>
            ))}
          </Grid>
          <Grid item xs={12} sm={6} md={5}>
            <Stack direction={"row"} spacing={1} marginLeft={1}>
              <Button
                variant="outlined"
                color="primary"
                sx={{
                  color: "#000000",
                  border: "2px solid #999999",
                  borderRadius: "0",
                  width: "50%",
                  "&:hover": {
                    backgroundColor: "#000000",
                    color: "#ffffff",
                    border: "2px solid #ffffff",
                  },
                }}
                onClick={() => handleOpen(12)}
              >
                <Typography variant="body2_nunito">QR Code</Typography>
              </Button>
              <Button
                variant="text"
                color="primary"
                sx={{
                  color: "#ffffff",
                  width: "50%",
                  backgroundColor: "#000000",
                  borderRadius: "0",
                  "&:hover": {
                    backgroundColor: "#999999",
                  },
                }}
              >
                <Typography variant="body2_nunito">Track Package</Typography>
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Paper>
      <Paper elevation={1} sx={{ padding: 2 }}>
        {/* Additional content can be added here */}
      </Paper>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>QR Code</DialogTitle>
        <DialogContent>
          <QRCode value={qrCodeValue} />
        </DialogContent>
      </Dialog>
    </Stack>
  );
};

export default Form4;
