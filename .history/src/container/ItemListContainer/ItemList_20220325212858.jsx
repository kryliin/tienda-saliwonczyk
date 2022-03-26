import { useState, useEffect } from 'react'
import { getProductos } from '../../helpers/getProductos'
import ItemCount from './ItemCount/ItemCount'

function ItemList() {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const onAdd = (cantidad) => {
        alert('Se agrego al carrito ' + cantidad + ' juegos');
    };

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
                   
                    </div>
                    )}
                </div>
            }
        </div>
    )
} export default ItemList;


