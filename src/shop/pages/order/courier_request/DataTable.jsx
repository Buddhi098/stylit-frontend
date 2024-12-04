import React, { useEffect, useState } from "react";
import TableComponent from "./TableComponent";
import FilterComponent from "./FilterComponent";
import { Stack } from "@mui/material";
import {
  filterOptions,
  headCellsAllRequests,
  headCellsPendingRequests,
  headCellsRejectedRequests,
  fetchAcceptedOrder,
} from "./TableConfig";

const DataTable = () => {
  const [search, setSearch] = useState("");
  const [filter0, setFilter0] = useState("");
  const [filter1, setFilter1] = useState("");
  const [filter2, setFilter2] = useState("");
  const [filter3, setFilter3] = useState("");
  const [checked, setChecked] = useState(false);
  const [tab, setTab] = useState(0);
  const [tableData, setTableData] = useState([]);

  // Fetch accepted orders on component mount
  useEffect(() => {
    const fetchAcceptedOrderDetails = async () => {
      try {
        const response = await fetchAcceptedOrder();
        setTableData(response);
      } catch (error) {
        console.error("Error fetching accepted orders:", error);
      }
    };
    fetchAcceptedOrderDetails();
  }, []);

  // Get the appropriate head cells based on the active tab
  const getHeadCells = () => {
    switch (tab) {
      case 0:
        return headCellsAllRequests;
      case 1:
        return headCellsPendingRequests;
      case 2:
        return headCellsRejectedRequests;
      default:
        return headCellsAllRequests;
    }
  };

  const columnIdArray = getHeadCells().map((column) => column.id);

  // Filter rows based on the search query
  const filteredRows = tableData?.filter((row) => {
    return columnIdArray.some((columnId) =>
      row[columnId]?.toString().toLowerCase().includes(search.toLowerCase())
    );
  });

  // Apply advanced filters
  const filters = [filter0, filter1, filter2, filter3];
  const filterIdArray = filterOptions.map((filter) => filter.id);

  const filteredData = tableData?.filter((row) => {
    return filters.every((filter, index) => {
      if (!filter) return true; // Skip empty filters

      const value = row[filterIdArray[index]];

      if (filterIdArray[index] === "price") {
        if (filter === "Below 5000") return value < 5000;
        if (filter === "Below 10000") return value < 10000;
        if (filter === "Below 15000") return value < 15000;
      }

      if (filterIdArray[index] === "ordered_date") {
        const currentDate = new Date();
        const endOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
        const endOfYear = new Date(currentDate.getFullYear(), 11, 31);

        if (filter === "Before End of This Month") return new Date(value) < endOfMonth;
        if (filter === "Before End of This Year") return new Date(value) < endOfYear;
      }

      if (checked) {
        return filter === row[filterIdArray[index]];
      }

      return value?.toString().toLowerCase().includes(filter.toLowerCase());
    });
  });

  // Final data to display in the table
  const finalData = checked ? filteredData : filteredRows;

  // Handle tab change
  const handleTabChange = (newTab) => {
    setTab(newTab);
  };

  return (
    <Stack sx={{ p: { xs: 2, sm: 3 } }}>
      <FilterComponent
        search={search}
        handleSearch={setSearch}
        filter0={filter0}
        setFilter0={setFilter0}
        filter1={filter1}
        setFilter1={setFilter1}
        filter2={filter2}
        setFilter2={setFilter2}
        filter3={filter3}
        setFilter3={setFilter3}
        checked={checked}
        setChecked={setChecked}
        tab={tab}
        setTab={setTab}
        handleTabChange={handleTabChange}
      />
      <TableComponent rows={finalData} />
    </Stack>
  );
};

export default DataTable;