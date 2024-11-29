import { Box, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

const Section2DressBox = ({image , name}) => {
  return (
    <Stack>
      <Box sx={{ position: "relative", cursor: "pointer" }}>
        <Box
          component="img"
          src={image}
          alt={name}
          sx={{
            width: "98%",
            height: "400px",
            maxWidth: "540px",
            margin: "10px auto",
            objectFit: "cover",
            "&:hover": {
              filter: "brightness(0.8)",
            },
          }}
        />
        <Box sx={{ position: "absolute", bottom: "40px", left: "80px" }}>
          <Typography variant="body1_alata" color="#ffffff" mt={2}>
            {name}
          </Typography>
        </Box>
      </Box>
    </Stack>
  );
};

export default Section2DressBox;
