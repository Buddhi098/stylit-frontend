import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  IconButton,
  Stack,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import img from "../../../../assets/images/men_page/cover.png";

const Section3Product = () => {
  const [size, setSize] = useState("");
  const handleSizeChange = (event) => {
    setSize(event.target.value);
  };

  return (
    <Box
      sx={{
        width: "60%",
        height: "60%",
        background: "white",
        padding: "30px",
      }}
    >

      <Grid container spacing={4}>

        <Grid item xs={12} sm={6}>
          <Box
            component="img"
            src={img}
            alt="Product"
            sx={{ width: "100%", height: "300px", objectFit: "cover" }}
          />
        </Grid>

        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Typography variant="subtitle_alata" fontWeight="bold" color={"#444444"}>
            AMANI Pull on wide leg jean
          </Typography>
          <Typography variant="body1_alata" color="textSecondary">
            JAMIE & ANNIE
          </Typography>
          <Typography variant="body1_alata" sx={{ marginY: 2 }}>
            Rs 6350
          </Typography>
          <Typography variant="body2_alata">
            COLOR:{" "}
            <Typography variant="body2_alata" color="#999999">
              Black
            </Typography>{" "}
          </Typography>
          <Stack width={"80%"} margin="16px 0px">
            <Select
              value={size}
              onChange={handleSizeChange}
              size="small"
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
              sx={{
                borderRadius: 0,
                border: "1px solid #000000",
                "& .MuiSelect-select": {
                  padding: "4px 14px", // Adjust padding to match the new height
                },
              }}
            >
              <MenuItem value="">
                <Typography variant="body2_nunito">Please Select</Typography>
              </MenuItem>
              <MenuItem value={"S"}>S</MenuItem>
              <MenuItem value={"M"}>M</MenuItem>
              <MenuItem value={"L"}>L</MenuItem>
              <MenuItem value={"XL"}>XL</MenuItem>
            </Select>
          </Stack>
          <Stack width="80%" direction={"row"} marginTop={1} spacing={0.3}>
            {" "}
            {/* Increased marginTop to 4 */}
            <Button
              variant="contained"
              color="primary"
              sx={{
                width: "100%",
                backgroundColor: "#000000",
                color: "#ffffff",
                borderRadius: "0",
              }}
              disableFocusRipple
              disableRipple
            >
              <Typography variant="body2_nunito">ADD TO BAG</Typography>
            </Button>
            <Button
              variant="outlined"
              color="primary"
              sx={{
                width: "100%",
                border: "1px solid #000000",
                color: "#000000",
                borderRadius: "0",
              }}
              disableFocusRipple
              disableRipple
            >
              <Typography variant="body2_nunito">VIEW FULL DETAILS</Typography>
            </Button>
          </Stack>
        </Grid>

      </Grid>
      <Grid container spacing={2} sx={{ marginTop: 4 }}>
        <Grid item xs={3}>
          <Box
            component="img"
            src={img}
            alt="Related Product"
            sx={{ width: "100%" ,height: "130px", objectFit: "cover"}}
          />
        </Grid>
        <Grid item xs={3}>
          <Box
            component="img"
            src={img}
            alt="Related Product"
            sx={{ width: "100%",height: "130px", objectFit: "cover" }}
          />
        </Grid>
        <Grid item xs={3}>
          <Box
            component="img"
            src={img}
            alt="Related Product"
            sx={{ width: "100%",height: "130px", objectFit: "cover" }}
          />
        </Grid>
        <Grid item xs={3}>
          <Box
            component="img"
            src={img}
            alt="Related Product"
            sx={{ width: "100%",height: "130px", objectFit: "cover" }}
          />
        </Grid>

      </Grid>
    </Box>
  );
};

export default Section3Product;
