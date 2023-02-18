import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import IconButton from "@mui/joy/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { MenuItem, Menu, ListItemDecorator, ListDivider } from "@mui/joy";
import MoreVert from "@mui/icons-material/MoreVert";
import Edit from "@mui/icons-material/Edit";
import DeleteForever from "@mui/icons-material/DeleteForever";
import React from "react";
import { useContext } from "react";
import { productContext } from "../../Context/ProductContextProvider";
import "./card.css";
import { useNavigate } from "react-router-dom";
import { cartContext } from "../../Context/CartContextProvider";
import { authContext } from "../../Context/AuthContextProvider";

export default function OneProd({ item }) {
  const navigate = useNavigate();
  const { deleteProduct } = useContext(productContext);
  const { addProductToCart } = useContext(cartContext);
  const { userIsLoggedIn } = useContext(authContext);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Card className="bg-cart">
        <CardMedia
          component="img"
          alt={item.model}
          height="300px"
          width="100%"
          image={item.img}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.type} {item.model}
          </Typography>
          <Typography variant="h5" color="text.secondary">
            {item.price} $
          </Typography>
          <Typography>{item.info}</Typography>
        </CardContent>

        {userIsLoggedIn ? (
          <CardActions>
            <IconButton
              id="positioned-demo-button"
              aria-controls={open ? "positioned-demo-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              variant="outlined"
              color="neutral"
              onClick={handleClick}
            >
              <MoreVert />
            </IconButton>
            <Menu
              id="positioned-demo-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              aria-labelledby="positioned-demo-button"
              placement="bottom-end"
              className="bg-menu"
            >
              <MenuItem onClick={() => navigate(`/edit/${item.id}`)}>
                <ListItemDecorator>
                  <Edit />
                </ListItemDecorator>{" "}
                Редактировать
              </MenuItem>
              <MenuItem
                onClick={() => {
                  addProductToCart(item);
                  handleClose();
                }}
                variant="soft"
                color="danger"
              >
                <ListItemDecorator sx={{ color: "inherit" }}>
                  <ShoppingCartIcon />
                </ListItemDecorator>{" "}
                Добавить в корзину
              </MenuItem>
              <MenuItem
                onClick={() => deleteProduct(item.id)}
                variant="soft"
                color="danger"
              >
                <ListItemDecorator sx={{ color: "inherit" }}>
                  <DeleteForever />
                </ListItemDecorator>{" "}
                Удалить
              </MenuItem>
            </Menu>
          </CardActions>
        ) : (
          <></>
        )}
      </Card>
    </div>
  );
}
