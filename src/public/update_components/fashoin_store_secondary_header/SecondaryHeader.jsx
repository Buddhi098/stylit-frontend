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
          md: "60px",
          lg: "59px",
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
        <Link to="/public/all_fashion_store">
          <Typography
            variant="body2_nunito"
            sx={{
              color: "black.800",
              "&:hover": {
                color: "black.900",
              },
            }}
          >
            All Stores
          </Typography>
        </Link>
        <Link to="/public/fashion_Store_category">
          <Typography
            variant="body2_nunito"
            sx={{
              color: "black.800",
              "&:hover": {
                color: "black.900",
              },
            }}
          >
            Store Categories
          </Typography>
        </Link>
      </Stack>
  );
};

export default SecondaryHeader;
