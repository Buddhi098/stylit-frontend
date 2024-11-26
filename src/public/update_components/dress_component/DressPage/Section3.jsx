import { Stack } from "@mui/system";
import React from "react";
import Section3Product from "./Section3/Section3Product";
import { Box, Typography } from "@mui/material";

const Section3 = () => {
  return (
    <Stack
      width={"100%"}
      minHeight={"700px"}
      sx={{
        background: "#f0f0f0",
        marginBottom: "64px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      spacing={7}
    >
      <Box >
        <Typography variant="subtitle_alata" sx={{ textAlign: "center" }}>
          Outfits Styled for You
        </Typography>
      </Box>
      <Section3Product />
    </Stack>
  );
};

export default Section3;
