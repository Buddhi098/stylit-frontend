import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import Section1DrawerContent from "./Section1DrawerContent";

export default function Section1Drawer({ setColor , color , selectedColor}) {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: "60vw" }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Section1DrawerContent />
    </Box>
  );

  return (
    <div>
      <Box
        key={color} // Move the key here
        sx={{
          width: "26px",
          height: "26px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
          border: selectedColor === color ? "1px solid #999999" : "none",
        }}
        onClick={toggleDrawer("right", true)}
      >
        <Box
          sx={{
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            backgroundColor:color,
            cursor: "pointer",
          }}
          onClick={() => setColor(color)}
        />
      </Box>
      
      <SwipeableDrawer
        anchor="right"
        open={state.right}
        onClose={toggleDrawer("right", false)}
        onOpen={toggleDrawer("right", true)}
      >
        {list("right")}
      </SwipeableDrawer>
    </div>
  );
}
