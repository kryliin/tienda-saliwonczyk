import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { useCartContext } from "../../context/CartContext"

function ItemDetailed({ productos }) {
  const { addToCart, cartList } = useCartContext()

  function onAdd(cant) {
    console.log(cant)
    console.log(productos)
    addToCart({ ...productos, cantidad: cant })
  }

  console.log('cartList antes' + cartList)


  return (
    <>
      <div className='col-md-3 p-2'>
        <div className="card w-100 mt-5" >
          <div className="card-header">
            {`${productos.nombre} - ${productos.categoria}`}
          </div>

          <div className="card-body">
            <img src={productos.foto} alt='' className='w-50' />
            {productos.descripcion}
            {productos.observciones}
            <br />
            <br />
            <h4 style={{ color: 'green' }}>${productos.precio}</h4>
            <h4>Nos Quedan : {productos.cantidad}</h4>
          </div>
          <br />
          <div className="card-footer">
            <ItemCount
              stock={productos.cantidad}
              onAdd={onAdd}
              initial={0}
            />
          </div>
        </div>
      </div>
    </>
  )
}
export default ItemDetailed