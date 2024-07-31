import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import BreadCrumb from "./BreadCrumb";
import StarRating from "./StarRating";
import SizeChart from "./SizeChart";
import ClothAccordion from "./ClothAccordion";
import Section1Drawer from "./Section1Drawer/Section1Drawer";

const colorCode = {
  Black: "#000000",
  White: "#FFFFFF",
  Gray: "#BDBDBD",
  Red: "#D21B28",
  Pink: "#FFB6B6",
  Orange: "#FFBA09",
  Yellow: "#FFF72E",
  Green: "#4ECB71",
  Blue: "#6CB4EE",
  Purple: "#A669B0",
  Brown: "#C0A888",
  Beige: "#F8E8DC",
  Multicolor:
    "linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)",
  "B&W":
    "repeating-linear-gradient(45deg, #000, #000 10px, #fff 10px, #fff 20px)",
};

const colors = ["Red", "Purple", "Blue"];

const ProductDetails = () => {
  const [selectedColor, setColor] = React.useState(colors[0]);

  return (
    <Stack direction={"column"} spacing={2} paddingLeft={4}>
      <Box>
        <BreadCrumb gender={"women"} />
      </Box>

      <Stack marginTop={2} spacing={0.3}>
        <Typography variant="subtitle_alata" fontSize={"20px"}>
          Off shoulder flower corsage top
        </Typography>
        <Typography variant="body2_nunito" fontSize={"10px"} color={"#999999"}>
          ALISA BOUTIQUE
        </Typography>
      </Stack>

      <Stack marginTop={2} spacing={0.3}>
        <Typography variant="subtitle_alata" color={"#000000"}>
          $ 50.00
        </Typography>
        <Typography variant="body2_nunito" color={"#999999"}>
          Inclusive of all taxes
        </Typography>
        <StarRating ratings={4.2} />
      </Stack>

      <Stack marginTop={2} spacing={0.3}>
        <Stack direction={"row"}>
          <Typography variant="body1_alata">Color : </Typography>
          <Typography variant="body1_alata" color={"#999999"} marginLeft={0.5}>
            {selectedColor}
          </Typography>
        </Stack>
        <Stack direction={"row"} marginTop={1} spacing={1}>
          {colors.map((color) => (
            <Section1Drawer setColor={setColor} color={color} selectedColor={selectedColor}/>
          ))}
        </Stack>
      </Stack>

      <Stack spacing={0.3}>
        <SizeChart />
      </Stack>

      <Stack marginTop={4} spacing={0.3}>
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
      </Stack>

      <Stack>
        <ClothAccordion/>
      </Stack>
    </Stack>
  );
};

export default ProductDetails;
