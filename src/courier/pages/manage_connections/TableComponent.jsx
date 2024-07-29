import React, { useState, useEffect } from "react";
import { 
  Box, 
  Grid, 
  Typography, 
  Paper, 
  Tabs, 
  Tab, 
  Button, 
  Avatar, 
  Tooltip,
  IconButton
} from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import AddIcon from '@mui/icons-material/Add';

export default function TableComponent({ filteredShops }) {
  const [tab, setTab] = useState(0);
  const [page, setPage] = useState(0);
  const [visibleCount, setVisibleCount] = useState(15);
  const [loadMoreEnabled, setLoadMoreEnabled] = useState(true); // Track if load more is enabled
  const [tooltipOpen, setTooltipOpen] = useState({}); // Track tooltip open state for each shop

  useEffect(() => {
    setPage(0); // Reset page when filteredShops changes
    setVisibleCount(15); // Reset visible count when shops data changes
    setLoadMoreEnabled(true); // Reset load more enabled state
  }, [filteredShops]);

  const handleTabChange = (event, newValue) => {
    setTab(newValue);
    setPage(0); // Reset page when tab changes
    setVisibleCount(15); // Reset visible count when tab changes
    setLoadMoreEnabled(true); // Reset load more enabled state
  };

  const handleChangePage = (newPage) => {
    setPage(newPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => {
      const newCount = prevCount + 15;
      if (newCount >= 30 || newCount >= filterShops().length) {
        setLoadMoreEnabled(false); // Disable load more when 30 items are loaded or all items are loaded
      }
      return newCount;
    });
  };

  const handleTooltipToggle = (shopId) => {
    setTooltipOpen((prev) => ({
      ...prev,
      [shopId]: !prev[shopId],
    }));
  };

  const handleTooltipClose = (shopId) => {
    setTooltipOpen((prev) => ({
      ...prev,
      [shopId]: false,
    }));
  };

  // Filter shops based on the selected tab
  const filterShops = () => {
    if (tab === 0) return filteredShops.filter(shop => shop.status !== 'following' && shop.status !== 'requested'); // All Shops
    if (tab === 1) return filteredShops.filter(shop => shop.status === 'requested'); // Pending Requests
    if (tab === 2) return filteredShops.filter(shop => shop.status === 'following'); // Accepted Requests
    return [];
  };

  const totalShops = filterShops();
  const currentShops = totalShops.slice(page * 30, (page + 1) * 30);
  const visibleShops = currentShops.slice(0, visibleCount);

  // Calculate the total number of pages
  const totalPages = Math.ceil(totalShops.length / 30);

  // Check if more shops are available on the current page
  const moreShopsAvailable = visibleCount < currentShops.length;

  // Determine if the "Load More" button should be displayed
  const showLoadMoreButton = (page === 0 || moreShopsAvailable) && visibleCount < totalShops.length;

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <Tabs value={tab} onChange={handleTabChange}
          sx={{
            "& .MuiTabs-indicator": {
              backgroundColor: "#C0A888",
            },
            "& .MuiTab-root": {
              color: "#000",
            },
            "& .MuiTab-root.Mui-selected": {
              color: "#C0A888",
            },
          }}>
          <Tab label="All Shops" />
          <Tab label="Pending Requests" />
          <Tab label="Accepted Requests" />
        </Tabs>

        <Box sx={{ padding: 2 }}>
          {(tab === 0 || tab === 1 || tab === 2) && (
            <Grid container spacing={2}>
              {visibleShops.map((shop) => {
                const branches = shop.branches.split(',').map(branch => branch.trim());
                const singleBranch = branches[0];

                return (
                  <Grid item xs={12} sm={6} md={4} lg={2.4} key={shop.id}>
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: 2,
                        border: '1px solid #ddd',
                        borderRadius: 2,
                        boxShadow: 2,
                        backgroundColor: 'white',
                        width: '100%', 
                        aspectRatio: '4/5', 
                        textAlign: 'center',
                      }}
                    >
                      <Avatar src={shop.profilePic} sx={{ width: 80, height: 80, marginBottom: 1, border: '1px solid black' }} />
                      <Typography variant="h6" sx={{ marginBottom: 1, fontWeight: "bold" }}>{shop.name}</Typography>
                      <Tooltip
                        title={
                          <Box>
                            {branches.map((branch, index) => (
                              <Box key={index} sx={{ display: 'flex', alignItems: 'center', marginBottom: 0.5 }}>
                                <LocationOnIcon sx={{ marginRight: 0.5, color: '#D32F2F' }} />
                                <Typography variant="body2">{branch}</Typography>
                              </Box>
                            ))}
                          </Box>
                        }
                        arrow
                        placement="top"
                        open={tooltipOpen[shop.id] || false}
                        onClose={() => handleTooltipClose(shop.id)}
                      >
                        <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 1, cursor: 'pointer' }}>
                          <LocationOnIcon sx={{ marginRight: 0.5, color: '#D32F2F' }} />
                          <Typography variant="body2">{singleBranch}</Typography>
                          {branches.length > 1 && 
                          <IconButton onClick={() => handleTooltipToggle(shop.id)}>
                            <KeyboardArrowUpIcon sx={{ color: '#000000' }} />
                          </IconButton>}
                        </Box>
                      </Tooltip>
                      <Button
                        variant={tab === 1 ? "outlined" : "contained"}
                        sx={{
                          backgroundColor: tab === 0 ? "#6CB4EE" : (tab === 2 ? "#4caf50" : "transparent"),
                          borderColor: tab === 1 ? "#C0A888" : "transparent", 
                          color: tab === 1 ? "#C0A888" : "#ffffff", 
                          "&:hover": {
                            backgroundColor: tab === 0 ? "#A8D8F7" : (tab === 2 ? "#2e7d32" : "transparent"),
                            borderColor: tab === 1 ? "#A68A6C" : "transparent",
                            color: tab === 1 ? "#A68A6C" : "#ffffff",
                          },
                        }}
                        endIcon={tab === 0 ? <AddIcon /> : null}
                      >
                        {tab === 0 ? "Connect" : (tab === 1 ? "Requested" : "Connected")}
                      </Button>
                    </Box>
                  </Grid>
                );
              })}
              {showLoadMoreButton && (
                <Grid item xs={12}>
                  <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
                    <Button
                      variant="outlined"
                      color="primary"
                      onClick={handleLoadMore}
                      disabled={!loadMoreEnabled}
                      endIcon={<KeyboardArrowDownIcon />}
                    >
                      Load More
                    </Button>
                  </Box>
                </Grid>
              )}
            </Grid>
          )}
        </Box>

        {totalPages > 1 && ( // Show pagination only if there are multiple pages
          <Box sx={{ display: 'flex', justifyContent: 'center', padding: 2 }}>
            {Array.from(Array(totalPages).keys()).map((pageIndex) => (
              <Button
                key={pageIndex}
                color="secondary"
                onClick={() => handleChangePage(pageIndex)}
                variant={pageIndex === page ? 'contained' : 'outlined'}
                sx={{ margin: 1 }}
                disabled={pageIndex === 1 && visibleCount <= 15} // Disable button to move from page 1 to page 2 if only 15 cards are displayed
              >
                {pageIndex + 1}
              </Button>
            ))}
          </Box>
        )}
      </Paper>
    </Box>
  );
}
