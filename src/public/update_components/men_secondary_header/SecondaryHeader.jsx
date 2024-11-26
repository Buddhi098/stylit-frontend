import React from "react";
import { Box, List, ListItem, ListItemText, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import MouseOverPopover from "./SecondaryHeaderComponents/MouseOverPopover";
import Section1 from "./SecondaryHeaderComponents/Section1";
import Section2 from "./SecondaryHeaderComponents/Section2";
import Section3 from "./SecondaryHeaderComponents/Section3";
import Section4 from "./SecondaryHeaderComponents/Section4";
import Section5 from "./SecondaryHeaderComponents/Section5";

const links = [
  { text: "Home", url: "/" },
  { text: "About", url: "/about" },
  { text: "Services", url: "/services" },
  { text: "Contact", url: "/contact" },
];

const SecondaryHeader = () => {
  return (
    <Stack
      direction="row"
      sx={{
        height: "60px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box marginRight={3}>
        <MouseOverPopover
          label={"Shop"}
          Component={Section1}
          red={false}
        ></MouseOverPopover>
      </Box>
      <Box marginRight={3}>
        <MouseOverPopover
          label={"New Arrivals"}
          Component={Section2}
          red={false}
        ></MouseOverPopover>
      </Box>
      <Box marginRight={3}>
        <MouseOverPopover
          label={"Best Sellers"}
          Component={Section3}
          red={false}
        ></MouseOverPopover>
      </Box>
      <Box marginRight={3}>
        <MouseOverPopover
          label={"Accessories"}
          Component={Section4}
          red={false}
        ></MouseOverPopover>
      </Box>
      <Box marginRight={3}>
        <MouseOverPopover
          label={"Sale"}
          Component={Section5}
          red={true}
        ></MouseOverPopover>
      </Box>
    </Stack>
  );
};

export default SecondaryHeader;
