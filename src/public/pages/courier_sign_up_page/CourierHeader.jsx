import {
  Box,
  Stack,
  Typography,
  TextField,
  InputAdornment,
} from "@mui/material";
import React from "react";
import Logo from "../../assets/images/logo/Stylit_logo.png";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";

const CourierHeader = () => {
  return (
      <Stack direction="column" sx={{ borderBottom: "1px solid #f0f0f0" }}>
        <Box
          sx={{
            backgroundColor: "primary.main",
            height: "35px",
          }}
        />
        <Stack
          direction="row"
          sx={{
            position:'relative',
            padding: "8px 25px",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Stack direction="row" spacing={5} sx={{position:'absolute' , top:"30%" , left:"8%"}}>
            <Link to="#">
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
            <Link to="#">
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
            <Link to="#">
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
          {/* Logo */}
          <Stack direction="row" sx={{position:'absolute' , top:'20%' , left:"46%"}}>
            <Box
              component="img"
              src={Logo}
              alt="Stylit Logo"
              sx={{ height: "28px" }}
            />
          </Stack>

          {/* Login Section */}
          <Stack
            direction="row"
            spacing={2}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginLeft:"900px"
            }}
          >
            <Stack
              direction={"row"}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRight: "1px black solid",
                padding: "2px 20px",
              }}
              spacing={0.5}
            >
              <Link
                to="/public/courier_login_page"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <span class="material-symbols-outlined topbar-icon">
                  person
                </span>
              </Link>
              <Link
                to="/public/courier_login_page"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography variant="body2_alata">Login</Typography>
              </Link>
            </Stack>

            <Stack
              direction={"row"}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              spacing={0.5}
            >
              <Link
                to="#"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <span class="material-symbols-outlined topbar-icon">how_to_reg</span>
              </Link>
              <Link
                to="/public/shop_signup_form"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography variant="body2_alata">Signup</Typography>
              </Link>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
  );
};

export default CourierHeader;
