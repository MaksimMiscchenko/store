import * as React from 'react';
import { useContext,useEffect } from 'react';
import { productContext } from '../../Context/ProductContextProvider';
import { Container } from '@mui/system';
import OneProd from './OneProd';
import { createTheme, Grid} from '@mui/material';


export default function ProdCard(props) {
  const { getProducts, products } = useContext(productContext)

  useEffect(() => {
    getProducts();
  }, []);
  
 
  return (
    <Container sx={{ paddingTop: 20 }}  >
      <Grid container spacing={3} sx={{ flexGrow: 1 } }>
        <Grid xs={2} justifyContent="flex-start">
          <p>dskadas</p>
        </Grid>
        <Grid container xs={10} justifyContent="flex-start" >
          {products ? (
            products.map((item) => (
              <OneProd item={item} key={item.id} />
            ))
          ) : (
            <h2>Loading...</h2>
          )}
        </Grid>
      </Grid>
    </Container>

  );
}