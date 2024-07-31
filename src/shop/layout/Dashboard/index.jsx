import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Drawer from "./Drawer";
import Header from "./Header";
import navigation from "../../menu-items";
import Loader from "../../components/Loader";
import Breadcrumbs from "../../components/@extended/Breadcrumbs";
import { handlerDrawerOpen, useGetMenuMaster } from "../../api/menu";

export default function DashboardLayout() {
  const { menuMasterLoading } = useGetMenuMaster();
  const downXL = useMediaQuery((theme) => theme.breakpoints.down("xl"));
  const [key, setKey] = useState(0); // State to change key and trigger remount

  useEffect(() => {
    handlerDrawerOpen(!downXL);
    // When downXL changes, change the key to trigger remount
    setKey((prevKey) => prevKey + 1);
  }, [downXL]);

  if (menuMasterLoading) return <Loader />;

  return (
    <Box key={key} sx={{ display: "flex", width: "100%" }}>
      <Header />
      <Drawer />
      <Box
        component="main"
        sx={{ width: "calc(100% - 260px)", flexGrow: 1 }}
      >
        <Toolbar />
        <Breadcrumbs navigation={navigation} title />
        <Outlet />
      </Box>
    </Box>
  );
}
