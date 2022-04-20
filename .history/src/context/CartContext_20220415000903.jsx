import { createContext, useContext, useState } from "react";


const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)


function CartContextProvider({ children }) { //componente
    const [cartList, setCartList] = useState([])

    console.log('cartList' + cartList)


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

    const totalAPagar = () => {
        let total = 0;
        cartList.forEach((item) => (total += item.item.precio * item.cantidad));
        return total;
    };

    const cantidadTotalItem = () => {
        let total = 0;
        if (cartList.size > 0) {
            total = cartList.size;
        } else {
            total = 0
        }
        return total;
    };


    return (
        <CartContext.Provider value={{
            cartList,
            addToCart,
            removeCart,
            totalAPagar,
            cantidadTotalItem
        }}>

            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider