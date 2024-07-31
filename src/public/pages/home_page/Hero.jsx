import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import men from "../../assets/images/home/men.png";
import women from "../../assets/images/home/women.png";
import { Link } from "react-router-dom";
import Hero_component from "./Hero_component";

const Hero = () => {
  return (
    <Stack>
      <Stack
        direction="column"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "10px 20px",
        }}
        spacing={5}
      >
        <Box>
          <Typography variant="subtitle_alata" sx={{ textAlign: "center", color:"#444444"}} >
            Choose a department
          </Typography>
        </Box>
        <Stack
          direction={{ xs: "column", sm: "column", md: "row" }}
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
          spacing={6}
        >
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: "302px",
              overflow: "hidden",
            }}
          >
            <Box
              component="img"
              src={men}
              alt="women image"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
            <Link to="/public/men">
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundImage:
                    "linear-gradient(rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.2))", // Dark color overlay with 50% opacity
                  textAlign: "center",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  "&:hover": {
                    backgroundImage:
                      "linear-gradient(rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.4))",
                  },
                }}
              >
                <Typography variant="subtitle_nunito" color="white">
                  Menswear
                </Typography>
              </Box>
            </Link>
          </Box>
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: "302px",
              overflow: "hidden",
            }}
          >
            <Box
              component="img"
              src={women}
              alt="women image"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
            <Link to="/public/women">
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundImage:
                    "linear-gradient(rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.2))", // Dark color overlay with 50% opacity
                  textAlign: "center",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  "&:hover": {
                    backgroundImage:
                      "linear-gradient(rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.4))",
                  },
                }}
              >
                <Typography variant="subtitle_nunito" color="white">
                  Womenswear
                </Typography>
              </Box>
            </Link>
          </Box>
        </Stack>
      </Stack>
      <Stack
        direction={{ xs: "column", sm: "column", md: "row" }}
        width={{ xs: "100%", sm: "100%", md: "80%" }}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "10px auto",
          padding: "15px 0px",
        }}
        spacing={3}
      >
        <Hero_component
          icon={"checkroom"}
          title={"HOW TO SHOP?"}
          subtitle={"Your guide to shopping and placing orders"}
        ></Hero_component>
        <Hero_component
          icon={"help"}
          title={"FAQs"}
          subtitle={"Your questions answered."}
        ></Hero_component>
        <Hero_component
          icon={"chat"}
          title={"NEED HELP?"}
          subtitle={"Chat with our customer service representative."}
        ></Hero_component>
      </Stack>
    </Stack>
  );
};

export default Hero;
