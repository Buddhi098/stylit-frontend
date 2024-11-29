import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const faqData = [
  {
    question: "How do I set up my store on Stylit?",
    answer:
      "Enjoy the freedom to choose delivery times that fit your schedule, allowing you to balance work with personal commitments effortlessly.",
  },
  {
    question: "How do I set up my store on Stylit?",
    answer:
      "Enjoy the freedom to choose delivery times that fit your schedule, allowing you to balance work with personal commitments effortlessly.",
  },
  {
    question: "How do I set up my store on Stylit?",
    answer:
      "Enjoy the freedom to choose delivery times that fit your schedule, allowing you to balance work with personal commitments effortlessly.",
  },
];

const Faq = () => {
  return (
    <Box
      sx={{
        width: "80%",
        margin: "10px auto",
        paddingTop: 4,
        marginBottom: "70px",
      }}
    >
      <Typography variant="subtitle_alata">FAQ</Typography>
      {faqData.map((faq, index) => (
        <Accordion
          key={index}
          sx={{
            boxShadow: "none",
            marginTop: "10px"
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}a-content`}
            id={`panel${index}a-header`}
            sx={{
              backgroundColor: "primary.200",
              border: 'none'
            }}
          >
            <Typography variant="body1_alata" color={"black.800"}>
              {faq.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{ backgroundColor: "#f0f0f0", padding: "16px" }}
          >
            <Typography variant="body1_nunito" color={"black.800"}>
              {faq.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default Faq;
