import {
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
  TextField,
  Button,
  Link,
} from "@mui/material";
import React from "react";

const Footer = () => {
  return (
      <Stack
        direction={{ xs: "column", sm: "column", md: "row" }}
        sx={{
          width: "100%",
          backgroundColor: "black.200",
          display: "flex",
          justifyContent: "center",
          paddingTop: "68px",
          paddingBottom: "40px",
          "@media (max-width:600px)": {
            paddingTop: "20px",
          },
        }}
        spacing={{ sm: 3, lg: 13 }}
      >
        <Stack
          direction="column"
          alignItems={{ xs: "center", sm: "center", md: "flex-start" }}
        >
          <Typography
            variant="body1_nunito"
            sx={{
              fontWeight: 700,
              color: "black.700",
              mb: "13px",
              "@media (max-width:600px)": {
                mb: "-10px",
                mt: "20px",
              },
            }}
          >
            SHOP
          </Typography>
          <List
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              "@media (max-width:600px)": {
                alignItems: "center",
              },
              
            }}
          >
            <Link variant="body1_nunito" sx={{color:"black.800" , textDecoration:"none" , cursor:"pointer" , '&:hover':{color:"black.900"}}}><ListItemText sx={{ margin: "0" ,fontSize: "14px", fontFamily:'"Nunito Sans", sans-serif'}} disableTypography>Women’s wear</ListItemText></Link>
            <Link variant="body1_nunito" sx={{color:"black.800" , textDecoration:"none" , cursor:"pointer" , '&:hover':{color:"black.900"}}}><ListItemText sx={{ margin: "0" ,fontSize: "14px", fontFamily:'"Nunito Sans", sans-serif'}} disableTypography>Men’s wear</ListItemText></Link>
            <Link variant="body1_nunito" sx={{color:"black.800" , textDecoration:"none" , cursor:"pointer" , '&:hover':{color:"black.900"}}}><ListItemText sx={{ margin: "0" ,fontSize: "14px", fontFamily:'"Nunito Sans", sans-serif'}} disableTypography>New arrivals</ListItemText></Link>
            <Link variant="body1_nunito" sx={{color:"black.800" , textDecoration:"none" , cursor:"pointer" , '&:hover':{color:"black.900"}}}><ListItemText sx={{ margin: "0" ,fontSize: "14px", fontFamily:'"Nunito Sans", sans-serif'}} disableTypography>Best sellers</ListItemText></Link>
            <Link variant="body1_nunito" sx={{color:"black.800" , textDecoration:"none" , cursor:"pointer" , '&:hover':{color:"black.900"}}}><ListItemText sx={{ margin: "0" ,fontSize: "14px", fontFamily:'"Nunito Sans", sans-serif'}} disableTypography>Sales</ListItemText></Link>
          </List>
        </Stack>

        <Stack
          direction="column"
          alignItems={{ xs: "center", sm: "center", md: "flex-start" }}
        >
          <Typography
            variant="body1_nunito"
            sx={{
              fontWeight: 700,
              color: "black.700",
              mb: "13px",
              "@media (max-width:600px)": {
                mb: "-10px",
                mt: "20px",
              },
            }}
          >
            CUSTOMER SERVICE
          </Typography>
          <List
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              "@media (max-width:600px)": {
                alignItems: "center",
              },
            }}
          >
            <Link variant="body1_nunito" sx={{color:"black.800" , textDecoration:"none" , cursor:"pointer" , '&:hover':{color:"black.900"}}}><ListItemText sx={{ margin: "0" ,fontSize: "14px", fontFamily:'"Nunito Sans", sans-serif'}} disableTypography>Contact Us</ListItemText></Link>
            <Link variant="body1_nunito" sx={{color:"black.800" , textDecoration:"none" , cursor:"pointer" , '&:hover':{color:"black.900"}}}><ListItemText sx={{ margin: "0" ,fontSize: "14px", fontFamily:'"Nunito Sans", sans-serif'}} disableTypography>FAQ</ListItemText></Link>
            <Link variant="body1_nunito" sx={{color:"black.800" , textDecoration:"none" , cursor:"pointer" , '&:hover':{color:"black.900"}}}><ListItemText sx={{ margin: "0" ,fontSize: "14px", fontFamily:'"Nunito Sans", sans-serif'}} disableTypography>
              Shipping Information
            </ListItemText></Link>
            <Link variant="body1_nunito" sx={{color:"black.800" , textDecoration:"none" , cursor:"pointer" , '&:hover':{color:"black.900"}}}><ListItemText sx={{ margin: "0" ,fontSize: "14px", fontFamily:'"Nunito Sans", sans-serif'}} disableTypography>
              Returns & Exchanges
            </ListItemText></Link>
          </List>
        </Stack>

        <Stack
          direction="column"
          alignItems={{ xs: "center", sm: "center", md: "flex-start" }}
        >
          <Typography
            variant="body1_nunito"
            sx={{
              fontWeight: 700,
              color: "black.700",
              mb: "13px",
              "@media (max-width:600px)": {
                mb: "-10px",
                mt: "20px",
              },
            }}
          >
            ACCOUNT
          </Typography>
          <List
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              "@media (max-width:600px)": {
                alignItems: "center",
              },
            }}
          >
            <Link variant="body1_nunito" sx={{color:"black.800" , textDecoration:"none" , cursor:"pointer" , '&:hover':{color:"black.900"}}}><ListItemText sx={{ margin: "0" ,fontSize: "14px", fontFamily:'"Nunito Sans", sans-serif'}} disableTypography>My Account</ListItemText></Link>
            <Link variant="body1_nunito" sx={{color:"black.800" , textDecoration:"none" , cursor:"pointer" , '&:hover':{color:"black.900"}}}><ListItemText sx={{ margin: "0" ,fontSize: "14px", fontFamily:'"Nunito Sans", sans-serif'}} disableTypography>Order History</ListItemText></Link>
            <Link variant="body1_nunito" sx={{color:"black.800" , textDecoration:"none" , cursor:"pointer" , '&:hover':{color:"black.900"}}}><ListItemText sx={{ margin: "0" ,fontSize: "14px", fontFamily:'"Nunito Sans", sans-serif'}} disableTypography>Wishlist</ListItemText></Link>
          </List>
        </Stack>

        <Stack
          direction="column"
          alignItems={{ xs: "center", sm: "center", md: "flex-start" }}
        >
          <Typography
            variant="body1_nunito"
            sx={{
              fontWeight: 700,
              color: "black.700",
              mb: "13px",
              "@media (max-width:600px)": {
                mb: "-10px",
                mt: "20px",
              },
            }}
          >
            LEGAL
          </Typography>
          <List
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              "@media (max-width:600px)": {
                alignItems: "center",
              },
            }}
          >
            <Link variant="body1_nunito" sx={{color:"black.800" , textDecoration:"none" , cursor:"pointer" , '&:hover':{color:"black.900"}}}><ListItemText sx={{ margin: "0" ,fontSize: "14px", fontFamily:'"Nunito Sans", sans-serif'}} disableTypography>Privacy Policy</ListItemText></Link>
            <Link variant="body1_nunito" sx={{color:"black.800" , textDecoration:"none" , cursor:"pointer" , '&:hover':{color:"black.900"}}}><ListItemText sx={{ margin: "0" ,fontSize: "14px", fontFamily:'"Nunito Sans", sans-serif'}} disableTypography>Terms of Service</ListItemText></Link>
            <Link variant="body1_nunito" sx={{color:"black.800" , textDecoration:"none" , cursor:"pointer" , '&:hover':{color:"black.900"}}}><ListItemText sx={{ margin: "0" ,fontSize: "14px", fontFamily:'"Nunito Sans", sans-serif'}} disableTypography>Cookies Policy</ListItemText></Link>
          </List>
        </Stack>

        <Stack
          direction="column"
          spacing={1}
          alignItems={{ xs: "center", sm: "center", md: "flex-start" }}
        >
          <Typography variant="body2_nunito">Get the latest news from us</Typography>
          <TextField
            label={"Email"}
            type="email"
            sx={{ width: "78%", backgroundColor: "white" }}
            size="small"
          />
          <Typography width="80%" variant="body2_nunito">
            By signing up, you agree to our Privacy Policy and Terms of Service.{" "}
          </Typography>
          <Button
            sx={{
              color: "white",
              background: "black",
              fontSize: "12px",
              padding: "10px 20px",
              '&:hover': {
                backgroundColor: "black.800",
              }
            }}
          >
            Subscribe
          </Button>
        </Stack>
      </Stack>
  );
};

export default Footer;
