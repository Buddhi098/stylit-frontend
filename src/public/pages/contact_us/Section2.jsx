import React from "react";
import {
  Grid,
  Box,
  Typography,
  TextField,
  Button,
  Stack,
  styled,
  Divider,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

const CustomTextField = styled(TextField)(({ theme }) => ({
  "& .MuiFilledInput-root": {
    backgroundColor: "rgba(189, 172, 151 , 0.2)", // Change this to your desired filled color
    borderRadius: "4px",
  },
  "& .MuiFilledInput-underline:before, & .MuiFilledInput-underline:after": {
    borderBottom: "none",
  },
  "& .MuiFilledInput-root.Mui-focused": {
    backgroundColor: "#e0e0e0", // Change this to your desired focused filled color
  },
}));

const Section2 = () => {
  return (
    <Box sx={{ padding: 4 }}>
      <Grid container spacing={4}>
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRight: { xs: 0, md: "1px solid #e0e0e0" },
          }}
          direction="column"
        >
          <Stack
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography variant="h6">
              <LocationOnIcon />
            </Typography>
            <Typography variant="body2_nunito">Address</Typography>
            <Typography variant="body2_nunito">Surkhet, NP12</Typography>
            <Typography variant="body2_nunito">Birendranagar 06</Typography>
          </Stack>

          <Stack
            mt={4}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography variant="h6">
              <PhoneIcon />
            </Typography>
            <Typography variant="body2_nunito">Phone</Typography>
            <Typography variant="body2_nunito">+0098 9893 5647</Typography>
            <Typography variant="body2_nunito">+0096 3434 5678</Typography>
          </Stack>

          <Stack
            mt={4}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography variant="h6">
              <EmailIcon />
            </Typography>
            <Typography variant="body2_nunito">Email</Typography>
            <Typography variant="body2_nunito">codinglab@gmail.com</Typography>
            <Typography variant="body2_nunito">
              info.codinglab@gmail.com
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} md={8}>
          <Stack spacing={1}>
            <Typography variant="subtitle_nunito">Send us a message</Typography>
            <Typography variant="body2_nunito">
              If you have any work from me or any types of queries related to my
              tutorial, you can send me a message from here. It’s my pleasure to
              help you.
            </Typography>
          </Stack>
          <Box component="form">
            <CustomTextField
              variant="filled"
              size="small"
              fullWidth
              label={<Typography variant="body2_nunito">Enter your name</Typography>}
              margin="normal"
            />
            <CustomTextField
              variant="filled"
              size="small"
              fullWidth
              label={<Typography variant="body2_nunito">Enter your email</Typography>}
              margin="normal"
            />
            <CustomTextField
              variant="filled"
              size="small"
              fullWidth
              label= {<Typography variant="body2_nunito">Enter your subject</Typography>}
              multiline
              rows={4}
              margin="normal"
            />
            <Button
              variant="contained"
              color="primary"
              sx={{ borderRadius: 0 , marginTop:2 }}
            >
              <Typography variant="body2_nunito"> Send Now</Typography>
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Section2;
