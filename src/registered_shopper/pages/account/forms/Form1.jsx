import React from "react";
import {
  TextField,
  Button,
  RadioGroup,
  FormControlLabel,
  Radio,
  Grid,
  Box,
  Stack,
  Typography,
  Divider,
} from "@mui/material";
const Form1 = () => {
  return (
    <Box component="form" sx={{ mt: 2, ml: "16px" }} height={"50vh"}>
      <Stack spacing={1} marginBottom={2}>
        <Typography variant="subtitle_nunito" gutterBottom>
          Account
        </Typography>
        <Divider />
        <Typography variant="body1_nunito" gutterBottom>
          Contact Information
        </Typography>
      </Stack>
      <Grid container spacing={2}> 
        <Stack
          width={"90%"}
          direction={"row"}
          spacing={2}
          sx={{ marginBottom: 3, marginTop: 4 , marginLeft: 2}}
        >
          <Grid item xs={6}>
            <TextField
              variant="filled"
              fullWidth
              size="small"
              label="First Name"
              required
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              variant="filled"
              fullWidth
              size="small"
              label="Last Name"
              required
            />
          </Grid>
        </Stack>
        <Stack width={"90%"} spacing={3} marginLeft={2}>
          <Grid item xs={12}>
            <TextField
              variant="filled"
              fullWidth
              size="small"
              label="Email"
              type="email"
              disabled
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="filled"
              fullWidth
              size="small"
              label="Password"
              type="password"
            />
          </Grid>
          <Grid item xs={12}>
            <RadioGroup
              row
              aria-label="styles"
              name="styles"
              defaultValue="Womenswear"
            >
              <FormControlLabel
                value="Womenswear"
                control={<Radio />}
                label="Womenswear"
              />
              <FormControlLabel
                value="Menswear"
                control={<Radio />}
                label="Menswear"
              />
              <FormControlLabel value="Both" control={<Radio />} label="Both" />
            </RadioGroup>
          </Grid>
        </Stack>

        <Stack sx={{ marginTop: 2 }} marginLeft={2}>
          <Grid item xs={12}>
            <Button
              color="primary"
              sx={{
                color: "#000000",
                border: "2px solid #999999",
                borderRadius: "0",
                "&:hover": {
                  backgroundColor: "#000000",
                  color: "#ffffff",
                  border: "2px solid #ffffff",
                },
              }}
            >
              <Typography variant="body2_nunito">Save Changes</Typography>
            </Button>
          </Grid>
        </Stack>
      </Grid>
    </Box>
  );
};

export default Form1;
