import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Loadable from '../../../components/Loadable';
import lazy from 'react';

const NewShopReqTable = Loadable(React.lazy(() => import('./new-shop-request/ShopRequest')));


const Shop = () => {
   
   return (
    <NewShopReqTable />
    );
    
 };
 
 export default Shop;