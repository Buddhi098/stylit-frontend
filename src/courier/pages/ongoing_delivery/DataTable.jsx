import React, { useState } from "react";
import TableComponent from "./TableComponent";
import FilterComponent from "./FilterComponent";
import { Stack } from "@mui/material";
import { filterOptions, tableData, headCells } from "./TableConfig";

const DataTable = () => {
  // implement search feature
  const [search, setSearch] = useState("");

  const columnIdArray = headCells.map((column) => column.id);

  let filteredRows = tableData.filter((row) => {
    for (let columnId of columnIdArray) {
      if (
        row[columnId]?.toString().toLowerCase().includes(search.toLowerCase())
      ) {
        return true;
      }
    }
    return false;
  });

  // implement filter feature
  const [filter0, setFilter0] = useState("");
  const [filter1, setFilter1] = useState("");
  const [filter2, setFilter2] = useState("");
  const [filter3, setFilter3] = useState("");
  const [checked, setChecked] = useState(false);

  console.log(filter0, filter1, filter2, filter3, checked)

  const filters = [filter0, filter1, filter2, filter3];

  const filteridArray = filterOptions.map((filter) => filter.id);

  const filteredData = tableData.filter((row) => {
    
    return filters.every((filter, index) => {
      if (filter === "") {
        return true;
      }
      const value = row[filteridArray[index]];

      if (filteridArray[index] === "amount") {
        if (filter === "Below 5000") {
          return value < 5000; 
        } else if (filter === "Below 10000") {
          return value < 10000; 
        } else if (filter === "Below 15000") {
          return value < 15000; 
        }
      }

      if (filteridArray[index] === "deliveryDate") {
        const currentDate = new Date();
        const endOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0); 
        const endOfYear = new Date(currentDate.getFullYear(), 11, 31); 
  
        if (filter === "Before End of This Month") {
          return new Date(value) < endOfMonth;
        } else if (filter === "Before End of This Year") {
          return new Date(value) < endOfYear;
        }
      }

      if (filteridArray[index] === "weight") {
        if (filter === "Below 500g") {
          return value < 500; 
        } else if (filter === "Below 1000g") {
          return value < 1000; 
        } else if (filter === "Below 2000g") {
          return value < 2000; 
        }
      }
            
      if (checked) {
        return filter === row[filteridArray[index]];
      }
      
      return value.toString().toLowerCase().includes(filter.toLowerCase());
    });

  });

  let finalData;
  if(checked) {
    finalData = filteredData;
  }else{
    finalData = filteredRows;
  }

  return (
    <Stack sx={{p: { xs: 2, sm: 3 }}}>
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
      />
      <TableComponent rows={finalData} />
    </Stack>
  );
};

export default DataTable;
