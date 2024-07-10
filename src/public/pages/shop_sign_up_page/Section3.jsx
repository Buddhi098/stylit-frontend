import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";

const Section3 = () => {
  return (
    <Stack
      direction={"row"}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "300px",
        margin: "30px",
      }}
      spacing={2}
    >
      {/* SubTitle */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "20%",
          height: "100%",
          borderRight: "1px solid #444444",
        }}
      >
        <Typography variant="subtitle_alata">Why Join Stylit?</Typography>
      </Box>
      {/* Gride Items */}
      <Grid container direction={"row"} width={"70%"} spacing={5}>
        <Grid item xs={12} sm={6} md={6} sx={{ padding: "20px 50px" }}>
          <Stack direction={"row"} spacing={2}>
            <Box>
              <span class="material-symbols-outlined section3_icons">paid</span>
            </Box>
            <Stack direction={"column"} spacing={1}>
              <Typography variant="body1_alata">Boost Your Sales</Typography>
              <Typography variant="body2_nunito">
                Leverage Sylit's advanced marketing tools to increase your
                store's visibility, attract more customers, and drive higher
                sales.
              </Typography>
            </Stack>
          </Stack>
        </Grid>

        <Grid item xs={12} sm={6} md={6} sx={{ padding: "20px 50px" }}>
          <Stack direction={"row"} spacing={2}>
            <Box>
              <span class="material-symbols-outlined section3_icons">
                pending_actions
              </span>
            </Box>
            <Stack direction={"column"} spacing={1}>
              <Typography variant="body1_alata">
                Flexible Working Hours
              </Typography>
              <Typography variant="body2_nunito">
                Choose your schedule and work at your convenience.With Stylit
                you have the freedom to balance your work and personal life.
              </Typography>
            </Stack>
          </Stack>
        </Grid>

        <Grid item xs={12} sm={6} md={6} sx={{ padding: "20px 50px" }}>
          <Stack direction={"row"} spacing={2}>
            <Box>
              <span class="material-symbols-outlined section3_icons">
                safety_check
              </span>
            </Box>
            <Stack direction={"column"} spacing={1}>
              <Typography variant="body1_alata">Safety and Security</Typography>
              <Typography variant="body2_nunito">
                Enjoy peace of mind with Stylit’s robust safety measures,
                including secure payment methods and 24/7 support.
              </Typography>
            </Stack>
          </Stack>
        </Grid>

        <Grid item xs={12} sm={6} md={6} sx={{ padding: "20px 50px" }}>
          <Stack direction={"row"} spacing={2}>
            <Box>
              <span class="material-symbols-outlined section3_icons">
                calendar_add_on
              </span>
            </Box>
            <Stack direction={"column"} spacing={1}>
              <Typography variant="body1_alata">
                Comprehensive Analytics
              </Typography>
              <Typography variant="body2_nunito">
                Access detailed insights and analytics to understand customer
                behavior, optimize your product offerings, and refine your
                marketing strategies.
              </Typography>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default Section3;
