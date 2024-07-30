import React, { useState } from "react";
import {
  Container,
  Grid,
  FormControlLabel,
  Typography,
  Radio,
  RadioGroup,
  Stack,
  Box,
} from "@mui/material";
import { FavoriteItems, FavoriteStores } from "./Section2";

const App = () => {
  const [selectedOption, setSelectedOption] = useState("items");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <Stack
      direction="column"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "80%",
        margin: "32px auto",
        marginTop: "160px",
      }}
    >
      <Box marginBottom={5}>
        <Typography variant="title_alata" align="center" gutterBottom>
          FAVORITES
        </Typography>
      </Box>

      <Stack
        direction="row"
        sx={{ width: "100%", display: "flex", justifyContent: "space-around" , Maxheight:"200vh" }}
      >
        <Stack width={"20%"}>
          <RadioGroup value={selectedOption} onChange={handleOptionChange}>
            <FormControlLabel
              value="items"
              control={<Radio />}
              label={<Typography variant="body1_alata" color={"#444444"}>Favorite Items</Typography>}
            />
            <FormControlLabel
              value="stores"
              control={<Radio />}
              label={<Typography variant="body1_alata" color={"#444444"}>Favorite Stores</Typography>}
            />
          </RadioGroup>
        </Stack>

        <Stack width={"80%"}>
          <Grid container spacing={2}>
            {selectedOption === "items" && <FavoriteItems />}
            {selectedOption === "stores" && <FavoriteStores />}
          </Grid>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default App;
