import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import { MenuItem } from "@mui/material";
import Section1 from "./Section1";
import Section2 from "./Section2";
// import Section2 from "./Section2";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: 400,
  boxShadow: 24,
};

export default function ShopperSignUp() {
  const [open, setOpen] = React.useState(false);
  const [isSubmit, setIsSubmit] = React.useState(false);

  const handleOpen = (event) => {
    event.stopPropagation();
    setOpen(true);
  };

  const handleClose =  (event) => {
    event.stopPropagation();
    setOpen(false);
  };

  return (
    <Box>
      <MenuItem
        onClick={handleOpen}
        sx={{
          color: "#999999",
          "&:hover": {
            color: "#000000",
          },
        }}
      >
        <Typography variant="body1_nunito" fontSize="15px">
          Sing Up
        </Typography>
      </MenuItem>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style} onClick={(e) => e.stopPropagation()}>
            {isSubmit ? (
              <Section2 handleClose={handleClose} setIsSubmit={setIsSubmit}/>
            ) : (
              <Section1
                handleClose={handleClose}
                isSubmit={isSubmit}
                setIsSubmit={setIsSubmit}
              />
            )}
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
}
