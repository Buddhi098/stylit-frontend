import React, { useState } from "react";
import { Select, MenuItem, Box, Stack, Typography } from "@mui/material";
import SizeChartModal from "./SizeChartModal";
import { Link } from "react-router-dom";

const SizeChart = ({id , sizeChart , color}) => {
  const [size, setSize] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  const handleSizeChange = (event) => {
    setSize(event.target.value);
  };

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <Box>
      <Stack direction="column" spacing={1}>
        <Stack
          direction="row"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="body2_alata">Size:</Typography>
          <Link to="#" onClick={handleModalOpen} sx={{ marginLeft: 1 }}>
            <Typography
              variant="body2_alata"
              sx={{ color: "#999999", textDecoration: "underline" }}
            >
              Size Chart
            </Typography>
          </Link>
        </Stack>

        <Stack>
          <Select
            value={size}
            onChange={handleSizeChange}
            size="small"
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
            sx={{
              borderRadius: 0,
              border: "1px solid #000000",
              "& .MuiSelect-select": {
                padding: "4px 14px", // Adjust padding to match the new height
              },
            }}
          >
            <MenuItem value="">
              <Typography variant="body2_nunito">Please Select</Typography>
            </MenuItem>
            {
              sizeChart.map((size) => (
                <MenuItem key={size} value={size}>
                  <Typography variant="body2_nunito">{size}</Typography>
                </MenuItem>
              ))
            }
          </Select>
        </Stack>
      </Stack>
      <SizeChartModal open={modalOpen} handleClose={handleModalClose} color={color} id={id}/>
    </Box>
  );
};

export default SizeChart;
