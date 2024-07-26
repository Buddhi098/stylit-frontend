import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";
import HowToRegOutlinedIcon from "@mui/icons-material/HowToRegOutlined";
import { Shop } from "@mui/icons-material";
import ShopperSignUp from "../pages/shopper_sign_up/ShopperSignUp";
import ShopperLoginPage from "../pages/shopper_login_page/ShopperLoginPage";

export default function ProfileMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <React.Fragment>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip title="Account settings">
          <Link
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <span class="material-symbols-outlined topbar-icon">person</span>
          </Link>
          {/* <IconButton>
            <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
          </IconButton> */}
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)",
            width: "180px",
            height: "130px",
            padding: "20px 0px",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 40,
              height: 30,
              ml: -0.5,
              mr: 1,
            },
            "&::before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem>
          <Typography variant="body2_nunito" >Welcome</Typography>
        </MenuItem>

        <ShopperSignUp/>

        <ShopperLoginPage/>

        <MenuItem
          onClick={handleClose}
          sx={{
            color: "#999999",
            "&:hover": {
              color: "#000000",
            },
          }}
        >
          <Typography variant="body1_nunito" fontSize="15px">
            Help Center
          </Typography>
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
