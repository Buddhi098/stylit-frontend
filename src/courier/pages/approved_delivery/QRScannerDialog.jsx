import React, { useState } from "react";
import { Box, Dialog, DialogTitle, DialogContent, DialogActions, IconButton, Typography, Button, Alert } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import QrReader from "react-qr-scanner";
import { styled, keyframes } from "@mui/system";

const lineAnimation = keyframes`
  0% {
    top: -100%;
  }
  100% {
    top: 100%;
  }
`;

const MovingLine = styled(Box)`
  position: absolute;
  width: 100%;
  height: 2px;
  background: #00ff00;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: ${lineAnimation} 2s linear infinite;
`;

const FrameCorner = styled(Box)(({ theme, position }) => {
  const size = 40;
  const thickness = 8;

  const commonStyles = {
    position: 'absolute',
    width: size,
    height: size,
    borderColor: '#6CB4EE',
    borderWidth: thickness,
    borderStyle: 'solid',
  };

  const positions = {
    topLeft: {
      top: 0,
      left: 0,
      borderTopWidth: thickness,
      borderLeftWidth: thickness,
      borderRightWidth: 0,
      borderBottomWidth: 0,
    },
    topRight: {
      top: 0,
      right: 0,
      borderTopWidth: thickness,
      borderRightWidth: thickness,
      borderLeftWidth: 0,
      borderBottomWidth: 0,
    },
    bottomLeft: {
      bottom: 0,
      left: 0,
      borderBottomWidth: thickness,
      borderLeftWidth: thickness,
      borderRightWidth: 0,
      borderTopWidth: 0,
    },
    bottomRight: {
      bottom: 0,
      right: 0,
      borderBottomWidth: thickness,
      borderRightWidth: thickness,
      borderLeftWidth: 0,
      borderTopWidth: 0,
    },
  };

  return {
    ...commonStyles,
    ...positions[position],
  };
});

const QRFrame = () => {
  const size = 200;
  const cornerSize = 40;

  return (
    <Box
      sx={{
        position: 'absolute',
        width: size,
        height: size,
        borderRadius: '8px',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        overflow: 'hidden',
        zIndex: 2
      }}
    >
      <FrameCorner position="topLeft" />
      <FrameCorner position="topRight" />
      <FrameCorner position="bottomLeft" />
      <FrameCorner position="bottomRight" />
      <MovingLine />
    </Box>
  );
};

const QRScannerDialog = ({ open, handleClose }) => {
  const [errorMessage, setErrorMessage] = useState("");

  const handleScan = (data) => {
    if (data) {
      window.location.href = data;
    }
  };

  const handleError = (err) => {
    console.error("QR Scanner Error:", err);
    setErrorMessage("Failed to scan QR code. Please try again.");
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>
        <Box display="flex" justifyContent="flex-end">
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent>
        <Box display="flex" flexDirection="column" alignItems="center" position="relative">
          <Box
            sx={{
              width: "100%",
              height: "400px",
              position: "relative",
              overflow: "hidden",
              border: "1px solid #C0A888"
            }}
          >
            <QrReader
              delay={300}
              onError={handleError}
              onScan={handleScan}
              style={{ width: "100%", height: "100%" }}
            />
            <Box
              sx={{
                position: "absolute",
                width: "100%",
                height: "100%",
                top: 0,
                left: 0,
                zIndex: 1,
                pointerEvents: "none",
                maskImage: `radial-gradient(circle at center, transparent 110px, rgba(0, 0, 0, 0.8) 105px)`,
                WebkitMaskImage: `radial-gradient(circle at center, transparent 110px, rgba(0, 0, 0, 0.8) 105px)`,
                backdropFilter: "blur(8px)",
              }}
            />
            <QRFrame />
          </Box>
          {errorMessage && (
            <Alert severity="error" sx={{ marginTop: 2 }}>
              {errorMessage}
            </Alert>
          )}
        </Box>
        <Typography variant="h6" sx={{ marginTop: 2, color: "light-grey", textAlign: "center" }}>Scan QR Code</Typography>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={handleClose}
          sx={{
            backgroundColor: "#C0A888",
            color: "#ffffff",
            "&:hover": { backgroundColor: "#8F6B55", color: "#ffffff" },
          }}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default QRScannerDialog;
