import React, { useEffect, useState } from "react";
import TableComponent from "./TableComponent";
import FilterComponent from "./FilterComponent";
import { Stack } from "@mui/material";
import { filterOptions, tableData, headCellsPendingRequests, headCellsRejectedDeliveries, rejectedDeliveries, fetchTableData } from "./TableConfig";

const DataTable = () => {
  const [search, setSearch] = useState("");
  const [filter0, setFilter0] = useState("");
  const [filter1, setFilter1] = useState("");
  const [filter2, setFilter2] = useState("");
  const [filter3, setFilter3] = useState("");
  const [checked, setChecked] = useState(false);
  const [tab, setTab] = useState(0);

  const getHeadCells = () => tab === 0 ? headCellsPendingRequests : headCellsRejectedDeliveries;
  const [data , setData] = useState([]);

  useEffect(()=>{
    const getData = async () => {
      return tab === 0
        ? setData(await fetchTableData({ mode: "pending" }))
        : setData(await fetchTableData({ mode: "reject" }));
    };

    getData()
  } , [])

  const columnIdArray = getHeadCells().map((column) => column.id);

  const filteredRows = data.filter((row) => {
    for (let columnId of columnIdArray) {
      if (row[columnId]?.toString().toLowerCase().includes(search.toLowerCase())) {
        return true;
      }
    }
    return false;
  });

  const filters = [filter0, filter1, filter2, filter3];
  const filterIdArray = filterOptions.map((filter) => filter.id);

  const filteredData = data.filter((row) => {
    return filters.every((filter, index) => {
      if (filter === "") {
        return true;
      }
      const value = row[filterIdArray[index]];

      if (filterIdArray[index] === "amount") {
        if (filter === "Below 5000") return value < 5000;
        if (filter === "Below 10000") return value < 10000;
        if (filter === "Below 15000") return value < 15000;
      }

      if (filterIdArray[index] === "deliveryDate") {
        const currentDate = new Date();
        const endOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
        const endOfYear = new Date(currentDate.getFullYear(), 11, 31);

        if (filter === "Before End of This Month") return new Date(value) < endOfMonth;
        if (filter === "Before End of This Year") return new Date(value) < endOfYear;
      }

      if (filterIdArray[index] === "weight") {
        if (filter === "Below 500g") return value < 500;
        if (filter === "Below 1000g") return value < 1000;
        if (filter === "Below 2000g") return value < 2000;
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
