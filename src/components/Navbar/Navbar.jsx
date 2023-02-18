import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography,
  Box,
} from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

import StoreIcon from "@mui/icons-material/Store";
import { Link, useNavigate } from "react-router-dom";
import Auth from "../Admin/Auth";
import { Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { authContext } from "../../Context/AuthContextProvider";
import { useContext } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const { userIsLoggedIn, handleLogOut } = useContext(authContext);

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
              {userIsLoggedIn ? (
                <Button
                  color="inherit"
                  variant="outlined"
                  onClick={() => navigate("/add")}
                >
                  Добавить товар
                </Button>
              ) : (
                <></>
              )}
            </Box>

            <Link to="/cart">
              {userIsLoggedIn ? (
                <Button sx={{ color: "white" }}>
                  <Badge /*badgeContent={count}*/ color="error">
                    <ShoppingCartIcon />
                  </Badge>
                </Button>
              ) : (
                <></>
              )}
            </Link>
            {userIsLoggedIn ? (
              <Button
                color="inherit"
                variant="outlined"
                onClick={() => handleLogOut()}
              >
                Выйти
              </Button>
            ) : (
              <Auth />
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Navbar;
