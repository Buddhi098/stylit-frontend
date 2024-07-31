import React, { useState } from "react";
import TableComponent from "./TableComponent";
import FilterComponent from "./FilterComponent";
import { Stack } from "@mui/material";
import { filterOptions, tableData, headCells } from "./TableConfig";
import RejectRequest from "./RegectRequest";

const NewAccountReqTable = () => {
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
      if (checked) {
        return filter === row[filteridArray[index]];
      }
      return row[filteridArray[index]].includes(filter);
    });

  });

  let finalData;
  if(checked) {
    finalData = filteredData;
  }else{
    finalData = filteredRows;
  }

  const handleDelete = () => {
    alert("Delete action triggered");
    // Implement your delete logic here
  };

  // Example view function using alert
  const handleView = () => {
    alert("View action triggered");
    // Implement your view logic here
  };

  return (
    <Stack>
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
        title="New Shop Account Requests"
        description="Manage new shop account requests"
      />
      <TableComponent 
        rows={finalData} 
        selectable={false}
        buttonOneAction={handleView}
        buttonOneText="Accept"
        // buttonTwoAction={RejectRequest}
        // buttonTwoText="Reject"
/>
    </Stack>
  );
};

export default NewAccountReqTable;