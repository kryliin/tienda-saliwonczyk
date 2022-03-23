import { useState, useEffect } from 'react'
import { getProductos } from '../../helpers/getProductos'
import Count from '../container/ItemListContainer/ItemCount/ItemCount.js'

function ItemListContainer({ greeting, titulo }) {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getProductos // funcion que simula una api
            // .then(resp =>{ 
            //     //throw new Error('ESto es un error')//insatanciando un error
            //     console.log(resp)
            //     return resp
            // })
            .then(resp => setProductos(resp))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }, [])


    console.log(productos)
    return (
        <div>
            {greeting}<hr />
            {/* [1,2,3] => [<li>1</li>,<li>2</li>...] */}
            {/* { [1,2,3,4].map((nro)=> <li key={nro} >{nro}</li> ) }           */}
            {loading ?
                <h2>Cargando...</h2>
                :
                <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                    {productos.map((producto) => <div key={producto.id} className='col-md-4 p-1'>
                        <div className="card w-100 mt-5" >
                            <div className="card-header">
                                {`${producto.name} - ${producto.categoria}`}
                            </div>
                            <div className="card-body">
                                <img src={producto.foto} alt='' className='w-50' />
                                {producto.price}
                            </div>

                            <div className="card-footer">
                                <button className="btn btn-outline-primary btn-block">
                                    detalle del producto
                                </button>
                            </div>
                        </div>
                    </div>
                    )}
                </div>

            }
         {/*    <Count
                stock={12}
            /> */}
        </div>
    )
}

export default ItemListContainer