import axios from "axios";
import React, { createContext, useReducer } from "react";

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




    return (
        <productContext.Provider
            value={{
                products: state.products,
                getProducts,
            }}
        >
            {children}
        </productContext.Provider>
    );
};

export default ProductContextProvider;