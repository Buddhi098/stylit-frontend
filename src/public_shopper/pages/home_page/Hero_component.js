import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const Hero_component = ({ icon, title, subtitle }) => {
  return (
    <div>
      <Stack
        direction="column"
        sx={{
          display: "flex",
          flexDirection: "column",
          minWidth: "300px",
          height: "100px",
          border: "1px solid #D9CBB8",
          padding: "10px 30px",
        }}
        spacing={0.5}
      >
        <Box>
          <span class="material-symbols-outlined">{icon}</span>
        </Box>
        <Typography variant="body1_nunito" sx={{ textAlign: "left" }}>
          {title}
        </Typography>
        <Typography
          variant="body2_nunito"
          sx={{ textAlign: "left", color: "black.700" }}
        >
          {subtitle}
        </Typography>
      </Stack>
    </div>
  );
};

export default Hero_component;
