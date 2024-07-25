import React from "react";
import s21 from "../../assets/images/men_page/s21.png";
import s22 from "../../assets/images/men_page/s22.png";
import { Button, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
const Section3 = () => {
  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      sx={{
        height: "70vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px 60px",
        marginBottom: "60px",
        marginTop:'60px'
      }}
      spacing={7}
    >
      <Stack
        sx={{
          width: "40%",
          background: "#f0f0f0",
          height: "100%",
          position: "relative",
        }}
      >
        <Box
          component="img"
          src={s21}
          alt="Fashion model"
          sx={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <Stack
          sx={{ position: "absolute", bottom: 30, left: 30 }}
          direction="column"
          spacing={4}
        >
          <Typography variant="subtitle_alata" sx={{ color: "white" }}>
            Shop By Body Type
          </Typography>
          <Button
            variant="contained"
            sx={{ background: "white", borderRadius: "0", width: "130px" , "&:hover": {backgroundColor: "#000000", color: "white"} }}
          >
            <Typography variant="body2_alata">Explore Now</Typography>
          </Button>
        </Stack>
      </Stack>

      <Stack
        sx={{
          width: "40%",
          background: "#f0f0f0",
          height: "100%",
          position: "relative",
        }}
      >
        <Box
          component="img"
          src={s22}
          alt="Fashion model"
          sx={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <Stack
          sx={{ position: "absolute", bottom: 30, left: 30 }}
          direction="column"
          spacing={4}
        >
          <Typography variant="subtitle_alata" sx={{ color: "white" }}>
          Shop by Color Season
          </Typography>
          <Button
            variant="contained"
            sx={{ background: "white", borderRadius: "0", width: "130px" , "&:hover": {backgroundColor: "#000000", color: "white"} }}
          >
            <Typography variant="body2_alata">Explore Now</Typography>
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Section3;
