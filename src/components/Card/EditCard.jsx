import React, { useContext, useState } from "react";
import { Box, Button, Grid, TextField } from "@mui/material";
import { productContext } from "../../Context/ProductContextProvider";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const EditCard = () => {
  const { productDetails, getProductDetails, saveEdit } =
    useContext(productContext);
  const params = useParams();

  const [product, setProduct] = useState(productDetails);

  useEffect(() => {
    getProductDetails(params.id);
  }, []);

  useEffect(() => {
    setProduct(productDetails);
  }, [productDetails]);

  const handleInp = (e) => {
    if (e.target.name === "price") {
      let obj = { ...product, [e.target.name]: Number(e.target.value) };
      setProduct(obj);
    } else {
      let obj = { ...product, [e.target.name]: e.target.value.trim() };
      setProduct(obj);
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
            disabled
            id="outlined-disabled"
            value={product.type || ""}
            name="type"
            label="Бренд"
            type="Disabled"
            margin="normal"
            onChange={handleInp}
          />
          <TextField
            id="outlined-password-input"
            value={product.model || ""}
            name="model"
            label="Модель"
            type="Disabled"
            margin="normal"
            onChange={handleInp}
          />
          <TextField
            id="outlined-password-input"
            value={product.info || ""}
            label="Описание"
            type="Disabled"
            margin="normal"
            name="info"
            onChange={handleInp}
          />
          <TextField
            id="outlined-password-input"
            value={product.price || ""}
            label="Цена"
            type="number"
            margin="normal"
            name="price"
            onChange={handleInp}
          />
          <TextField
            id="outlined-password-input"
            value={product.img || ""}
            label="Фото"
            type="Disabled"
            margin="normal"
            name="img"
            onChange={handleInp}
          />
          <Button
            onClick={() => {
              saveEdit(product, params.id);
            }}
            variant="outlined"
          >
            Save
          </Button>
        </Grid>
      </Box>
    </div>
  );
};

export default EditCard;
