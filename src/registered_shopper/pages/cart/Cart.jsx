import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Section1 from "./Section1";

export default function Cart() {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 600 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Section1/>
    </Box>
  );

  return (
    <div>
      <Link onClick={toggleDrawer("right", true)}>
        {/* <ShoppingBagOutlinedIcon
                sx={{ fontSize: "30px", color: "rgba(0, 0, 0, 0.6)" }}
              /> */}
        <span class="material-symbols-outlined topbar-icon1">local_mall</span>
      </Link>
      <Drawer
        anchor="right"
        open={state.right}
        onClose={toggleDrawer("right", false)}
      >
        {list("right")}
      </Drawer>
    </div>
  );
}
