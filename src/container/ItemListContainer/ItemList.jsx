import { useState, useEffect } from 'react'
import { getProductos } from '../../helpers/getProductos'
import Item from './Item.jsx'


function ItemList({ producto }) {
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
                    {productos.map((producto) => <div key={producto.id} className='col-md-3 p-1'>
                        <Item producto={producto}
                        />
                    </div>
                    )}
                </div>
            }
        </div>
    )
} export default ItemList;


