import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import LocalAtmIcon from '@mui/icons-material/LocalAtm';

const TitleComponent = ({ onRequestWithdrawal }) => {
  return (
    <Box
      sx={{
        padding: 2,
        marginBottom: "8px",
        background: "white",
        borderRadius: "3px",
        boxShadow: "0px 0px 3px rgba(0, 0, 0, 0.1)",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        minHeight: "150px", // Ensures there's enough height to center content
      }}
    >
      <Grid
        container
        spacing={2}
        alignItems="center"
        justifyContent="center"
        sx={{ paddingBottom: "8px", textAlign: 'center' }}
      >
        <Grid
          item
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              backgroundColor: "#C0A888",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <LocalAtmIcon sx={{ color: "white" }} />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              textAlign: "center",
            }}
          >
            <Typography variant="h4" ml="2px">
              Withdraw Cash
            </Typography>
            <Typography variant="h6" ml="2px" color="#8E8B8B">
              Efficiently Manage Payment Requests
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TitleComponent;
