import {
  Box,
  Button,
  Divider,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import ImageModal from "./ImageModal";
import SearchIcon from "@mui/icons-material/Search";
import { Link, useNavigate } from "react-router-dom";
import img1 from "../../assets/images/search_box_page/img1.png";
import img2 from "../../assets/images/search_box_page/img2.png";
import img3 from "../../assets/images/search_box_page/img3.png";
import img4 from "../../assets/images/search_box_page/img4.png";
import ImageBox from "./ImageBox";



const Section1 = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(-1);
  }
  return (
    <Stack
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        marginTop: "200px",
      }}
    >
      <Stack
        sx={{
          width: "60%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        direction="row"
      >
        <TextField
          label={<Typography variant="body2_nunito">Search</Typography>}
          variant="filled"
          size="small"
          sx={{
            borderRadius: "0",
            width: "70%",
            "& .MuiFilledInput-root": {
              borderBottom: "none",
              borderRadius: "0",
            },
            "& .MuiFilledInput-root::before": {
              borderBottom: "none",
            },
            "& .MuiFilledInput-root::after": {
              borderBottom: "none",
            },
            "& .MuiFilledInput-root:hover:not(.Mui-disabled):before": {
              borderBottom: "none",
            },
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <Divider orientation="vertical" flexItem />
        <ImageModal />
        <Link onClick={handleNavigate}>
          <Typography
            variant="body2_nunito"
            sx={{
              marginLeft: "16px",
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            Cancel
          </Typography>
        </Link>
      </Stack>

      <Stack
        direction="row"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          marginTop: "100px",
        }}
        spacing={3}
      >
        <ImageBox img={img1} label={"SHOP DRESSES"}/>
        <ImageBox img={img2} label={"SHOP SNEAKERS"}/>
        <ImageBox img={img3} label={"SHOP JEWELRIES"}/>
        <ImageBox img={img4} label={"SHOP MENSWEAR"}/>
      </Stack>
    </Stack>
  );
};

export default Section1;
