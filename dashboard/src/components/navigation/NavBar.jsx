import {useEffect, useState} from 'react';
import { AppBar, Typography } from '@mui/material';

const NavBar = props => {
  
  
  return (
    <AppBar>
      <Typography variant="h5" component="div" sx={{ flexGrow: 1}}>
        dashboardBuilder
      </Typography>
    </AppBar>
  );
};

export default NavBar;