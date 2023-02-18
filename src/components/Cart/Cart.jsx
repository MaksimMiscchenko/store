import React, { useContext, useEffect } from "react";
import { cartContext } from "../../Context/CartContextProvider";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const Cart = () => {
  const { getCart, cart, changeProductCount, deleteCartProduct } =
    useContext(cartContext);

  useEffect(() => {
    getCart();
  }, []);

  const cartCleaner = () => {
    localStorage.removeItem("cart");
    getCart();
  };
  return (
    <div>
      <TableContainer
        sx={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "100px",
          paddingBottom: "20px",
        }}
      >
        <Table
          sx={{
            maxWidth: "620px",
          }}
        >
          <TableHead>
            <TableRow sx={{ background: "#2196f3" }}>
              <TableCell sx={{ color: "white" }}>Название бренда</TableCell>
              <TableCell sx={{ color: "white" }}>Модель</TableCell>
              <TableCell sx={{ color: "white" }}>Цена</TableCell>
              <TableCell sx={{ color: "white" }}>Количество</TableCell>
              <TableCell sx={{ color: "white" }}>Итоговая сумма</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cart?.products.map((row) => (
              <TableRow key={row.item.id}>
                <TableCell sx={{ align: "right" }}>{row.item.type}</TableCell>
                <TableCell sx={{ align: "right" }}>{row.item.model}</TableCell>
                <TableCell sx={{ align: "right" }}>{row.item.price}</TableCell>
                <TableCell sx={{ align: "right" }}>
                  <input
                    type="number"
                    min={1}
                    max={100}
                    value={row.count}
                    onChange={(e) => {
                      changeProductCount(e.target.value, row.item.id);
                    }}
                  />
                </TableCell>
                <TableCell sx={{ align: "right" }}>{row.subPrice}</TableCell>
                <TableCell sx={{ align: "right" }}>
                  <Button onClick={() => deleteCartProduct(row.item.id)}>
                    DELETE
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <Button
            sx={{ background: "#2196f3", color: "white" }}
            onClick={cartCleaner}
          >
            BUY NOW {cart?.totalPrice} $
          </Button>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Cart;
