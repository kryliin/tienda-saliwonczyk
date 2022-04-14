import ItemList from './ItemList'
import React, { useState, useEffect } from "react";
import { collection, doc, getDoc, getDocs, getFirestore, limit, query, where } from 'firebase/firestore'

function ItemListContainer({ greeting }) {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const [bool, setBool] = useState(true)
    //const [items, setItems] = useState([])


    useEffect(()=>{
        const querydb = getFirestore() 
        const queryCollection = collection(querydb, 'Juegos')
        const queryFilter = query(queryCollection, 
          //  where('categoria','==', 'Estrategia'),            
            limit(10)
        )

        getDocs(queryFilter)
        .then(resp => setProductos( resp.docs.map(item => ( { id: item.id, ...item.data() } ) ) ))
        .catch(err => console.log(err))
        .finally(() => setLoading(false)) 
    }, [])


 //ejemplo de evento
/*  const handleClick=(e)=>{
    e.preventDefault() 
    setBool(!bool)
} */

const handleAgregar=()=>{
    setProductos([
        ...productos,
        { id: '10', descripcion: 'El Erudito es un juego de mesa de preguntas en donde no gana el que más sabe sino el que mejor razona. Es ideal para jugar en equipos. Un juego de mesa que combina ingenio, cultura general y apuestas en más de mil consignas. Según el casillero, se apostará un monto y se deberá responder una de las tarjetas. Una de las características más particulares de este juego de mesa es que las preguntas en vez de estar agrupadas de manera clásica por área: espectáculos, deporte, historia, etc. están agrupadas por formato de pregunta: Secuencia, En común, Asociación y Aproximación. ', categoria: 'FAMILIAR', compania: "MALDON", name: "El Erudito", cantidad: 16, price: 3200, foto: "./Imagenes/elerudito.jpeg" },
    ])
}

console.log('producto' + productos)

    return (
        <div>
            {greeting}<hr />
        {/*     <button onClick={handleClick}>Cambiar estado </button>            */}
            <button onClick={handleAgregar}>Agregar Item </button>
            {loading ?
                <h2>Tirando Dados...</h2>
                :
                <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }} className='col-md-4 p-1'>
                    <ItemList productos={productos} />
                </div>
            }
        </div>
    )
}

export default ItemListContainer


