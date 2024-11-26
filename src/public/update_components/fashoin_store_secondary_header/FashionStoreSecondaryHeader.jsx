import { Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const FashionStoreSecondaryHeader = () => {
  return (
    <Stack>
      <Link>All Stores</Link>
      <Link>Store Categories</Link>
      <Link>Stores I follow</Link>
    </Stack>
  );
};

export default FashionStoreSecondaryHeader;
