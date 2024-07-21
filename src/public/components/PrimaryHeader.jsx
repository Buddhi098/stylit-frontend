import {
  Box,
  Stack,
  Typography,
  TextField,
  InputAdornment,
} from "@mui/material";
import React from "react";
import Logo from "../assets/images/logo/Stylit_logo.png";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";

const PrimaryHeader = () => {
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
          <Stack direction="row" sx={{position:'absolute' , top:'20%' , left:"46%"}}>
            <Box
              component="img"
              src={Logo}
              alt="Stylit Logo"
              sx={{ height: "28px"}}
            />
          </Stack>
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
            <Stack direction="row">
              <TextField
                label="SEARCH"
                size="small"
                sx={{
                  width: "300px",
                  "& .MuiInputBase-input": {
                    py: "5px",
                  },
                  boxShadow: "none",
                  borderRadius: "0px",
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
                InputLabelProps={{
                  style: { fontSize: "12px", textAlign: "center" }, // Adjust label font size here
                }}
              />
            </Stack>
            <Link to="#">
              {/* <PersonOutlineOutlinedIcon
                sx={{ fontSize: "30px", color: "rgba(0, 0, 0, 0.6)" }}
              /> */}
              <span class="material-symbols-outlined topbar-icon">person</span>
            </Link>
            <Link to="#">
              {/* <FavoriteBorderOutlinedIcon
                sx={{ fontSize: "30px", color: "rgba(0, 0, 0, 0.6)" }}
              /> */}
              <span class="material-symbols-outlined topbar-icon">favorite</span>
            </Link>
            <Link to="#">
              {/* <ShoppingBagOutlinedIcon
                sx={{ fontSize: "30px", color: "rgba(0, 0, 0, 0.6)" }}
              /> */}
              <span class="material-symbols-outlined topbar-icon">local_mall</span>
            </Link>
          </Stack>
        </Stack>
      </Stack>
  );
};

export default PrimaryHeader;
