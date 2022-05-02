import React, { useState, useEffect } from "react";
import { doc, getFirestore, getDoc } from 'firebase/firestore'

import Orden from './Orden' 

export default function Ordenes() {
    const [producto, setProducto] = useState({})
    const [loading, setLoading] = useState(true)
  

  
    useEffect(() => {
      const querydb = getFirestore()
      const queryProd = doc(querydb, 'ordenesDeAlquiler')
  
      getDoc(queryProd)
        .then(resp => setProducto({ id: resp.id, ...resp.data() }))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
    }, [])
  
    console.log()

    console.log("ordenes" + producto)
    return (
        <div className="border">
            {loading ?
                <h2>Buscando Ordenes...</h2>
                :
                <>
                    {producto.map((order) => <Orden key={order.id} ordenes={order} />)} 
                </>
            }
        </div>

    );
}
