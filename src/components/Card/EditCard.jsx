import React, {   useContext, useState } from 'react';
import { Box, Button, Grid, TextField } from "@mui/material";
import { productContext } from "../../Context/ProductContextProvider";
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';

 const EditCard = ()=>{

    const { productDetails, getProductDetails,saveEdit } =useContext(productContext);
    const params = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(productDetails);

    useEffect(() => {
        getProductDetails(params.id);
      }, []);
    
    useEffect(()=>{
        setProduct(productDetails)
    },[productDetails])

    const handleInp = (e)=>{
        if (e.target.name === "price") {
            let obj = { ...product, [e.target.name]: Number(e.target.value) };
            setProduct(obj);
          } else {
            let obj = { ...product, [e.target.name]: e.target.value };
            setProduct(obj);
          }
    }

    
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
                value={product.name || ''}
                name="name"
                label="Модель"
                type="Disabled"
                margin="normal"
                onChange={handleInp}
              />
              <TextField
                id="outlined-password-input"
                value={product.info || ''}
                label="Описание"
                type="Disabled"
                margin="normal"
                name="info"
                onChange={handleInp}
              />
              <TextField
                id="outlined-password-input"
                value={product.price || ''}
                label="Цена"
                type="number"
                margin="normal"
                name="price"
                onChange={handleInp}
              />
              <TextField
                id="outlined-password-input"
                value={product.img || ''}
                label="Фото"
                type="Disabled"
                margin="normal"
                name="img"
                onChange={handleInp}
              />
              <Button 
              onClick={()=>{
                saveEdit(product,params.id)
                navigate('/')
              }}
            variant="outlined">
              Save 
            </Button>
            </Grid>
          </Box>
            </div>
        );
    }



export default EditCard;