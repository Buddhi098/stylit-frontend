import React, { useState, useEffect } from 'react';
import { 
  Box, 
  TextField, 
  Typography, 
  Button, 
  Grid, 
  Select, 
  MenuItem, 
  ToggleButtonGroup, 
  ToggleButton, 
  IconButton,
  InputAdornment,
  InputLabel,
  FormControl
} from '@mui/material';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import AddIcon from '@mui/icons-material/Add';
import { Autocomplete, Chip } from '@mui/material';


const ProductForm = () => {
  const [gender, setGender] = useState('Women');
  const [basePrice, setBasePrice] = useState('');
  const [discount, setDiscount] = useState('');
  const [discountType, setDiscountType] = useState('');
  const [formData, setFormData] = useState({
    category: '',
    subcategory: '',
    productImages: [],
    sizeChartImages: []
  });

  const [category, setCategory] = useState('');
  const [subcategory, setSubcategory] = useState('');
  const [occasions, setOccasions] = useState([]);

  const [variantBoxes, setVariantBoxes] = useState([
    {
      colorVariant: '',
      sizeQuantityChart: [{ size: '', quantity: '' }],
      sizeChartImage: null,
      status: 'Active'
    }
  ]);

  useEffect(() => {
    const saveDraft = () => {
      localStorage.setItem('productFormDraft', JSON.stringify({
        gender, basePrice, discount, discountType, formData, variantBoxes
      }));
      console.log('Draft saved:', {
        gender, basePrice, discount, discountType, formData, variantBoxes
      });
    };

    const timer = setTimeout(saveDraft, 1000);

    return () => clearTimeout(timer);
  }, [gender, basePrice, discount, discountType, formData, variantBoxes]);

  const categories = [
    'Tops', 'Bottoms', 'Dresses', 'Suits', 'Outerwear', 'Footwear', 'Bags', 'Jewellery', 'Accessories'
  ];

  const subcategories = {
    Tops: ['T shirts', 'Shirts', 'Blouses', 'Crop Tops', 'Sweaters'],
    Bottoms: ['Jeans', 'Leggings', 'Skirts', 'Shorts', 'Trousers'],
    Dresses: ['Maxi Dresses', 'Midi Dresses', 'Mini Dresses'],
    Suits: ['Two-Piece Suits', 'Jumpsuits'],
    Outerwear: ['Jackets', 'Coats', 'Blazers', 'Cardigans'],
    Footwear: ['Sneakers', 'Shoes', 'Sandals', 'Heels'],
    Bags: ['Handbags', 'Totes', 'Backpacks', 'Belt Bags'],
    Jewellery: ['Necklaces', 'Earrings', 'Rings', 'Bracelets', 'Anklets', 'Watches'],
    Accessories: ['Belts', 'Scarves', 'Hats', 'Gloves']
  };

  const handleCategoryChange = (event) => {
    const newCategory = event.target.value;
    setCategory(newCategory);
    setSubcategory('');
  };

  const handleSubcategoryChange = (event) => {
    setSubcategory(event.target.value);
  };

  const handleGenderChange = (event, newGender) => {
    if (newGender !== null) {
      setGender(newGender);
    }
  };

  const handleAddProductImage = (event) => {
    const newImages = [...formData.productImages];
    newImages.push(URL.createObjectURL(event.target.files[0]));
    setFormData({ ...formData, productImages: newImages });
  };
  
  const handleAddSizeChartImage = (boxIndex, event) => {
    const newVariantBoxes = [...variantBoxes];
    newVariantBoxes[boxIndex].sizeChartImage = URL.createObjectURL(event.target.files[0]);
    setVariantBoxes(newVariantBoxes);
  };

  const handleDiscountChange = (event, newDiscountType) => {
    if (newDiscountType !== null) {
      setDiscountType(newDiscountType);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDeleteVariantBox = (index) => {
    setVariantBoxes((prevBoxes) => prevBoxes.filter((_, i) => i !== index));
  };

  const addVariantBox = () => {
    setVariantBoxes([...variantBoxes, {
      colorVariant: '',
      sizeQuantityChart: [{ size: '', quantity: '' }],
      sizeChartImage: null,
      status: 'Active'
    }]);
  };

  const updateVariantBox = (index, field, value) => {
    const newVariantBoxes = [...variantBoxes];
    newVariantBoxes[index][field] = value;
    setVariantBoxes(newVariantBoxes);
  };

  const addSizeQuantityRow = (boxIndex) => {
    const newVariantBoxes = [...variantBoxes];
    newVariantBoxes[boxIndex].sizeQuantityChart.push({ size: '', quantity: '' });
    setVariantBoxes(newVariantBoxes);
  };

  return (
    <Box p={3} bgcolor="white" borderRadius={3} boxShadow={1}>
      <Grid container spacing={2}>
        {/* Left Column: Product Info, Pricing, Material & Care, Additional Info */}
        <Grid item xs={12} md={6}>
          <Box p={2} sx={{ border: null, borderRadius: 3, boxShadow: 1, marginBottom: 2 }}>
            <Typography variant="h5" mb={2}>General Information</Typography>
            <TextField
              label="SKU"
              fullWidth
              variant="outlined"
              sx={{ mb: 2, color: "#F5F4F4" }} 
            />
            <TextField
              label="Product Name"
              fullWidth
              variant="outlined"
              sx={{ mb: 2, color: "#F5F4F4"}} 
            />
            <FormControl fullWidth variant="outlined" sx={{ mb: 2 }}>
              <InputLabel>Category</InputLabel>
              <Select
                value={category}
                onChange={handleCategoryChange}
                label="Category"
              >
                {categories.map((cat) => (
                  <MenuItem key={cat} value={cat}>{cat}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl fullWidth variant="outlined" sx={{ mb: 2 }}>
              <InputLabel>Sub Category</InputLabel>
              <Select
                value={subcategory}
                onChange={handleSubcategoryChange}
                label="Sub Category"
                disabled={!category}
              >
                {category && subcategories[category].map((subcat) => (
                  <MenuItem key={subcat} value={subcat}>{subcat}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              label="Brand"
              fullWidth
              variant="outlined"
              sx={{ mb: 2, color: "#F5F4F4" }} 
            />
            <TextField
              label="Description of the Product"
              fullWidth
              variant="outlined"
              multiline
              rows={4}
              sx={{color: "#F5F4F4" }}
            />
          </Box>

          <Box p={2} sx={{border: null, borderRadius: 3, boxShadow: 1, marginBottom: 2}}>
            <Typography variant="h5" mb={2}>Pricing</Typography>
            <TextField
              label="Base Price"
              fullWidth
              variant="outlined"
              value={basePrice}
              onChange={(e) => setBasePrice(e.target.value)}
              InputProps={{ startAdornment: <InputAdornment position="start">$</InputAdornment> }}
              sx={{ mb: 2, color: "#F5F4F4" }} 
            />
            <TextField
              label="Discount"
              fullWidth
              variant="outlined"
              value={discount}
              onChange={(e) => setDiscount(e.target.value)}
              InputProps={{ endAdornment: <InputAdornment position="end">%</InputAdornment> }}
              sx={{ mb: 2, color: "#F5F4F4" }} 
            />
            <Typography variant="h6" mb={1}>Discount Type</Typography>
            <ToggleButtonGroup
              value={discountType}
              exclusive
              onChange={handleDiscountChange}
              aria-label="discount type"
            >
              <ToggleButton value="No Discount">No Discount</ToggleButton>
              <ToggleButton value="Seasonal Discounts">Seasonal Discounts</ToggleButton>
              <ToggleButton value="Percentage Discount">Percentage Discount</ToggleButton>
            </ToggleButtonGroup>
          </Box>

          <Box p={2} sx={{ border: null, borderRadius: 3, boxShadow: 1, marginBottom: 2 }}>
            <Typography variant="h5" mb={2}>Material & Care Instructions</Typography>
            <TextField
              label="Material"
              fullWidth
              variant="outlined"
              sx={{ mb: 2, color: "#F5F4F4" }} 
            />
            <TextField
              label="Pattern"
              fullWidth
              variant="outlined"
              sx={{ mb: 2, color: "#F5F4F4" }} 
            />
            <TextField
              label="Care Instructions"
              fullWidth
              variant="outlined"
              multiline
              rows={2}
              sx={{ mb: 2, color: "#F5F4F4" }} 
            />
          </Box>

          <Box p={2} sx={{ border: null, borderRadius: 3, boxShadow: 1, marginBottom: 2 }}>
            <Typography variant="h5" mb={2}>Additional Information</Typography>
            <Autocomplete
              multiple
              id="occasions"
              options={['Casual Wear', 'Formal Wear', 'Party Wear', 'Activewear']}
              value={occasions}
              onChange={(event, newValue) => {
                setOccasions(newValue);
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="outlined"
                  label="Occasions"
                  placeholder="Select occasions"
                />
              )}
              renderTags={(value, getTagProps) =>
                value.map((option, index) => (
                  <Chip variant="outlined" label={option} {...getTagProps({ index })} />
                ))
              }
              sx={{ mb: 2 }}
            />
            <TextField
              label="Season"
              fullWidth
              variant="outlined"
              sx={{ mb: 2, color: "#F5F4F4" }} 
            />
            <TextField
              label="Age Group"
              fullWidth
              variant="outlined"
              multiline
              sx={{ mb: 2, color: "#F5F4F4" }}
            />
          </Box>
        </Grid>

        {/* Right Column: Variant Boxes, Gender */}
        <Grid item xs={12} md={6}>
        {variantBoxes.map((box, boxIndex) => (
            <Box key={boxIndex} p={2} sx={{ border: null, borderRadius: 3, boxShadow: 1, marginBottom: 2 }}>
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
              <Typography variant="h5">Variant {boxIndex + 1}</Typography>
              <IconButton onClick={() => handleDeleteVariantBox(boxIndex)}>
                <DeleteIcon />
              </IconButton>
            </Box>
              <TextField
                label="Color Variant"
                fullWidth
                variant="outlined"
                value={box.colorVariant}
                onChange={(e) => updateVariantBox(boxIndex, 'colorVariant', e.target.value)}
                sx={{ mb: 3 }}
              />
              
              <Typography variant="h6" mb={2}>Size & Quantity Chart</Typography>
              {box.sizeQuantityChart.map((row, rowIndex) => (
                <Box key={rowIndex} sx={{ display: 'flex', mb: 2 }}>
                  <TextField
                    label="Size"
                    value={row.size}
                    onChange={(e) => {
                      const newChart = [...box.sizeQuantityChart];
                      newChart[rowIndex].size = e.target.value;
                      updateVariantBox(boxIndex, 'sizeQuantityChart', newChart);
                    }}
                    sx={{ mr: 2, flexGrow: 1 }}
                  />
                  <TextField
                    label="Quantity"
                    type="number"
                    value={row.quantity}
                    inputProps={{min:1}}
                    onChange={(e) => {
                      const newChart = [...box.sizeQuantityChart];
                      newChart[rowIndex].quantity = e.target.value;
                      updateVariantBox(boxIndex, 'sizeQuantityChart', newChart);
                    }}
                    sx={{ flexGrow: 1 }}
                  />
                </Box>
              ))}
              <Button 
                onClick={() => addSizeQuantityRow(boxIndex)}
                variant="outlined"
                sx={{ mb: 3, color: "#C0A888", border: "1px #C0A888 solid"}}
              >
                Add Size/Quantity
              </Button>

              <Typography variant="h6" mb={2}>Size Chart Image</Typography>
                <Button
                  variant="contained"
                  component="label"
                  startIcon={<AddPhotoAlternateIcon />}
                  sx={{ mb: 3, backgroundColor: "#C0A888" }}
                >
                  Upload Size Chart
                  <input 
                    type="file" 
                    hidden 
                    onChange={(e) => handleAddSizeChartImage(boxIndex, e)} 
                  />
                </Button>
                <Grid container spacing={2}>
                  {box.sizeChartImage && (
                    <Grid item xs={4}>
                      <Box sx={{ position: 'relative' }}>
                        <img src={box.sizeChartImage} alt="Size Chart" width="100%" height="auto" />
                        <IconButton
                          onClick={() => {
                            const newVariantBoxes = [...variantBoxes];
                            newVariantBoxes[boxIndex].sizeChartImage = null;
                            setVariantBoxes(newVariantBoxes);
                          }}
                          sx={{ position: 'absolute', top: 8, right: 8 }}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </Box>
                    </Grid>
                  )}
                </Grid>
                <Typography variant="h6" mb={2} mt={2}>Product Images</Typography>
                <Button
                  variant="contained"
                  component="label"
                  startIcon={<AddPhotoAlternateIcon />}
                  sx={{ mb: 2, backgroundColor: "#C0A888", }}
                >
                  Upload Image
                  <input type="file" hidden onChange={handleAddProductImage} />
                </Button>
                <Grid container spacing={2}>
                  {formData.productImages.map((image, index) => (
                    <Grid item xs={4} key={index}>
                      <Box sx={{ position: 'relative' }}>
                        <img src={image} alt={`Product ${index}`} width="100%" height="auto" />
                        <IconButton
                          onClick={() => {
                            const newImages = [...formData.productImages];
                            newImages.splice(index, 1);
                            setFormData({ ...formData, productImages: newImages });
                          }}
                          sx={{ position: 'absolute', top: 8, right: 8 }}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              <Typography variant="h6" mb={2} mt={2}>Status</Typography>
              <ToggleButtonGroup
                value={box.status}
                exclusive
                onChange={(e, newStatus) => {
                  if (newStatus !== null) {
                    updateVariantBox(boxIndex, 'status', newStatus);
                  }
                }}
                aria-label="status"
                sx={{ mb: 3 }}
              >
                <ToggleButton value="Active">Active</ToggleButton>
                <ToggleButton value="Inactive">Inactive</ToggleButton>
              </ToggleButtonGroup>
            </Box>
          ))}

          <Button 
            onClick={addVariantBox}
            variant="contained"
            startIcon={<AddIcon />}
            sx={{ mb: 2, backgroundColor: "#C0A888" }}
          >
            Add Variant Box
          </Button>

          <Box p={2} sx={{ border: null, borderRadius: 3, boxShadow: 1, marginBottom: 2}}>
            <Typography variant="h5" mb={2}>Gender</Typography>
            <ToggleButtonGroup
              value={gender}
              exclusive
              onChange={handleGenderChange}
              aria-label="gender"
              sx={{ mb: 2 }}
            >
              <ToggleButton value="Women">Women</ToggleButton>
              <ToggleButton value="Men">Men</ToggleButton>
              <ToggleButton value="Unisex">Unisex</ToggleButton>
            </ToggleButtonGroup>
          </Box>

          {/* <Box p={2} sx={{ border: null, borderRadius: 3, boxShadow: 1, marginBottom: 2, marginTop: 2}}>
          </Box> */}
        </Grid>
      </Grid>
      <Button
        variant="contained"
        color="primary"
        size="large"
        fullWidth
        startIcon={<SaveIcon />}
        onClick={() => console.log('Form submitted:', {
           gender, basePrice, discount, discountType, formData
        })}
        sx={{ mt: 2, backgroundColor: "#C0A888", }}
      >
        Save Product
      </Button>
    </Box>
  );
};

export default ProductForm;
