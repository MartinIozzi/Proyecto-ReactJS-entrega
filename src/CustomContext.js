import React, {createContext, useState} from "react";

export const CustomContext = createContext();
//{provider} y {consumer}

export const CustomProvider = ({children}) => {
    const [cart, setCart] = useState([{name: 'manzana'}]);

    const addProduct = (product, qty) => {
        setCart([...cart,{...product, qty}])
    }
    const removeProduct = (id) => {

    }

    const isInCart = (id) => {
        return cart.some((product) => product.id === id)
    };

    const clear = (id) => {
        
    }
    return (
    <CustomContext.Provider value={{cart, addProduct, removeProduct, isInCart, clear}} >
    {children}
    </CustomContext.Provider>
    );
}