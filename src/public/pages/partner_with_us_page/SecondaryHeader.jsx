import { Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const SecondaryHeader = () => {
  return (
      <Stack
        direction={{ xs: "column", sm: "column", md: "row" }}
        height={{
          xs: "",
          sm: "100%",
          md: "50px",
          lg: "50px",
        }}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          "@media (max-width:600px)": {
            paddingTop: "10px",
            paddingBottom: "10px",
          },
        }}
        spacing={3}
      >
        <Link>
          <Typography
            variant="body2_nunito"
            sx={{
              color: "black.800",
              "&:hover": {
                color: "black.900",
              },
            }}
          >
            Become a Partner
          </Typography>
        </Link>
        <Link>
          <Typography
            variant="body2_nunito"
            sx={{
              color: "black.800",
              "&:hover": {
                color: "black.900",
              },
            }}
          >
            For Fashion Stores
          </Typography>
        </Link>
        <Link>
          <Typography
            variant="body2_nunito"
            sx={{
              color: "black.800",
              "&:hover": {
                color: "black.900",
              },
            }}
          >
            For Courier Services
          </Typography>
        </Link>
      </Stack>
  );
};

export default SecondaryHeader;
