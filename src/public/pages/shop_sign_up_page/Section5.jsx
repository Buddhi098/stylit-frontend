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
      "To set up your store on Stylit, start by creating an account. Once registered, you can list your products, set your prices, and start selling.",
  },
  {
    question: "What payment methods are accepted?",
    answer:
      "Stylit accepts a variety of payment methods including credit/debit cards, PayPal, and bank transfers.",
  },
  {
    question: "How can I track my orders?",
    answer:
      "You can track your orders through the 'My Orders' section in your account dashboard. You will also receive email updates on the status of your orders.",
  },
  {
    question: "What is the return policy?",
    answer:
      "Stylit offers a 30-day return policy for most items. Products must be returned in their original condition. Please refer to our return policy page for more details.",
  },
  {
    question: "How can I contact customer support?",
    answer:
      "You can contact our customer support team via the 'Contact Us' page on our website, or email us directly at support@stylit.com.",
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
            marginTop: "10px",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}a-content`}
            id={`panel${index}a-header`}
            sx={{
              backgroundColor: "primary.200",
              border: 'none',
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
