import React, { useEffect, useState } from 'react'
import PrimaryHeader from '../PrimaryHeader';
import MobilePrimaryHeader from '../responsive_component/MobilePrimaryHeader';
import SecondaryHeader from '../men_secondary_header/SecondaryHeader';
import { Stack, useMediaQuery } from '@mui/material';

const MenFinalHeader = () => {

    const isDesktop = useMediaQuery("(min-width:600px)");

    const [showHeader, setShowHeader] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        // Scrolling down
        setShowHeader(false);
      } else {
        // Scrolling up
        setShowHeader(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Stack sx={{ marginBottom: "147px"}}>
        <Stack
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            zIndex: 1000,
            backgroundColor: "#fff",
            transition: "transform 0.3s ease-in-out",
            transform: showHeader ? "translateY(0)" : "translateY(-100%)",
            boxShadow:"1px 1px 5px 1px rgba(0,0,0,0.1)"
          }}
        >
          {isDesktop ? (
            <PrimaryHeader topHeaderColor={"#C7B5AC"} />
          ) : (
            <MobilePrimaryHeader />
          )}
          <SecondaryHeader />
        </Stack>
    </Stack>
  )
}

export default MenFinalHeader;
