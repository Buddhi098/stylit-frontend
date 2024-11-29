import React from 'react';
import Navigation from './Navigation';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import "./new_css.css"
// ==============================|| DRAWER CONTENT ||============================== //

export default function DrawerContent() {
  return (
    <>
      <SimpleBar style={{ maxHeight: '100vh' , marginTop:"50px" }} autoHide={false}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Navigation />
        </div>
      </SimpleBar>
    </>
  );
}
