import React, { useState, useRef } from "react";
import { Box, Stack, Typography, Fade } from "@mui/material";
import { Link } from "react-router-dom";

export default function MouseOverPopover({ label, Component, red }) {
  const [isHover, setIsHover] = useState(false);
  const containerRef = useRef(null);

  // Handler functions to update hover state
  const handleMouseEnter = () => setIsHover(true);
  const handleMouseLeave = () => setIsHover(false);

  // Event handler to check if mouse is outside of the container
  const handleDocumentMouseMove = (event) => {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      setIsHover(false);
    }
  };

  React.useEffect(() => {
    // Add event listener for mouse move events
    document.addEventListener("mousemove", handleDocumentMouseMove);
    return () => {
      // Cleanup event listener on component unmount
      document.removeEventListener("mousemove", handleDocumentMouseMove);
    };
  }, []);

  return (
    <Box
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Stack direction="row">
        <Box
          height="70px"
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            cursor: "pointer",
            margin: 0, // Remove margin
            padding: 0, // Remove padding
          }}
        >
          <Link
            onMouseEnter={handleMouseEnter}
            style={{ textDecoration: "none" }} // Ensure Link has no underline
          >
            <Typography variant="body2_nunito" color={red ? "#D21B28":"#000000"}>{label}</Typography>
          </Link>
        </Box>
      </Stack>

      <Fade in={isHover} timeout={300}>
        <Box
          sx={{
            width: "100vw",
            zIndex: 1, // Ensure it appears on top
            position: "absolute", // Ensure it appears on top
            top: "140px", // Adjust positioning if needed
            left: "0", // Adjust positioning if needed
            backgroundColor: "white", // Optional: style it to stand out
            border: "1px solid #ccc", // Optional: border styling
            padding: "10px", // Optional: padding
            marginTop: "5px", // Adjust spacing if needed
            transition: "opacity 0.3s ease", // Optional: additional transition styles
          }}
        >
          <Component />
        </Box>
      </Fade>
    </Box>
  );
}
