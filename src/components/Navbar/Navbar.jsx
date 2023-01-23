import { AppBar, Button, IconButton, Toolbar, Typography, Box, TextField } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';

import StoreIcon from '@mui/icons-material/Store';



const Navbar = () => {


  return (
    <div>
      <AppBar>
        <Container>
          <Toolbar sx={{
            display: "flex",
            justifyContent: 'space-between'
          }}>
            <IconButton color="inherit"  >
              <StoreIcon fontSize="large" />
              <Typography variant='h5'>Store</Typography>
            </IconButton>
            <Box>
              <TextField label={'Поиск товаров'} id="margin-normal" margin="normal" />
            </Box>
            <Box >
              <Button color='inherit' variant='outlined' sx={{ marginRight: '30px' }}>Log in</Button>
              <Button color='inherit' variant='contained' >Sign up</Button>
            </Box>

          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Navbar;