import React, { useEffect, useState } from "react";
import TitleComponent from "./TitleComponent";
import TableComponent from "./TableComponent";
import { Stack } from "@mui/material";
import { fetchData } from "./TableConfig";

const DataTable = () => {
  // State for search and couriers
  const [search, setSearch] = useState("");
  const [couriers, setCouriers] = useState([]);

  // Fetch couriers on component mount
  useEffect(() => {
    const fetchCourierData = async () => {
      try {
        const data = await fetchData();
        setCouriers(data);
      } catch (error) {
        console.error("Failed to fetch couriers:", error);
      }
    };
    fetchCourierData();
  }, []);

  // Filter couriers based on search input
  const filteredCouriers = couriers?.filter((courier) =>
    courier.name?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Stack sx={{ p: { xs: 2, sm: 3 } }}>
      {/* Pass search state and handler to TitleComponent */}
      <TitleComponent search={search} handleSearch={setSearch} />
      {/* Pass filtered couriers to TableComponent */}
      <TableComponent filteredCouriers={filteredCouriers} />
    </Stack>
  );
};

export default DataTable;
