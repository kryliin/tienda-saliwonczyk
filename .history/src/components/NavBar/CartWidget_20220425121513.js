import React from "react";
import IconoCarrito from '../logos/carrito.png'
import Image from 'react-bootstrap/Image'
import { useCartContext } from '../../context/CartContext'

function CartWidget({ name }) {
  const { cantidadTotalItem } = useCartContext()
  return (
    <div className="nav-cart">
      <Image src={IconoCarrito} width="29" alt='Carrito' rounded="true" />{name}
      {cantidadTotalItem() !== 0 && `${cantidadTotalItem()} `}
    </div>
  );
} export default CartWidget
