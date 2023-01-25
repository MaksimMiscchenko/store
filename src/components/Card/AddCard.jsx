import { Box, Button, Grid, TextField } from "@mui/material";
import React, { useContext, useState } from "react";

import {productContext} from '../../Context/ProductContextProvider';



const AddCard = () => {
  const { addProduct } = useContext(productContext);

  const [newCard, setNewCard] = useState({
    name: "",
    price: '',
    info: "",
    img: "",
  });

  const handleInp = (e) => {
    
    if (e.target.name === "price") {
      let obj = { ...newCard, [e.target.name]: Number(e.target.value) };
      setNewCard(obj);
    } else {
      let obj = { ...newCard, [e.target.name]: e.target.value };
      setNewCard(obj);
    }
    
  };

  return (
    <div>
      <Box sx={{ paddingTop: 20 }}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <TextField
            id="outlined-password-input"
            name="name"
            label="Модель"
            type="Disabled"
            autoComplete="current-password"
            margin="normal"
            onChange={handleInp}
          />
          <TextField
            id="outlined-password-input"
            label="Описание"
            type="Disabled"
            autoComplete="current-password"
            margin="normal"
            name="info"
            onChange={handleInp}
          />
          <TextField
            id="outlined-password-input"
            label="Цена"
            type="number"
            autoComplete="current-password"
            margin="normal"
            name="price"
            onChange={handleInp}
          />
          <TextField
            id="outlined-password-input"
            label="Фото"
            type="Disabled"
            autoComplete="current-password"
            margin="normal"
            name="img"
            onChange={handleInp}
          />
          <Button onClick={() => {
          addProduct(newCard);
          
        }}
        variant="outlined">
          Add
        </Button>
        </Grid>
      </Box>
    </div>
  );
};

export default AddCard;
