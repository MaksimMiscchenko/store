import * as React from "react";
import { useContext, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { productContext } from "../../Context/ProductContextProvider";
import { Container } from "@mui/system";
import OneProd from "./OneProd";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  InputAdornment,
  Pagination,
  Paper,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { useState } from "react";

export default function ProdCard() {
  const { getProducts, products, fetchByParams } = useContext(productContext);

  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("q") || "");
  const [page, setPage] = useState(1);
  const count = Math.ceil(products.length / 4);

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    getProducts();
  }, [searchParams]);

  useEffect(() => {
    setSearchParams({
      q: search,
    });
  }, [search]);

  function currentData() {
    const begin = (page - 1) * 4;
    const end = begin + 4;
    return products.slice(begin, end);
  }

  return (
    <Container sx={{ paddingTop: 20 }}>
      <Grid container spacing={5} sx={{ flexGrow: 1 }}>
        <Grid xs={4}>
          <Grid item md={3} className="prod-filter">
            <Paper elevation={5} sx={{ p: 2 }}>
              <TextField
                id="input-with-icon-textfield"
                label="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start"></InputAdornment>
                  ),
                }}
                variant="standard"
              />
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">Type</FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="all"
                  name="radio-buttons-group"
                  onChange={(e) => fetchByParams("type", e.target.value)}
                >
                  <FormControlLabel
                    value="all"
                    control={<Radio />}
                    label="all"
                  />
                  <FormControlLabel
                    value="Iphone"
                    control={<Radio />}
                    label="Iphone"
                  />
                  <FormControlLabel
                    value="Samsung"
                    control={<Radio />}
                    label="Samsung"
                  />
                  <FormControlLabel
                    value="Xiaomi"
                    control={<Radio />}
                    label="Xiaomi"
                  />
                </RadioGroup>
              </FormControl>
            </Paper>
            <Pagination
              className="prod-pagin"
              count={count}
              variant="outlined"
              shape="rounded"
              onChange={(e, p) => setPage(p)}
              page={page}
            />
          </Grid>
        </Grid>
        <Grid container xs={7} justifyContent="flex-start">
          {products ? (
            currentData().map((item) => <OneProd item={item} key={item.id} />)
          ) : (
            <h2>Loading...</h2>
          )}
        </Grid>
      </Grid>
    </Container>
  );
}
