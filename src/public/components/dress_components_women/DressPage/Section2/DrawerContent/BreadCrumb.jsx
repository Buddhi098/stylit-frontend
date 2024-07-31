import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from 'react-router-dom';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function BreadCrumb({gender}) {
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link color="inherit" to="/">
         <Typography variant='body2_nunito' sx={{"&:hover":{textDecoration:"underline"}}} color={"#999999"}>Public</Typography> 
        </Link>
        <Link
          color="inherit"
          to={gender==="women" ? "/public/women" : "public/men"}
        >
           <Typography variant='body2_nunito' sx={{"&:hover":{textDecoration:"underline"}}} color={"#999999"}>Dress</Typography> 
        </Link>
        <Typography variant='body2_nunito' color="text.primary" sx={{"&:hover":{textDecoration:"underline"}}}>Women</Typography>
      </Breadcrumbs>
    </div>
  );
}
