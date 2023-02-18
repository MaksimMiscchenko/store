import React from "react";
import { Route, Routes } from "react-router-dom";
import EditCard from "./components/Card/EditCard";
import Cart from "./components/Cart/Cart";
import AddProduct from "./pages/AddProduct";
import Home from "./pages/Home";

const allRoutes = [
  { link: "/", element: <Home />, id: 1 },
  { link: "/add", element: <AddProduct />, id: 2 },
  { link: "/edit/:id", element: <EditCard />, id: 3 },
  { link: "/cart", element: <Cart />, id: 4 },
];

const PagesRoute = () => {
  return (
    <Routes>
      {allRoutes.map((item) => (
        <Route path={item.link} element={item.element} id={item.id} />
      ))}
    </Routes>
  );
};
export default PagesRoute;
