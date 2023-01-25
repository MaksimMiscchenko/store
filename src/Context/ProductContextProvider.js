import axios from "axios";
import React, { createContext, useReducer } from "react";
import { useNavigate } from "react-router-dom";

export const productContext = createContext();


const INIT_STATE = {
    products: [],
    productDetails: {},
};

function reducer(state = INIT_STATE, action) {
    switch (action.type) {
        case "GET_PRODUCTS":
            return { ...state, products: action.payload };

        default:
            return state;
    }
}

const ProductContextProvider = ({ children }) => {
    const API = "http://localhost:8000/product"
    const navigate=useNavigate()

    const [state, dispatch] = useReducer(reducer, INIT_STATE);

    const getProducts = async () => {
        try {
            let res = await axios.get(API);
            console.log(res);
            dispatch({
                type: "GET_PRODUCTS",
                payload: res.data,
            });
        } catch (err) {
            console.log(err);
        }

    };

    const deleteProduct = async (id)=>{
        await axios.delete(`${API}/${id}`)
        getProducts()
    }

    const addProduct = async(newCard)=>{
        if(newCard.name === "" || newCard.info === "" || newCard.price === ""){
            alert('Заполните все поля')
          }else{
            let res = await axios.post(API,newCard)
            navigate("/");
          }
        
        
    }




    return (
        <productContext.Provider
            value={{
                products: state.products,
                getProducts,
                deleteProduct,
                addProduct,
            }}
        >
            {children}
        </productContext.Provider>
    );
};

export default ProductContextProvider;