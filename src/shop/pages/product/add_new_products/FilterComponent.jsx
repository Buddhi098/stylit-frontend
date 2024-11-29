// App.js
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
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import StoreIcon from '@mui/icons-material/Store';
import SaveIcon from "@mui/icons-material/Save";
import AddchartIcon from '@mui/icons-material/Addchart';
import { useNavigate } from 'react-router-dom';

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


  const navigate = useNavigate();

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
              backgroundColor: "#C0A888",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AddchartIcon sx={{ color: "white" }} />
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
              Add New Products
            </Typography>
            <Typography variant="h6" ml="2px" color="#8E8B8B">
              Add new products to your store
            </Typography>
          </Box>
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
          <Button variant="contained" startIcon={<StoreIcon sx={{ fontSize: 30 }}/>} 
            onClick={() => navigate('/view_store')} 
            sx={{ marginLeft: 2, backgroundColor: "#C0A888", }}>
            View Store
          </Button>
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
      <Grid container spacing={2} alignItems="center" justifyContent="space-between">
        <Grid item xs={4} ml={2} mt={1.5}>
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
        <Grid item xs={6} display="flex" justifyContent="flex-end" >
          <Button
            variant="outlined"
            color="secondary"
            startIcon={<DeleteIcon />}
            sx={{ marginRight: 1, marginTop: 1.5,}}
          >
            Delete
          </Button>
          <Button
            variant="outlined"
            startIcon={<SaveIcon />}
            sx={{ marginRight: 1, marginTop: 1.5, color: "#C0A888", borderColor: "#C0A888",}}
          >
            Save Draft
          </Button>
          <Button
            variant="outlined"
            startIcon={<AddIcon />}
            onClick={() => navigate('/shop/add_new_product')}
            sx={{ marginRight: 1,
               marginTop: 1.5, 
               color: "#C0A888",
               borderColor: "#C0A888",
               }}
          >
            Add Product
          </Button>
        </Grid>
      </Grid>
      </Grid>
    </Box>
  );
};

export default FilterComponent;
