import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import React, { useState, useEffect } from "react";
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'

function ItemListContainer({ greeting  }) {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    //const [items, setItems] = useState([])

    const { categoriaId } = useParams()    
    
    useEffect(()=> {
        const querydb = getFirestore() 
        const queryCollection = collection(querydb, 'Juegos')
        const queryFilter =  categoriaId ? 
                                    query(queryCollection,                 
                                        where('categoria','==', categoriaId)
                                    )   
                                :
                                queryCollection    
    
        getDocs(queryFilter)
        .then(resp => setProductos( resp.docs.map(item => ( { id: item.id, ...item.data() } ) ) ))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))          
    }, [categoriaId])


 //ejemplo de evento
/*  const handleClick=(e)=>{
    e.preventDefault() 
    setBool(!bool)
} */

/* const handleAgregar=()=>{
    setProductos([
        ...productos,
        { id: '10', descripcion: 'El Erudit. ', categoria: 'FAMILIAR', compania: "MALDON", name: "El Erudito", cantidad: 16, price: 3200, foto: "./Imagenes/elerudito.jpeg" },
    ])
} */

console.log('producto' + productos)

    return (
        <div>
            {greeting}<hr />
        {/*     <button onClick={handleClick}>Cambiar estado </button>            */}
      {/*  <button onClick={handleAgregar}>Agregar Item </button> */}
            {loading ?
                <h2>Tirando Dados...</h2>
                :
                <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
                    <ItemList productos={productos} />
                </div>
            }
        </div>
    )
}

export default ItemListContainer


