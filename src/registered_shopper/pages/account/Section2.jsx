import React from "react";
import { Container, Divider, Grid, Stack, Typography } from "@mui/material";
import Menu from "./Menu";
import Form2 from "./forms/Form2";

const Section2 = () => {
  return (
    <Stack marginTop="150px" >
      <Container>
        <Grid container spacing={2} sx={{ mt: 4 }}>
          <Grid
            item
            xs={12}
            md={3}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
              marginTop: "100px",
            }}
          >
            <Menu />
          </Grid>
          <Grid item xs={12} md={9}>
            <Form2 />
          </Grid>
        </Grid>
      </Container>
    </Stack>
  );
};

export default Section2;