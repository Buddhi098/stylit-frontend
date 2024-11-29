import React, { useState } from "react";
import TitleComponent from "./TitleComponent";
import TableComponent from "./TableComponent";
import { Stack } from "@mui/material";
import { shops } from "./TableConfig";

const DataTable = () => {
  // Implement search feature
  const [search, setSearch] = useState("");

  const filteredShops = shops.filter((shop) =>
    shop.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Stack sx={{p: { xs: 2, sm: 3 }}}>
      <TitleComponent
        search={search}
        handleSearch={setSearch}
      />
      <TableComponent filteredShops={filteredShops} />
    </Stack>
  );
};

export default DataTable;
