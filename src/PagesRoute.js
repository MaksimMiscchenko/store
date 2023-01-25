import React from "react";
import { Route, Routes } from "react-router-dom";
import AddProduct from "./pages/AddProduct";
import Home from "./pages/Home";

const allRoutes=[
    {link:'/',element:<Home/>,id:1},
    {link:'/add',element:<AddProduct/>,id:2},
]

const PagesRoute= ()=>{
    return(
        <Routes>
            {allRoutes.map((item)=>(
                <Route path={item.link} element={item.element} id={item.id}/>
            ))}
        </Routes>
    )
}
export default PagesRoute;