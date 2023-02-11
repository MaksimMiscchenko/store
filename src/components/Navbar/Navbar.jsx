import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography,
  Box,
  TextField,
} from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

import StoreIcon from "@mui/icons-material/Store";
import { useNavigate } from "react-router-dom";
import Auth from "../Admin/Auth";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div>
      <AppBar>
        <Container>
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <IconButton color="inherit" onClick={() => navigate("/")}>
              <StoreIcon fontSize="large" />
              <Typography variant="h5">Store</Typography>
            </IconButton>
            <Box>
              <Button
                color="inherit"
                variant="outlined"
                onClick={() => navigate("/add")}
              >
                Добавить товар
              </Button>
              {/* <Button color='inherit' variant='outlined' sx={{ marginRight: '30px' }}>Log in</Button>
              <Button color='inherit' variant='contained' >Sign up</Button> */}
            </Box>
            <Auth />
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Navbar;
