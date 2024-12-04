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
import ConnectButton from "./buttons/ConnectButton";

export default function TableComponent({ filteredCouriers }) {
  const [tab, setTab] = useState(0);
  const [page, setPage] = useState(0);
  const [visibleCount, setVisibleCount] = useState(15);
  const [loadMoreEnabled, setLoadMoreEnabled] = useState(true); // Track if load more is enabled
  const [tooltipOpen, setTooltipOpen] = useState({}); // Track tooltip open state for each shop
  const [flag , setFlag] = useState(false);

  useEffect(() => {
    setPage(0); // Reset page when filteredShops changes
    setVisibleCount(15); // Reset visible count when shops data changes
    setLoadMoreEnabled(true); // Reset load more enabled state
  }, [filteredCouriers]);

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
      if (newCount >= 30 || newCount >= filterCouriers().length) {
        setLoadMoreEnabled(false); // Disable load more when 30 items are loaded or all items are loaded
      }
      return newCount;
    });
  };

  const handleTooltipToggle = (couriersId) => {
    setTooltipOpen((prev) => ({
      ...prev,
      [couriersId]: !prev[couriersId],
    }));
  };

  const handleTooltipClose = (couriersId) => {
    setTooltipOpen((prev) => ({
      ...prev,
      [couriersId]: false,
    }));
  };

  // Filter shops based on the selected tab
  const filterCouriers = () => {
    if (tab === 0) return filteredCouriers.filter(couriers => couriers.status === 'None' || couriers.status === 'REJECTED'); // All Shops
    if (tab === 1) return filteredCouriers.filter(couriers => couriers.status === 'PENDING'); // Pending Requests
    if (tab === 2) return filteredCouriers.filter(couriers => couriers.status === 'ACCEPTED'); // Accepted Requests
    return [];
  };

  const totalCouriers = filterCouriers();
  const currentCouriers = totalCouriers.slice(page * 30, (page + 1) * 30);
  const visibleCouriers = currentCouriers.slice(0, visibleCount);

  // Calculate the total number of pages
  const totalPages = Math.ceil(totalCouriers.length / 30);

  // Check if more shops are available on the current page
  const moreCouriersAvailable = visibleCount < currentCouriers.length;

  // Determine if the "Load More" button should be displayed
  const showLoadMoreButton = (page === 0 || moreCouriersAvailable) && visibleCount < totalCouriers.length;

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
          <Tab label="All Couriers" />
          <Tab label="Pending Requests" />
          <Tab label="Accepted Requests" />
        </Tabs>

        <Box sx={{ padding: 2 }}>
          {(tab === 0 || tab === 1 || tab === 2) && (
            <Grid container spacing={2}>
              {visibleCouriers.map((couriers) => {
                const branches = couriers.branches.split(',').map(branch => branch.trim());
                const singleBranch = branches[0];

                return (
                  <Grid item xs={12} sm={6} md={4} lg={2.4} key={couriers.id}>
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
                      <Avatar src={couriers.profilePic} sx={{ width: 80, height: 80, marginBottom: 1, border: '1px solid black' }} />
                      <Typography variant="h6" sx={{ marginBottom: 1, fontWeight: "bold" }}>{couriers.name}</Typography>
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
                        open={tooltipOpen[couriers.id] || false}
                        onClose={() => handleTooltipClose(couriers.id)}
                      >
                        <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 1, cursor: 'pointer' }}>
                          <LocationOnIcon sx={{ marginRight: 0.5, color: '#D32F2F' }} />
                          <Typography variant="body2">{singleBranch}</Typography>
                          {branches.length > 1 && 
                          <IconButton onClick={() => handleTooltipToggle(couriers.id)}>
                            <KeyboardArrowUpIcon sx={{ color: '#000000' }} />
                          </IconButton>}
                        </Box>
                      </Tooltip>
                      <ConnectButton tab={tab} courierId={couriers.courier_id} requestId={couriers.request_id} flag={flag}  setFlag={setFlag}/>
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
