import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { useCartContext } from "../../context/CartContext"
import './ItemDetailed.css'
import Container from 'react-bootstrap/Container'
import ItemListContainer from '../ItemListContainer/ItemListConteiner.jsx'
import Link from 'react-router-dom'

function ItemDetailed({ producto }) {
  const { addToCart } = useCartContext()

  function onAdd(cant) {
    alert('Se Agregaron ')
    addToCart({ ...producto, cantidad: cant })
  }

  return (
    <>
      <h1>Detalles de {producto.nombre} </h1>
      <br />
      <Container>
        <div className='cartconteiner'>
          <div className='cartIzquierda'>
            <div className='cartItem' ><h2>Tipo Juego: {producto.categoria}</h2> </div>
            <div className='cartItem' ><h3>{producto.descripcion}</h3>  </div>
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

            <Link className="btn btn-dark" to="/" element={<ItemListContainer />}>Volver a la Tienda</Link>
          </div>

        </div>

      </Container>
    </>
  )
}
export default ItemDetailed