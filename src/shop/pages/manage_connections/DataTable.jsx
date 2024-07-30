import React, { useState } from "react";
import TitleComponent from "./TitleComponent";
import TableComponent from "./TableComponent";
import { Stack } from "@mui/material";
import { couriers } from "./TableConfig";

const DataTable = () => {
  // Implement search feature
  const [search, setSearch] = useState("");

  const filteredCouriers = couriers.filter((couriers) =>
    couriers.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Stack>
      <TitleComponent
        search={search}
        handleSearch={setSearch}
      />
      <TableComponent filteredCouriers={filteredCouriers} />
    </Stack>
  );
};

export default DataTable;
