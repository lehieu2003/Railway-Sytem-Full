import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Header = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6">User Management</Typography>
    </Toolbar>
  </AppBar>
);

export default Header;
