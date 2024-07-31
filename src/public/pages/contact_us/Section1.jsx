import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { MenuItem } from "@mui/material";
import { height } from "@mui/system";
import Section2 from "./Section2";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1000,
  minHeight: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default function Section1() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = (e) => {
    e.stopPropagation();
    setOpen(true);
  };

  const handleClose = (e) => {
    e.stopPropagation();
    setOpen(false);
  };

  return (
    <div>
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
          Help Center
        </Typography>
      </MenuItem>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Section2/>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
