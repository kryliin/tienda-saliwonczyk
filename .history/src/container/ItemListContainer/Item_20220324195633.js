import { useState, useEffect } from 'react'
import { getProductos } from '../../helpers/getProductos'
import ItemCount from './ItemCount/ItemCount'


function Item() {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getProductos //simulacion
            .then(resp => setProductos(resp))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }, [])

    return (
        <div>
            {loading ?
                <h2>Tirando Dados...</h2>
                :
                <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                    {productos.map((producto) => <div key={producto.id} className='col-md-4 p-1'>
                        <div className="card w-100 mt-5" >
                            <div className="card-header">
                                {`${producto.name} - ${producto.categoria}`}
                            </div>

                            <div className="card-body">

                                <img resizeMethod = 'contain' src={producto.foto} alt='' className='w-50' />
                                <button className="btn btn-outline-primary btn-block">
                                    Ver Detalle
                                </button>
                                <br />
                                <h4 style={{ color: 'green' }}>${producto.price}</h4>
                                <h4>Stock Disponible : {producto.cantidad}</h4>
                            </div>
                            <br />
                            <div className="card-footer">
                                <ItemCount stock={producto.cantidad} />

                            </div>
                        </div>
                    </div>
                    )}
                </div>

            }

        </div>
    )
} export default Item

