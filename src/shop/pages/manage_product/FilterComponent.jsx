// App.js
import React, { useState } from "react";
import {
  Box,
  Button,
  Grid,
  MenuItem,
  Select,
  TextField,
  InputAdornment,
  IconButton,
  InputLabel,
  FormControl,
  Typography,
  ListItemText,
  ToggleButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import AddIcon from "@mui/icons-material/Add";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import { filterOptions } from "./TableConfig";
import { filter } from "lodash";

const FilterComponent = ({
  search,
  handleSearch,
  filter0,
  setFilter0,
  filter1,
  setFilter1,
  filter2,
  setFilter2,
  filter3,
  setFilter3,
  checked,
  setChecked
}) => {
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("");
  const [price, setPrice] = useState("");
  const [color, setColor] = useState("");

  const [selected, setSelected] = useState(false);

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  const filters = [filter0, filter1, filter2, filter3];
  const setFilters = [setFilter0, setFilter1, setFilter2, setFilter3];

  const handleFilterChange = (event, index) => {
    console.log(index)
    const { value } = event.target;
    setFilters[index](value);
  };

  return (
    <Box
      sx={{
        padding: 2,
        marginBottom: "8px",
        background: "white",
        borderRadius: "3px",
        boxShadow: "0px 0px 3px rgba(0 , 0 , 0 , 0.1)",
      }}
    >
      <Grid
        container
        spacing={2}
        alignItems="center"
        justifyContent="space-between"
        sx={{ paddingBottom: "8px", borderBottom: "1px solid #f0f0f0" }}
      >
        <Grid
          item
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          <Box
            sx={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              backgroundColor: "#0165fc",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Inventory2OutlinedIcon sx={{ color: "white" }} />
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              flexDirection: "column",
              marginLeft: "10px",
            }}
          >
            <Typography variant="h4" ml="2px">
              Manage Product
            </Typography>
            <Typography variant="h6" ml="2px" color="#8E8B8B">
              Efficiently organize and update your inventory
            </Typography>
          </Box>
        </Grid>
        <Grid item xs md={3}>
          <TextField
            size="small"
            fullWidth
            variant="outlined"
            placeholder="Search..."
            value={search}
            onChange={(e) => handleSearch(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
      </Grid>

      <Grid
        container
        spacing={2}
        alignItems="center"
        sx={{
          marginTop: 0,
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "flex-start",
        }}
      >
        {/* Filter boxes */}
        {filterOptions.map((filterOption, index) => (

          <Grid
            key={index}
            item
            md={2}
            display="flex"
            justifyContent="flex-end"
            flexDirection="column"
          >
            <InputLabel
              id={`${filterOption.label}-label`}
              sx={{ marginBottom: "2px" }}
            >
              {filterOption.label}
            </InputLabel>
            <FormControl variant="outlined" sx={{ minWidth: 150 }}>
              <Select
                labelId={`${filterOption.label}-label`}
                value={filters[index]}
                onChange={ (e) => {handleFilterChange(e , index)}}
                displayEmpty
                size="small"
                sx={{ borderRadius: "4px", fontSize: "13px" }}
              >
                <MenuItem value="" disabled>
                  All
                </MenuItem>
                {filterOption.options.map((option, index) => (
                  <MenuItem key={index} value={option}>
                    {option}
                  </MenuItem>
                ))}
                {/* Add other categories here */}
              </Select>
            </FormControl>
          </Grid>
        ))}

        {/* filter button */}
        <Grid item md={2}>
          <ToggleButton
            value="check"
            selected={checked}
            onChange={() => {
              setChecked(!checked);
            }}
            color="primary"
            sx={{
              backgroundColor: selected ? "red" : "white",
              color: selected ? "white" : "#0165fc",
              border: "1px solid #0165fc",
              borderRadius: "4px",
              padding: "5px 20px",
              fontSize: "13px",
              zIndex: "1",
            }}
            disableFocusRipple
            disableRipple
          >
            <FilterAltOutlinedIcon
              sx={{ fontSize: "20px", marginRight: "3px" }}
            />
            <Typography variant="h6">Filter</Typography>
          </ToggleButton>
        </Grid>

        <Grid
          item
          md={2}
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItem: "flex-end",
          }}
        >
          <Button variant="contained" startIcon={<AddIcon />} color="primary">
            Add New Products
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FilterComponent;