import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { useCartContext } from "../../context/CartContext"
import './ItemDetailed.css'
import Container from 'react-bootstrap/Container'
import swal from 'bootstrap-sweetalert'

function ItemDetailed({ producto }) {
  const { addToCart } = useCartContext()

  function onAdd(cant) {
    swal({
      title: "Excelente!",
      text: "Se han Agregado " + cant + " Juegos a su Carrito",
      icon: "success",
      button: "Si",
      confirmButtonClass: "btn-success",
      buttonText: 'Si'
    });
    addToCart({ ...producto, cantidad: cant })
  }

  return (
    <>
     
      <br />
      <Container>
        <div className='cartconteiner'>
          <div className='cartIzquierda'>
            <div className='cartItemTitulo' >{producto.nombre}Tipo Juego: {producto.categoria} </div>
            <div className='cartItem2'>{producto.descripcion} </div>
          </div>

          <div className='cartDerecha'>
            <img className='imagenDetalle' src={producto.foto} alt='' />
            <br />
            Precio ${producto.precio}
            <br />
            Nos Quedan : {producto.cantidad}
            <br />
            <ItemCount
              stock={producto.cantidad}
              onAdd={onAdd}
              initial={0}
            />
          </div>
        </div>

      </Container>
    </>
  )
}
export default ItemDetailed