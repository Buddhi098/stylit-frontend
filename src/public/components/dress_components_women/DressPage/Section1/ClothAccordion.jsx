import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Stack } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const ClothAccordion = () => {
  return (
    <Stack width="450px">
      <Accordion sx={{ boxShadow: 'none' }}>
        <AccordionSummary
          expandIcon={<AddIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant='body1_alata' color={"#444444"}>Product Details</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant='body2_nunito' color="#999999">
            This product is made from high-quality materials to ensure durability and comfort. It features a sleek design and is perfect for everyday wear.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ boxShadow: 'none' }}>
        <AccordionSummary
          expandIcon={<AddIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography variant='body1_alata' color={"#444444"}>Brand</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography Typography variant='body2_nunito' color="#999999">
            This brand is known for its commitment to quality and style. With years of experience in the fashion industry, it offers products that are both trendy and reliable.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ boxShadow: 'none' }}>
        <AccordionSummary
          expandIcon={<AddIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography variant='body1_alata' color={"#444444"}>Size & Fit</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography Typography variant='body2_nunito' color="#999999">
            Available in a range of sizes, this product offers a comfortable fit for everyone. Please refer to our size chart to find the perfect fit for you.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ boxShadow: 'none' }}>
        <AccordionSummary
          expandIcon={<AddIcon />}
          aria-controls="panel4a-content"
          id="panel4a-header"
        >
          <Typography variant='body1_alata' color={"#444444"}>Material & Care</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography Typography variant='body2_nunito' color="#999999">
            Made from 100% cotton, this product is soft and breathable. It is machine washable for easy care. Please follow the care instructions on the label to maintain its quality.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Stack>
  );
}

export default ClothAccordion;
