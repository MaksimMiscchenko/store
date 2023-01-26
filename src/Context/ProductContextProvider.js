import axios from "axios";
import React, { createContext, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export const productContext = createContext();


const INIT_STATE = {
    products: [],
    productDetails: {},
};

function reducer(state = INIT_STATE, action) {
    switch (action.type) {
        case "GET_PRODUCTS":
            return { ...state, products: action.payload };
        case "GET_PRODUCT_DETAIL":
            return { ...state, productDetails: action.payload };

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
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Заполните все поля!!!',
              })
          }else{
            let res = await axios.post(API,newCard)
            navigate("/");
          }
    }

    const getProductDetails = async (id) =>{
        const res = await axios.get(`${API}/${id}`)
        dispatch({
            type:"GET_PRODUCT_DETAIL",
            payload:res.data
        })
    }

    const saveEdit=async (product,id)=>{
        await axios.patch(`${API}/${id}`,product)
        getProducts()
    }



    return (
        <productContext.Provider
            value={{
                products: state.products,
                getProducts,
                deleteProduct,
                addProduct,
                productDetails: state.productDetails,
                getProductDetails,
                saveEdit
            }}
        >
            {children}
        </productContext.Provider>
    );
};

export default ProductContextProvider;