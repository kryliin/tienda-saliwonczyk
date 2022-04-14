import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { useCartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"

const Item = ({ productos }) => {

    const {addToCart, cartList} = useCartContext()

    function onAdd(cant) {
        console.log(cant)
        console.log(productos)
        addToCart( { ...productos, cantidad: cant } )
      }

      console.log('cartList antes' + cartList)
    return (
        <div>
            <div className="card border-primary shadow bg-white p-1" >
                <div className="card-header">
                    {`${productos.name} - ${productos.categoria}`}
                </div>

                <div className="card-body">

                    <img src={productos.foto} alt='' className='w-25 h-auto d-inline-block' />

                    <Link to={`/detalle/${productos.id}`}>
                        <button className="btn btn-outline-primary btn-block">
                            Detalle
                        </button>
                    </Link>

                    <br />
                    <br />
                    <h4 style={{ color: 'green' }}>${productos.price}</h4>
                    <h4>Stock Disponible : {productos.cantidad}</h4>
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
    );
};

export default Item;