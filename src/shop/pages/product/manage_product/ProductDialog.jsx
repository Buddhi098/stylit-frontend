import React from "react";
import {
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Divider,
  IconButton,
  Typography,
  Grid,
  Button,
  DialogActions
} from "@mui/material";
import { Link } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import InventoryIcon from '@mui/icons-material/Inventory';
import TableChartIcon from '@mui/icons-material/TableChart';
import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService';
import ImageIcon from '@mui/icons-material/Image';
import InfoIcon from '@mui/icons-material/Info';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';

const colorMap = {
    White: '#FFFFFF',
    Green: '#008000',
    Yellow: '#FFFF00',
    Blue: '#0000FF',
    Black: '#000000',
    Brown: '#A52A2A',
    Grey: '#808080',
    Beige: '#F5F5DC',
    'Light-Green': '#90EE90',
    Purple: '#800080',
    Pink: '#FFC0CB',
    Teal: '#008080'
};

const getColorHex = (color) => {
    return colorMap[color] || '#000000'; // Default to black if color not found
};

const ProductDialog = ({ open, handleClose, selectedRow }) => {

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth sx={{ height: "100vh" }}>
      <DialogTitle sx={{ backgroundColor: '#C0A888' }}>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box display="flex" alignItems="center">
            {selectedRow && (
              <Typography variant="h6" component="div" ml={2} style={{ textTransform: 'uppercase', fontWeight: 'bold', color: 'white' }}>
                {selectedRow.info}
              </Typography>
            )}
          </Box>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <Divider />
      <DialogContent>
        <DialogContentText>
          <Grid container spacing={2}>
            {/* Left Column */}
            <Grid item xs={4.5}>
              <Box mb={2}>
                <Box display="flex" alignItems="center">
                  <Box
                    sx={{
                      width: "35px",
                      height: "35px",
                      borderRadius: "50%",
                      backgroundColor: "#D9D9D9",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}>
                    <InventoryIcon fontSize="small" sx={{ color: "black" }} />
                  </Box>
                  <Typography variant="h6" gutterBottom ml={2} mt={1} sx={{ fontWeight: 'bold', color: "black" }}>Product Info</Typography>
                </Box>
                {selectedRow && (
                  <>
                    <Grid container spacing={1} ml={3} mt={0.25}>
                      <Grid item xs={4}><Typography variant="body2"><strong>Product ID</strong></Typography></Grid>
                      <Grid item xs={8}><Typography variant="body2" sx={{ textAlign: 'right', color: "black" }}>{selectedRow.orderId}</Typography></Grid>
                    </Grid>
                    <Grid container spacing={1} ml={3} mt={0.25}>
                      <Grid item xs={4}><Typography variant="body2"><strong>Description</strong></Typography></Grid>
                      <Grid item xs={8}><Typography variant="body2" sx={{ textAlign: 'right', color: "black" }}>{selectedRow.description}</Typography></Grid>
                    </Grid>
                    <Grid container spacing={1} ml={3} mt={0.25}>
                      <Grid item xs={4}><Typography variant="body2"><strong>Pattern</strong></Typography></Grid>
                      <Grid item xs={8}><Typography variant="body2" sx={{ textAlign: 'right', color: "black" }}>{selectedRow.pattern}</Typography></Grid>
                    </Grid>
                    <Grid container spacing={1} ml={3} mt={0.25}>
                      <Grid item xs={4}><Typography variant="body2"><strong>Category</strong></Typography></Grid>
                      <Grid item xs={8}><Typography variant="body2" sx={{ textAlign: 'right', color: "black" }}>{selectedRow.category}</Typography></Grid>
                    </Grid>
                    <Grid container spacing={1} ml={3} mt={0.25}>
                      <Grid item xs={4}><Typography variant="body2"><strong>Sub Category</strong></Typography></Grid>
                      <Grid item xs={8}><Typography variant="body2" sx={{ textAlign: 'right', color: "black" }}>{selectedRow.subcategory}</Typography></Grid>
                    </Grid>
                    <Grid container spacing={1} ml={3} mt={0.25}>
                      <Grid item xs={4}><Typography variant="body2"><strong>Brand</strong></Typography></Grid>
                      <Grid item xs={8}><Typography variant="body2" sx={{ textAlign: 'right', color: "black" }}>{selectedRow.brand}</Typography></Grid>
                    </Grid>
                  </>
                )}
              </Box>
              <Box mb={2}>
                <Box display="flex" alignItems="center">
                  <Box
                    sx={{
                      width: "35px",
                      height: "35px",
                      borderRadius: "50%",
                      backgroundColor: "#D9D9D9",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}>
                    <TableChartIcon fontSize="small" sx={{ color: "black" }} />
                  </Box>
                  <Typography variant="h6" gutterBottom ml={2} mt={1} sx={{ fontWeight: 'bold', color: "black" }}>Pricing & Availability</Typography>
                </Box>
                {selectedRow && (
                  <>
                    <Grid container spacing={1} ml={3} mt={0.25}>
                      <Grid item xs={4}><Typography variant="body2"><strong>Unit Price (Rs.)</strong></Typography></Grid>
                      <Grid item xs={8}><Typography variant="body2" sx={{ textAlign: 'right', color: "black" }}>{selectedRow.price}</Typography></Grid>
                    </Grid>
                    <Grid container spacing={1} ml={3} mt={0.25}>
                      <Grid item xs={4}><Typography variant="body2"><strong>Discount Price (Rs.)</strong></Typography></Grid>
                      <Grid item xs={8}><Typography variant="body2" sx={{ textAlign: 'right', color: "black" }}>{selectedRow.discount}</Typography></Grid>
                    </Grid>
                    <Grid container spacing={1} ml={3} mt={0.25}>
                      <Grid item xs={4}><Typography variant="body2"><strong>Availability</strong></Typography></Grid>
                      <Grid item xs={8}><Typography variant="body2" sx={{ textAlign: 'right', color: "black" }}>{selectedRow.availability}</Typography></Grid>
                    </Grid>
                  </>
                )}
              </Box>
              <Box mb={2}>
                <Box display="flex" alignItems="center">
                  <Box
                    sx={{
                      width: "35px",
                      height: "35px",
                      borderRadius: "50%",
                      backgroundColor: "#D9D9D9",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}>
                    <InfoIcon fontSize="small" sx={{ color: "black" }} />
                  </Box>
                  <Typography variant="h6" gutterBottom ml={2} mt={1} sx={{ fontWeight: 'bold', color: "black" }}>Additional Info</Typography>
                </Box>
                {selectedRow && (
                  <>
                    <Grid container spacing={1} ml={3} mt={0.25}>
                      <Grid item xs={4}><Typography variant="body2"><strong>Occasions</strong></Typography></Grid>
                      <Grid item xs={8}><Typography variant="body2" sx={{ textAlign: 'right', color: "black" }}>{selectedRow.occasion}</Typography></Grid>
                    </Grid>
                    <Grid container spacing={1} ml={3} mt={0.25}>
                      <Grid item xs={4}><Typography variant="body2"><strong>Season</strong></Typography></Grid>
                      <Grid item xs={8}><Typography variant="body2" sx={{ textAlign: 'right', color: "black" }}>{selectedRow.season}</Typography></Grid>
                    </Grid>
                    <Grid container spacing={1} ml={3} mt={0.25}>
                      <Grid item xs={4}><Typography variant="body2"><strong>Gender</strong></Typography></Grid>
                      <Grid item xs={8}><Typography variant="body2" sx={{ textAlign: 'right', color: "black" }}>{selectedRow.gender}</Typography></Grid>
                    </Grid>
                    <Grid container spacing={1} ml={3} mt={0.25}>
                      <Grid item xs={4}><Typography variant="body2"><strong>Age Group</strong></Typography></Grid>
                      <Grid item xs={8}><Typography variant="body2" sx={{ textAlign: 'right', color: "black" }}>{selectedRow.ageGroup}</Typography></Grid>
                    </Grid>
                  </>
                )}
              </Box>
            </Grid>
            {/* Right Column */}
            <Grid item xs={6}>
              <Box mb={2} ml={10}>
                <Box display="flex" alignItems="center">
                  <Box
                    sx={{
                      width: "35px",
                      height: "35px",
                      borderRadius: "50%",
                      backgroundColor: "#D9D9D9",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}>
                    <ImageIcon fontSize="small" sx={{ color: "black"}} />
                  </Box>
                  <Typography variant="h6" gutterBottom ml={2} mt={1} sx={{ fontWeight: 'bold', color: "black" }}>Visual & Aesthetic</Typography>
                </Box>
                {selectedRow && (
                  <>
                    <Grid mt={1}>
                      <Grid item xs={4}><Typography variant="body2"><strong>Product Images</strong></Typography></Grid>
                      </Grid>
                      <Grid container spacing={1} ml={1} mt={0.25}>
                    {/* <Grid item xs={4} mr={2}>
                        <Box
                        sx={{
                            width: "100px",
                            height: "100px",
                            borderRadius: "10%",
                            backgroundColor: "#D9D9D9",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            mb: 1, // margin-bottom to add space between the two boxes
                            mr: 2, // increased margin-right to ensure the boxes don't overlap with the image
                        }}
                        />
                        <Box
                        sx={{
                            width: "100px",
                            height: "100px",
                            borderRadius: "10%",
                            backgroundColor: "#D9D9D9",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            mr: 2, // increased margin-right to ensure the boxes don't overlap with the image
                        }}
                        />
                    </Grid> */}
                    <Grid item xs={4} mr={2}>
                    <Box
                        sx={{
                            width: "100px",
                            height: "100px",
                            borderRadius: "10%",
                            backgroundColor: "#D9D9D9",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            mb: 1, // margin-bottom to add space between the two boxes
                            mr: 2, // increased margin-right to ensure the boxes don't overlap with the image
                        }}>
                        <img
                            src={selectedRow.imageUrl}
                            alt={selectedRow.info}
                            style={{
                                width: "100%", // make the image responsive to the box size
                                height: "100%", // make the image responsive to the box size
                                borderRadius: "10%",
                                border: '1px solid black',
                                objectFit: 'cover', // maintains aspect ratio while covering the box
                            }}
                        />
                    </Box>

                    <Box
                        sx={{
                            width: "100px",
                            height: "100px",
                            borderRadius: "10%",
                            backgroundColor: "#D9D9D9",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            mb: 1, // margin-bottom to add space between the two boxes
                            mr: 2, // increased margin-right to ensure the boxes don't overlap with the image
                        }}>
                        <img
                            src={selectedRow.imageUrl}
                            alt={selectedRow.info}
                            style={{
                                width: "100%", // make the image responsive to the box size
                                height: "100%", // make the image responsive to the box size
                                borderRadius: "10%",
                                border: '1px solid black',
                                objectFit: 'cover', // maintains aspect ratio while covering the box
                            }}
                        />
                    </Box>
                    </Grid>
                    <Grid item xs={7} sx={{ display: 'flex', alignItems: 'center' }}>
                        <img
                        src={selectedRow.imageUrl}
                        alt={selectedRow.info}
                        style={{
                            maxWidth: '100%',
                            height: 'auto',
                            border: '1px solid black',
                            borderRadius: '10%',
                            gridRow: 'span 2', // make the image span two rows
                        }}
                        />
                    </Grid>
                    </Grid>

                    <Grid container spacing={1} ml={3} mt={2}>
                        <Grid item xs={4}>
                            <Typography variant="body2"><strong>Colour</strong></Typography>
                        </Grid>
                        <Grid item xs={8}>
                            <Box display="flex" flexDirection="column" alignItems="flex-end">
                                {selectedRow.color.split(',').map((color, index) => (
                                    <Box key={index} display="flex" alignItems="center" mb={1}>
                                        <Typography variant="body2" sx={{ textAlign: 'right', color: "black" }}>
                                            {color.trim()}
                                        </Typography>
                                        <Box
                                            sx={{
                                                width: "20px",
                                                height: "20px",
                                                borderRadius: "50%",
                                                backgroundColor: getColorHex(color.trim()),
                                                border: "1px solid grey", // Black border
                                                display: "inline-block",
                                                ml: 1,
                                            }}
                                        />
                                    </Box>
                                ))}
                            </Box>
                        </Grid>
                    </Grid>
                  </>
                )}
              </Box>
              <Box mb={2} ml={10}>
                <Box display="flex" alignItems="center">
                  <Box
                    sx={{
                      width: "35px",
                      height: "35px",
                      borderRadius: "50%",
                      backgroundColor: "#D9D9D9",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}>
                    <LocalLaundryServiceIcon fontSize="small" sx={{ color: "black" }} />
                  </Box>
                  <Typography variant="h6" gutterBottom ml={2} mt={1} sx={{ fontWeight: 'bold', color: "black" }}>Material & Care</Typography>
                </Box>
                {selectedRow && (
                  <>
                    <Grid container spacing={1} ml={3} mt={0.25}>
                      <Grid item xs={4}><Typography variant="body2"><strong>Material</strong></Typography></Grid>
                      <Grid item xs={8}><Typography variant="body2" sx={{ textAlign: 'right', color: "black" }}>{selectedRow.material}</Typography></Grid>
                    </Grid>
                    <Grid container spacing={1} ml={3} mt={0.25}>
                      <Grid item xs={4}><Typography variant="body2"><strong>Care Instructions</strong></Typography></Grid>
                      <Grid item xs={8}><Typography variant="body2" sx={{ textAlign: 'right', color: "black" }}>{selectedRow.care}</Typography></Grid>
                    </Grid>
                  </>
                )}
              </Box>
               <Box mb={2} ml={10}>
                <Box display="flex" alignItems="center">
                  <Box
                    sx={{
                      width: "35px",
                      height: "35px",
                      borderRadius: "50%",
                      backgroundColor: "#D9D9D9",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}>
                    <TableChartIcon fontSize="small" sx={{ color: "black" }} />
                  </Box>
                  <Typography variant="h6" gutterBottom ml={2} mt={3} sx={{ fontWeight: 'bold', color: "black" }}>Size & Fitting</Typography>
                </Box>
                {selectedRow && (
                  <>
                    <Grid container spacing={1} ml={3} mt={0.25}>
                      <Grid item xs={4}><Typography variant="body2"><strong>Size</strong></Typography></Grid>
                      <Grid item xs={8}><Typography variant="body2" sx={{ textAlign: 'right', color: "black" }}>{selectedRow.size}</Typography></Grid>
                    </Grid>
                    <Grid container spacing={1} ml={3} mt={0.25}>
                      <Grid item xs={4}><Typography variant="body2"><strong>Fit-Type</strong></Typography></Grid>
                      <Grid item xs={8}><Typography variant="body2" sx={{ textAlign: 'right', color: "black" }}>{selectedRow.fitType}</Typography></Grid>
                    </Grid>
                  </>
                )}
              </Box>
              <Box mb={2} ml={10}>
                <Box display="flex" alignItems="center">
                  <Box
                    sx={{
                      width: "35px",
                      height: "35px",
                      borderRadius: "50%",
                      backgroundColor: "#D9D9D9",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}>
                    <LocalLaundryServiceIcon fontSize="small" sx={{ color: "black" }} />
                  </Box>
                  <Typography variant="h6" gutterBottom ml={2} mt={1} sx={{ fontWeight: 'bold', color: "black" }}>Quantity</Typography>
                </Box>
                {selectedRow ? (
                  selectedRow.category === 'Clothing' ? (
                    selectedRow.subcategory === 'Bottom' ? (
                      <>
                        <Grid container spacing={1} ml={3} mt={0.25}>
                          <Grid item xs={4}><Typography variant="body2"><strong>28</strong></Typography></Grid>
                          <Grid item xs={8}><Typography variant="body2" sx={{ textAlign: 'right', color: "black" }}>{selectedRow.Q28}</Typography></Grid>
                        </Grid>
                        <Grid container spacing={1} ml={3} mt={0.25}>
                          <Grid item xs={4}><Typography variant="body2"><strong>30</strong></Typography></Grid>
                          <Grid item xs={8}><Typography variant="body2" sx={{ textAlign: 'right', color: "black" }}>{selectedRow.Q30}</Typography></Grid>
                        </Grid>
                        <Grid container spacing={1} ml={3} mt={0.25}>
                          <Grid item xs={4}><Typography variant="body2"><strong>32</strong></Typography></Grid>
                          <Grid item xs={8}><Typography variant="body2" sx={{ textAlign: 'right', color: "black" }}>{selectedRow.Q32}</Typography></Grid>
                        </Grid>
                        <Grid container spacing={1} ml={3} mt={0.25}>
                          <Grid item xs={4}><Typography variant="body2"><strong>34</strong></Typography></Grid>
                          <Grid item xs={8}><Typography variant="body2" sx={{ textAlign: 'right', color: "black" }}>{selectedRow.Q34}</Typography></Grid>
                        </Grid>
                        <Grid container spacing={1} ml={3} mt={0.25}>
                          <Grid item xs={4}><Typography variant="body2"><strong>36</strong></Typography></Grid>
                          <Grid item xs={8}><Typography variant="body2" sx={{ textAlign: 'right', color: "black" }}>{selectedRow.Q36}</Typography></Grid>
                        </Grid>
                      </>
                    ) : (
                      <>
                        <Grid container spacing={1} ml={3} mt={0.25}>
                          <Grid item xs={4}><Typography variant="body2"><strong>XS</strong></Typography></Grid>
                          <Grid item xs={8}><Typography variant="body2" sx={{ textAlign: 'right', color: "black" }}>{selectedRow.xsq}</Typography></Grid>
                        </Grid>
                        <Grid container spacing={1} ml={3} mt={0.25}>
                          <Grid item xs={4}><Typography variant="body2"><strong>S</strong></Typography></Grid>
                          <Grid item xs={8}><Typography variant="body2" sx={{ textAlign: 'right', color: "black" }}>{selectedRow.sq}</Typography></Grid>
                        </Grid>
                        <Grid container spacing={1} ml={3} mt={0.25}>
                          <Grid item xs={4}><Typography variant="body2"><strong>M</strong></Typography></Grid>
                          <Grid item xs={8}><Typography variant="body2" sx={{ textAlign: 'right', color: "black" }}>{selectedRow.mq}</Typography></Grid>
                        </Grid>
                        <Grid container spacing={1} ml={3} mt={0.25}>
                          <Grid item xs={4}><Typography variant="body2"><strong>L</strong></Typography></Grid>
                          <Grid item xs={8}><Typography variant="body2" sx={{ textAlign: 'right', color: "black" }}>{selectedRow.lq}</Typography></Grid>
                        </Grid>
                        <Grid container spacing={1} ml={3} mt={0.25}>
                          <Grid item xs={4}><Typography variant="body2"><strong>XL</strong></Typography></Grid>
                          <Grid item xs={8}><Typography variant="body2" sx={{ textAlign: 'right', color: "black" }}>{selectedRow.xlq}</Typography></Grid>
                        </Grid>
                      </>
                    )
                  ) : selectedRow.category === 'Footwear' ? (
                    <>
                      <Grid container spacing={1} ml={3} mt={0.25}>
                        <Grid item xs={4}><Typography variant="body2"><strong>7</strong></Typography></Grid>
                        <Grid item xs={8}><Typography variant="body2" sx={{ textAlign: 'right', color: "black" }}>{selectedRow.size7}</Typography></Grid>
                      </Grid>
                      <Grid container spacing={1} ml={3} mt={0.25}>
                        <Grid item xs={4}><Typography variant="body2"><strong>8</strong></Typography></Grid>
                        <Grid item xs={8}><Typography variant="body2" sx={{ textAlign: 'right', color: "black" }}>{selectedRow.size8}</Typography></Grid>
                      </Grid>
                      <Grid container spacing={1} ml={3} mt={0.25}>
                        <Grid item xs={4}><Typography variant="body2"><strong>9</strong></Typography></Grid>
                        <Grid item xs={8}><Typography variant="body2" sx={{ textAlign: 'right', color: "black" }}>{selectedRow.size9}</Typography></Grid>
                      </Grid>
                      <Grid container spacing={1} ml={3} mt={0.25}>
                        <Grid item xs={4}><Typography variant="body2"><strong>10</strong></Typography></Grid>
                        <Grid item xs={8}><Typography variant="body2" sx={{ textAlign: 'right', color: "black" }}>{selectedRow.size10}</Typography></Grid>
                      </Grid>
                      <Grid container spacing={1} ml={3} mt={0.25}>
                        <Grid item xs={4}><Typography variant="body2"><strong>11</strong></Typography></Grid>
                        <Grid item xs={8}><Typography variant="body2" sx={{ textAlign: 'right', color: "black" }}>{selectedRow.size11}</Typography></Grid>
                      </Grid>
                    </>
                  ) : (
                    <Grid container spacing={1} ml={3} mt={0.25}>
                      <Grid item xs={4}><Typography variant="body2"><strong>Total Quantity</strong></Typography></Grid>
                      <Grid item xs={8}><Typography variant="body2" sx={{ textAlign: 'right', color: "black" }}>{selectedRow.quantity}</Typography></Grid>
                    </Grid>
                  )
                ) : (
                  <Typography variant="body2" sx={{ textAlign: 'center', color: "grey" }}>No product selected.</Typography>
                )}
              </Box>


            </Grid>
          </Grid>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} sx={{backgroundColor: "#C0A888"}} variant="contained">Edit</Button>
        <Button onClick={handleClose} color="error" variant="contained">Delete</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ProductDialog;
