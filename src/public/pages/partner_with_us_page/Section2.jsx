import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const Section2 = () => {
  return (
    <Stack sx={{margin:"30px 0px"}}>
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
            borderRadius={"50%"}
            sx={{
              backgroundColor: "primary.200",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <span class="material-symbols-outlined partner_with_us_icon">
              search
            </span>
          </Box>
        </Stack>

        <Box
          sx={{ width: "10%", height: "2px", backgroundColor: "primary.200" }}
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
            borderRadius={"50%"}
            sx={{
              backgroundColor: "primary.300",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <span class="material-symbols-outlined partner_with_us_icon">
              edit_document
            </span>
          </Box>
        </Stack>

        <Box
          sx={{ width: "10%", height: "2px", backgroundColor: "primary.300" }}
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
            borderRadius={"50%"}
            sx={{
              backgroundColor: "primary.400",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <span class="material-symbols-outlined partner_with_us_icon">
              mark_chat_read
            </span>
          </Box>
        </Stack>

        <Box
          sx={{ width: "10%", height: "2px", backgroundColor: "primary.400" }}
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
            borderRadius={"50%"}
            sx={{
              backgroundColor: "primary.main",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <span class="material-symbols-outlined partner_with_us_icon">
              logout
            </span>
          </Box>
        </Stack>

        <Box
          sx={{ width: "10%", height: "2px", backgroundColor: "primary.main" }}
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
            borderRadius={"50%"}
            sx={{
              backgroundColor: "primary.600",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <span class="material-symbols-outlined partner_with_us_icon">
              payments
            </span>
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
          mb:"20px"
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
            Explore Partnership Options
          </Typography>
        </Stack>

        <Box sx={{ width: "10%", height: "2px" }}></Box>

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
            2
          </Typography>
          <Typography variant="body2_nunito" color={"black.800"}>
            Complete the Application
          </Typography>
        </Stack>

        <Box sx={{ width: "10%", height: "2px" }}></Box>

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
            3
          </Typography>
          <Typography variant="body2_nunito" color={"black.800"}>Review and Approval</Typography>
        </Stack>

        <Box sx={{ width: "10%", height: "2px" }}></Box>
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
            4
          </Typography>
          <Typography variant="body2_nunito" color={"black.800"}>
            Integration and Onboarding
          </Typography>
        </Stack>

        <Box sx={{ width: "10%", height: "2px" }}></Box>

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
            5
          </Typography>
          <Typography variant="body2_nunito" color={"black.800"}>Get Started</Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Section2;
