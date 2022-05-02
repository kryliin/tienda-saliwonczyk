import { createContext, useContext, useState } from "react";


const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)


function CartContextProvider({ children }) { //componente
    const [cartList, setCartList] = useState([])

    console.log('cartList' + cartList)


    const addToCart = (item) => {
        const idx = cartList.findIndex(prod => item.id === prod.id);   // 0 -> 
        console.log(idx)
        console.log(item)
        if (idx !== -1) {
            // la lógica
            const newArray = cartList
            const newCant = cartList[idx].cantidad + item.cantidad
            newArray[idx].cantidad = newCant
            setCartList([...newArray])
        } else {
            setCartList([
                ...cartList,
                item
            ])
        }
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
        return cartList.reduce((acum, prod) => acum + (prod.cantidad * prod.price), 0)
    }
/* 
    const totalJuegos = () => {
        let total = 0;
        cartList.forEach((item) => (total += item.cantidad));
        return total;

    }; */

    const totalJuegos = () => {
        return cartList.reduce((acum, prod) => acum += prod.cantidad , 0)// acum = acum + cantidad
    };

    const eliminarItem = (id) => {
        setCartList( cartList.filter(prod => prod.id !== id) )
    }

    return (
        <CartContext.Provider value={{
            cartList,
            addToCart,
            removeCart,
            totalAPagar,
            totalJuegos,
        /*     cantidadTotalItem, */
            eliminarItem
        }}>

            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider