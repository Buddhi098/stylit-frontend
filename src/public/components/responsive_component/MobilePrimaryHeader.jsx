import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import Logo from "../../assets/images/logo/Stylit_logo.png";

const MobilePrimaryHeader = () => {
  return (
      <Stack direction="column">
        <Box
          sx={{
            height: "44px",
            backgroundColor: "primary.main",
          }}
        ></Box>
        <Stack
          direction="row"
          sx={{
            height: "48px",
            borderBottom: "1px solid #D9CBB8",
            padding: "0px 20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Button sx={{ color: "#444444", padding: 0, minWidth: "10px" }}>
            <span class="material-symbols-outlined responsive-menu">menu</span>
          </Button>
          <Box component="img" src={Logo} sx={{ height: "30px" }} />
          <Stack direction="row" spacing={2}>
            <Button sx={{ color: "#444444", padding: 0, minWidth: "10px" , borderRadius:"10px"}}>
              <span class="material-symbols-outlined menu-item">search</span>
            </Button>
            <Button sx={{ color: "#444444", padding: 0, minWidth: "10px" , borderRadius:"10px"}}>
              <span class="material-symbols-outlined menu-item">favorite</span>
              <Typography variant="body2_nunito" ml={0.4}>0</Typography>
            </Button>
            <Button sx={{ color: "#444444", padding: 0, minWidth: "10px" , display:"flex" , justifyContent:"center" , alignItems:"center" , borderRadius:"10px"}}>
              <span class="material-symbols-outlined menu-item">
                shopping_bag
              </span>
              <Typography variant="body2_nunito" ml={0.2} mt={0.2}>3</Typography>
            </Button>
          </Stack>
        </Stack>
      </Stack>
  );
};

export default MobilePrimaryHeader;
