import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import IconButton from "@mui/joy/IconButton";
import { MenuItem, Menu, ListItemDecorator, ListDivider } from "@mui/joy";
import MoreVert from "@mui/icons-material/MoreVert";
import Edit from "@mui/icons-material/Edit";
import DeleteForever from "@mui/icons-material/DeleteForever";
import React from "react";
import { useContext } from "react";
import { productContext } from "../../Context/ProductContextProvider";
import "./card.css";
import { useNavigate } from "react-router-dom";

export default function OneProd({ item }) {
  const navigate = useNavigate();
  const { deleteProduct } = useContext(productContext);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = ({ key }) => {
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
          <Typography variant="body2" variant="h5" color="text.secondary">
            {item.price} $
          </Typography>
        </CardContent>

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
              Edit post
            </MenuItem>
            <MenuItem disabled onClick={handleClose}></MenuItem>
            <ListDivider />
            <MenuItem
              onClick={() => deleteProduct(item.id)}
              variant="soft"
              color="danger"
            >
              <ListItemDecorator sx={{ color: "inherit" }}>
                <DeleteForever />
              </ListItemDecorator>{" "}
              Delete
            </MenuItem>
          </Menu>
        </CardActions>
      </Card>
    </div>
  );
}
