import React from 'react';
import { Link } from "react-router-dom"

const Item = ({ productos }) => {


    return (
        <div>
            <div className='col-md-3 p-2'>
                <div className="card w-100 mt-5" >
                    <div className="card-header">
                        {`${productos.nombre} - ${productos.categoria}`}
                    </div>

                    <div className="card-body">

                        <img src={productos.foto} alt='' className='w-50'  />
                        <h4 style={{ color: 'green' }}>${productos.precio}</h4>
                        <h4>Stock Disponible : {productos.cantidad}</h4>
                    </div>

                    <div className="card-footer">
                        <Link to={`/detalle/${productos.id}`}>
                            <button className="btn btn-outline-primary btn-block">
                                Detalle
                            </button>
                        </Link>
                    </div>
                    <br />

                </div>
            </div>
        </div>
    );
};

export default Item;