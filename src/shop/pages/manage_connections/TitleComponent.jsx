import React, { useState } from "react";
import {
  Box,
  Grid,
  TextField,
  InputAdornment,
  Typography,
  IconButton,
  Collapse,
  Menu,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Divider,
  Avatar,
  Badge,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import GroupIcon from "@mui/icons-material/Group";
import CloseIcon from "@mui/icons-material/Close";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import { followRequests } from "./TableConfig";

const FilterComponent = ({ search, handleSearch }) => {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleToggle = () => {
    setOpen(!open);
  };

  const handlePersonIconClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleAccept = (id) => {
    // Handle accept follow request logic here
  };

  const handleReject = (id) => {
    // Handle reject follow request logic here
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
            <GroupIcon sx={{ color: "white" }} />
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "10px",
            }}
          >
            <Typography variant="h4" ml="2px">
              Manage Connections
            </Typography>
            <Typography variant="h6" ml="2px" color="#8E8B8B">
              Efficiently Connect with Couriers
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={4}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <Badge badgeContent={followRequests.length}  
              max={99} 
              sx={{
                marginRight: 2,
                '& .MuiBadge-badge': {
                  backgroundColor: '#6CB4EE',
                  color: '#ffffff'
                }
              }}
            >
              <IconButton onClick={handlePersonIconClick} color="inherit">
                <PersonAddAlt1Icon />
              </IconButton>
            </Badge>

            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleCloseMenu}
              sx={{
                mt: 1,
              }}
              MenuListProps={{
                sx: {
                  width: "500px",
                  padding: 0,
                },
              }}
            >
              <List>
                {followRequests.map((request) => (
                  <React.Fragment key={request.id}>
                    <ListItem divider>
                      <Avatar
                        src={request.profilePic}
                        sx={{
                          width: 40,
                          height: 40,
                          border: "1px solid black",
                          marginRight: "10px",
                        }}
                      />
                      <ListItemText
                        primary={
                          <Typography variant="body1" fontWeight="bold">
                            {request.name}
                          </Typography>
                        }
                        secondary={
                          <Typography variant="body2">
                            Requested to follow you.{" "}
                            <Typography component="span" variant="body2" color="textSecondary">
                              {request.time}
                            </Typography>
                          </Typography>
                        }
                      />
                      <ListItemSecondaryAction>
                        <Button
                          size="small"
                          onClick={() => handleAccept(request.id)}
                          sx={{
                            backgroundColor: '#C0A888',
                            color: '#ffffff',
                            '&:hover': { backgroundColor: '#A68A6C', color: '#ffffff' },
                            margin: "3px"
                          }}
                          variant="contained"
                        >
                          Accept
                        </Button>
                        <Button
                          size="small"
                          color="secondary"
                          onClick={() => handleReject(request.id)}
                          variant="outlined"
                        >
                          Reject
                        </Button>
                      </ListItemSecondaryAction>
                    </ListItem>
                    <Divider />
                  </React.Fragment>
                ))}
              </List>
            </Menu>

            <IconButton onClick={handleToggle} color="inherit">
              {open ? <CloseIcon /> : <SearchIcon />}
            </IconButton>
            <Collapse
              in={open}
              orientation="horizontal"
              sx={{
                width: open ? "100%" : "0",
                transition: "width 300ms ease-in-out",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                marginLeft: open ? "10px" : "0", // Add margin when expanded
              }}
            >
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
            </Collapse>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FilterComponent;
