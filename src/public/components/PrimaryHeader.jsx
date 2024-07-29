import {
  Box,
  Stack,
  Typography,
  TextField,
  InputAdornment,
  IconButton,
} from "@mui/material";
import React from "react";
import Logo from "../assets/images/logo/Stylit_logo.png";
import { Link, useNavigate } from "react-router-dom";
import ProfileMenu from "./ProfileMenu";
import "./primaryHeader.css";
import Cart from "../../registered_shopper/pages/cart/Cart";

const PrimaryHeader = ({ topHeaderColor }) => {
  const navigate = useNavigate()

  const navigateToSearchPage = () => {
    navigate('/public/search')
  }
  return (
    <Stack direction="column" sx={{ borderBottom: "1px solid #f0f0f0" }}>
      <Box
        sx={{
          backgroundColor: `${topHeaderColor}`,
          height: "35px",
        }}
      />
      <Stack
        direction="row"
        sx={{
          position: "relative",
          padding: "8px 25px",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Stack
          direction="row"
          spacing={5}
          sx={{ position: "absolute", top: "30%", left: "8%" }}
        >
          <Link to="/public/women">
            <Typography
              variant="body2_nunito"
              sx={{
                "&:hover": {
                  borderBottom: "3px solid black",
                  paddingBottom: "16px",
                },
              }}
            >
              Women
            </Typography>
          </Link>
          <Link to="/public/men">
            <Typography
              variant="body2_nunito"
              sx={{
                "&:hover": {
                  borderBottom: "3px solid black",
                  paddingBottom: "16px",
                },
              }}
            >
              Men
            </Typography>
          </Link>
          <Link to="/public/fashion_store">
            <Typography
              variant="body2_nunito"
              sx={{
                "&:hover": {
                  borderBottom: "3px solid black",
                  paddingBottom: "16px",
                },
              }}
            >
              Boutiques
            </Typography>
          </Link>
          <Link to="/public/partner_with_us">
            <Typography
              variant="body2_nunito"
              sx={{
                "&:hover": {
                  borderBottom: "3px solid black",
                  paddingBottom: "16px",
                },
              }}
            >
              Partner With Us
            </Typography>
          </Link>
        </Stack>
        <Stack
          direction="row"
          sx={{ position: "absolute", top: "20%", left: "46%" }}
        >
          <Box
            component="img"
            src={Logo}
            alt="Stylit Logo"
            sx={{ height: "28px" }}
          />
        </Stack>
        <Stack
          direction="row"
          spacing={2.5}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: "1100px",
          }}
        >
          <IconButton
            sx={{
              borderRadius: "5px",
              background: "#f0f0f0",
              padding: "4px 4px", // Adjust padding as needed
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}

            onClick={navigateToSearchPage}
          >
            <span className="material-symbols-outlined search">
              search
            </span>
          </IconButton>

          {/* <ShopperSignUp/> */}
          <ProfileMenu />

          <Link to="/shopper/favorite">
            {/* <FavoriteBorderOutlinedIcon
                sx={{ fontSize: "30px", color: "rgba(0, 0, 0, 0.6)" }}
              /> */}
            <span class="material-symbols-outlined topbar-icon1">favorite</span>
          </Link>
          <Cart/>
        </Stack>
      </Stack>
    </Stack>
  );
};

PrimaryHeader.defaultProps = {
  topHeaderColor: "primary.main",
};

export default PrimaryHeader;
