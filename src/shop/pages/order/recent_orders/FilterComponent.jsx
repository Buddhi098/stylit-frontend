import React, { useState } from "react";
import {
  Box,
  Button,
  Grid,
  TextField,
  InputAdornment,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import PushPinIcon from '@mui/icons-material/PushPin';

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

  const filters = [filter0, filter1, filter2, filter3];
  const setFilters = [setFilter0, setFilter1, setFilter2, setFilter3];

  const handleFilterChange = (event, index) => {
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
      <Grid container spacing={2} alignItems="center" justifyContent="space-between">
        <Grid item sx={{ display: "flex", alignItems: "center" }}>
          <Box
            sx={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                backgroundColor: "#C0A888",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
          >
            <PushPinIcon sx={{ color: "white" }} />
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "10px",
            }}
          >
            <Typography variant="h4" ml="2px">
              Recent Orders
            </Typography>
            <Typography variant="h6" ml="2px" color="#8E8B8B">
                Accept or Reject an order
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={4}>
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
    </Box>
  );
};

export default FilterComponent;
