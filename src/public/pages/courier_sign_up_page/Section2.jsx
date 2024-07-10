import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const Section2 = () => {
  return (
    <Stack>
      <Stack
        direction="row"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: "60px",
        }}
        padding={"10px 20px"}
      >
        <Stack
          direction={"column"}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "120px",
            textAlign: "center",
          }}
          spacing={0.5}
        >
          <Box
            width={"80px"}
            height={"80px"}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <span class="material-symbols-outlined section2_icons">person</span>
          </Box>
        </Stack>

        <Box
          sx={{
            width: "13%",
            height: "3px",
            backgroundColor: "primary.200",
            borderRadius: "10px",
          }}
        ></Box>
        <Stack
          direction={"column"}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "120px",
            textAlign: "center",
          }}
          spacing={0.5}
        >
          <Box
            width={"80px"}
            height={"80px"}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <span class="material-symbols-outlined section2_icons">check</span>
          </Box>
        </Stack>

        <Box
          sx={{
            width: "13%",
            height: "3px",
            backgroundColor: "primary.200",
            borderRadius: "10px",
          }}
        ></Box>
        <Stack
          direction={"column"}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "120px",
            textAlign: "center",
          }}
          spacing={0.5}
        >
          <Box
            width={"80px"}
            height={"80px"}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <span class="material-symbols-outlined section2_icons">paid</span>
          </Box>
        </Stack>
      </Stack>

      <Stack
        direction="row"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: "0px",
          mb: "20px",
        }}
        padding={"0px 20px"}
      >
        <Stack
          direction={"column"}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "120px",
            textAlign: "center",
          }}
          spacing={0.5}
        >
          <Typography variant="body2_nunito" sx={{ fontWeight: 800 }}>
            1
          </Typography>
          <Typography variant="body2_nunito" color={"black.800"}>
            Create an Account
          </Typography>
        </Stack>

        <Box sx={{ width: "13%", height: "2px" }}></Box>

        <Stack
          direction={"column"}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "120px",
            textAlign: "center",
          }}
          spacing={0.5}
        >
          <Typography variant="body2_nunito" sx={{ fontWeight: 800 }}>
            1
          </Typography>
          <Typography variant="body2_nunito" color={"black.800"}>
            Accept Delivery
          </Typography>
        </Stack>

        <Box sx={{ width: "13%", height: "2px" }}></Box>

        <Stack
          direction={"column"}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "120px",
            textAlign: "center",
          }}
          spacing={0.5}
        >
          <Typography variant="body2_nunito" sx={{ fontWeight: 800 }}>
            1
          </Typography>
          <Typography variant="body2_nunito" color={"black.800"}>
            Start Delivering & Earn!
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Section2;
