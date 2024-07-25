import React from "react";
import { Box, Typography, Container, Button, Divider, Alert } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { Stack } from "@mui/system";
import WarningAmberIcon from '@mui/icons-material/WarningAmber';

const Form6 = (props) => {
  return (
    <Container maxWidth="sm" sx={{ mt: 10, textAlign: "center" }}>
      {props.submissionError ? (
        <Alert
          icon={<WarningAmberIcon fontSize="inherit" />}
          severity="warning"
        >
          Something went wrong. Please try again later.
        </Alert>
      ) : (
        <Stack>
          <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
            <CheckCircleOutlineIcon color="success" sx={{ fontSize: 60 }} />
          </Box>
          <Typography variant="title_alata" component="h1" gutterBottom>
            Registration Complete
          </Typography>
          <Typography variant="body1_nunito" sx={{ mb: 4 }} color="#999999">
            Your registration was successfully completed. We will activate your
            account within 24 hours. Please stay in touch.
          </Typography>
          <Divider sx={{ margin: "10px 0px" }} />
        </Stack>
      )}
      <Button variant="outlined" sx={{marginTop:'10px'}} size="small" color="primary" href="/">
        <Typography variant="body2_alata">Go to Homepage</Typography>
      </Button>
    </Container>
  );
};

export default Form6;
