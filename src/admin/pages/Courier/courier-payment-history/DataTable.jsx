import React, { useState } from "react";
import TableComponent from "./TableComponent";
import FilterComponent from "./FilterComponent";
import { Stack } from "@mui/material";
import { filterOptions, AcceptedPayments, headCellsAcceptedPayments, headCellsRejectedPayments, RejectedPayments } from "./TableConfig";

const DataTable = () => {
  const [search, setSearch] = useState("");
  const [filter0, setFilter0] = useState("");
  const [filter1, setFilter1] = useState("");
  const [filter2, setFilter2] = useState("");
  const [filter3, setFilter3] = useState("");
  const [checked, setChecked] = useState(false);
  const [tab, setTab] = useState(0);

  const getHeadCells = () => tab === 0 ? headCellsAcceptedPayments : headCellsRejectedPayments;
  const getData = () => tab === 0 ? AcceptedPayments : RejectedPayments;

  const columnIdArray = getHeadCells().map((column) => column.id);

  const filteredRows = getData().filter((row) => {
    for (let columnId of columnIdArray) {
      if (row[columnId]?.toString().toLowerCase().includes(search.toLowerCase())) {
        return true;
      }
    }
    return false;
  });

  const filters = [filter0, filter1, filter2, filter3];
  const filterIdArray = filterOptions.map((filter) => filter.id);

  const filteredData = getData().filter((row) => {
    return filters.every((filter, index) => {
      if (filter === "") {
        return true;
      }
      const value = row[filterIdArray[index]];

      if (filterIdArray[index] === "requestedAmount") {
        if (filter === "Requested > Withdrawable") return value > row.withdrawableAmount;
        if (filter === "Requested <= Withdrawable") return value <= row.withdrawableAmount;
      }

      if (filterIdArray[index] === "requiredDate") {
        const currentDate = new Date();

        if (filter === "Before Today") return new Date(value) < currentDate;
        if (filter === "Today or after Today") return new Date(value) >= currentDate;
      }

      if (checked) {
        return filter === row[filterIdArray[index]];
      }
      
      return value.toString().toLowerCase().includes(filter.toLowerCase());
    });
  });

  const finalData = checked ? filteredData : filteredRows;

  const handleTabChange = (newTab) => {
    setTab(newTab);
  };

  return (
    <Stack sx={{p: { xs: 2, sm: 3 } }}>
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
        handleTabChange={handleTabChange} // Pass the tab change handler
      />
      <TableComponent rows={finalData} />
    </Stack>
  );
};

export default DataTable;
