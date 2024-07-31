import { Box, Button, Typography } from "@mui/material";
import React from "react";

const ImageBox = ({img , label}) => {
  return (
    <Box>
      <Box sx={{ position: "relative" }}>
        <Box
          component="img"
          src={img}
          width="300px"
          height="300px"
          sx={{ objectFit: "cover" }}
        />
        <Button
          sx={{
            position: "absolute",
            bottom: "20px",
            left: "18%",
            background: "white",
            color: "#000000",
            borderRadius: "0",
            width: "60%",
            "&:hover": {
              background: "#000000",
              color: "#ffffff",
            },
          }}
          disableFocusRipple
          disableRipple
        >
          <Typography variant="body2_nunito">{label}</Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default ImageBox;
