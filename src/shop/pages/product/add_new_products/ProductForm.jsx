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
  InputAdornment
} from '@mui/material';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import AddIcon from '@mui/icons-material/Add';

const ProductForm = () => {
  const [sizes, setSizes] = useState([]);
  const [gender, setGender] = useState('Women');
  const [basePrice, setBasePrice] = useState('');
  const [quantity, setQuantity] = useState({});
  const [discount, setDiscount] = useState('');
  const [discountType, setDiscountType] = useState('');
  const [colorVariants, setColorVariants] = useState([{ color: 'Yellow' }, { color: 'Red' }, { color: 'White' }]);
  const [status, setStatus] = useState('Active');
  const [formData, setFormData] = useState({
    category: '',
    subcategory: '',
    images: []
  });

  useEffect(() => {
    const saveDraft = () => {
      localStorage.setItem('productFormDraft', JSON.stringify({
        sizes, gender, basePrice, quantity, discount, discountType, status, formData
      }));
      console.log('Draft saved:', {
        sizes, gender, basePrice, quantity, discount, discountType, status, formData
      });
    };

    const timer = setTimeout(saveDraft, 1000);

    return () => clearTimeout(timer);
  }, [sizes, gender, basePrice, quantity, discount, discountType, status, formData]);

  const handleSizeChange = (event, newSizes) => {
    setSizes(newSizes);
  };

  const handleQuantityChange = (size, value) => {
    setQuantity({ ...quantity, [size]: value });
  };

  const handleGenderChange = (event, newGender) => {
    if (newGender !== null) {
      setGender(newGender);
    }
  };

  const handleAddImage = (event) => {
    const newImages = [...formData.images];
    newImages.push(URL.createObjectURL(event.target.files[0]));
    setFormData({ ...formData, images: newImages });
  };

  const handleAddVariant = () => {
    const newVariants = [...colorVariants];
    newVariants.push({ color: '' });
    setColorVariants(newVariants);
  };

  const handleDeleteVariant = (index) => {
    const newVariants = [...colorVariants];
    newVariants.splice(index, 1);
    setColorVariants(newVariants);
  };

  const handleDiscountChange = (event, newDiscountType) => {
    if (newDiscountType !== null) {
      setDiscountType(newDiscountType);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear sizes and quantity when category changes
    if (name === 'category' || name === 'subcategory') {
      setSizes([]);
      setQuantity({});
    }
  };

  const getSizeOptions = () => {
    if (formData.category === 'Clothing' && formData.subcategory === 'Bottom') {
      return ['28', '30', '32', '34', '36'];
    }
    switch (formData.category) {
      case 'Clothing':
        return ['XS', 'S', 'M', 'L', 'XL'];
      case 'Footwear':
        return ['7', '8', '9', '10', '11'];
      case 'Accessories':
        return ['One Size'];
      default:
        return [];
    }
  };

  return (
    <Box p={3} bgcolor="white" borderRadius={3} boxShadow={1}>
      <Grid container spacing={2}>
        {/* Left Column: Product Info, Pricing, Material & Care, Addtional Info */}
        <Grid item xs={12} md={6}>
          <Box p={2} sx={{ border: null, borderRadius: 3, boxShadow: 1, marginBottom: 2 }}>
          <Typography variant="h5" mb={2}>General Information</Typography>
            <TextField
              // label="Product Code"
              fullWidth
              variant="outlined"
              value="[Product Code]"
              InputProps={{ readOnly: true }}
              helperText="Code will be generated automatically"
              sx={{ mb: 2, color: "#F5F4F4" }} 
            />

            <TextField
              label="Product Name"
              fullWidth
              variant="outlined"
              sx={{ mb: 2, color: "#F5F4F4"}} 
            />
            <TextField
              label="Category"
              fullWidth
              variant="outlined"
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              sx={{ mb: 2 }} 
            />
            <TextField
              label="Sub Category"
              fullWidth
              variant="outlined"
              name="subcategory"
              value={formData.subcategory}
              onChange={handleInputChange}
              sx={{ mb: 2, color: "#F5F4F4" }} 
            />
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
            <TextField
              label="Occasion"
              fullWidth
              variant="outlined"
              sx={{ mb: 2, color: "#F5F4F4" }} 
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

        {/* Right Column: Image Upload, Color Variant, Status, Size & Gender */}
        <Grid item xs={12} md={6}>
          <Box p={2} sx={{ border: null, borderRadius: 3, boxShadow: 1, marginBottom: 2 }}>
            <Typography variant="h5" mb={2}>Color Variants</Typography>
            {colorVariants.map((variant, index) => (
              <Box key={index} display="flex" alignItems="center" mb={2}>
                <TextField
                  label={`Color Variant ${index + 1}`}
                  fullWidth
                  variant="outlined"
                  sx={{ mr: 1 }}
                />
                <IconButton onClick={() => handleDeleteVariant(index)}>
                  <DeleteIcon />
                </IconButton>
              </Box>
            ))}
            <Button variant="contained" onClick={handleAddVariant} startIcon={<AddIcon />} sx={{backgroundColor: "#C0A888",}}>
              Add Color Variant
            </Button>
          </Box>

          <Box p={2} sx={{ border: null, borderRadius: 3, boxShadow: 1, marginBottom: 2}}>
            <Typography variant="h5" mb={2}>Size & Gender</Typography>
            <ToggleButtonGroup
              value={sizes}
              onChange={handleSizeChange}
              aria-label="sizes"
              sx={{ mb: 2 }}
            >
              {getSizeOptions().map((size) => (
                <ToggleButton key={size} value={size}>
                  {size}
                </ToggleButton>
              ))}
            </ToggleButtonGroup>
            {sizes.length > 0 && (
              <Box>
                <Typography variant="h6" mb={1}>Quantity</Typography>
                {sizes.map((size) => (
                  <TextField
                    key={size}
                    label={size}
                    variant="outlined"
                    type="number"
                    value={quantity[size] || ''}
                    onChange={(e) => handleQuantityChange(size, e.target.value)}
                    fullWidth
                    inputProps={{min:1}}
                    sx={{ mb: 2, color: "#F5F4F4", width: '80px'}} 
                  />
                ))}
              </Box>
            )}
            <Typography variant="h6" mb={1}>Gender</Typography>
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

          <Box p={2} sx={{ border: null, borderRadius: 3, boxShadow: 1, marginBottom: 2 }}>
            <Typography variant="h5">Status</Typography>
            <Select
              fullWidth
              variant="outlined"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              sx={{ mt: 2 }} 
            >
              <MenuItem value="Active">Active</MenuItem>
              <MenuItem value="Inactive">Inactive</MenuItem>
            </Select>
          </Box>

          <Box p={2} sx={{ border: null, borderRadius: 3, boxShadow: 1, marginBottom: 2, marginTop: 2}}>
            <Typography variant="h5" mb={2}>Product Images</Typography>
            <Button
              variant="contained"
              component="label"
              startIcon={<AddPhotoAlternateIcon />}
              sx={{ mb: 2, backgroundColor: "#C0A888", }}
            >
              Upload Image
              <input type="file" hidden onChange={handleAddImage} />
            </Button>
            <Grid container spacing={2}>
              {formData.images.map((image, index) => (
                <Grid item xs={4} key={index}>
                  <Box sx={{ position: 'relative' }}>
                    <img src={image} alt={`Product ${index}`} width="100%" height="auto" />
                    <IconButton
                      onClick={() => {
                        const newImages = [...formData.images];
                        newImages.splice(index, 1);
                        setFormData({ ...formData, images: newImages });
                      }}
                      sx={{ position: 'absolute', top: 8, right: 8 }}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
      </Grid>
      <Button
        variant="contained"
        color="primary"
        size="large"
        fullWidth
        startIcon={<SaveIcon />}
        onClick={() => console.log('Form submitted:', {
          sizes, gender, basePrice, quantity, discount, discountType, status, formData
        })}
        sx={{ mt: 2, backgroundColor: "#C0A888", }}
      >
        Save Product
      </Button>
    </Box>
  );
};

export default ProductForm;
