import { createContext, useContext, useState } from "react";


const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)


function CartContextProvider({ children }) { //componente
    const [cartList, setCartList] = useState([])

    console.log('cartList' +cartList)


    const addToCart = (item) => {
        console.log('item' + item)
        setCartList([
            ...cartList,
            item
        ])
    }

    const removeCart = () => {
        setCartList([])
    }


    return (

        <CartContext.Provider value={{
            cartList,
            addToCart,
            removeCart
        }}>
        
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider