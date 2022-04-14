import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { useCartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import Col from 'react-bootstrap/Col'

const Item = ({ producto }) => {

    const {addToCart, cartList} = useCartContext()
/* 
    const onAdd = (cantidad) => {   
        alert('Se agrego al carrito ' + cantidad + ' juegos');
    }; */

    function onAdd(cant) {
        console.log(cant)
        addToCart( { ...producto, cantidad: cant } )
      }


    return (
        <Col className="md-3">

            <div className="card mt-5 border-primary shadow bg-white md-3" >
                <div className="card-header">
                    {`${producto.name} - ${producto.categoria}`}
                </div>

                <div className="card-body">

                    <img src={producto.foto} alt='' className='w-25 h-auto d-inline-block' />

                    <Link to={`/detalle/${producto.id}`}>
                        <button className="btn btn-outline-primary btn-block">
                            Detalle
                        </button>
                    </Link>

                    <br />
                    <br />
                    <h4 style={{ color: 'green' }}>${producto.price}</h4>
                    <h4>Stock Disponible : {producto.cantidad}</h4>
                </div>
                <br />
                <div className="card-footer">
                    <ItemCount
                        stock={producto.cantidad}
                        onAdd={onAdd}
                        initial={0}
                    />
                </div>
            </div>
        </Col>
    );
};

export default Item;