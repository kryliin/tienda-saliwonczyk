import React, { useState, useEffect } from "react";
import { doc, getDoc, getFirestore } from 'firebase/firestore'


export default function Ordenes() {
    const [ordenes, setOrdenes] = useState([])
    const [loading, setLoading] = useState(true)

    //const [items, setItems] = useState([])

    useEffect(() => {
        const querydb = getFirestore()
        const queryProd = doc(querydb, 'ordenesDeAlquiler')
    
        getDoc(queryProd)
          .then(resp => setOrdenes({ id: resp.id, ...resp.data() }))
          .catch(err => console.log(err))
          .finally(() => setLoading(false))
      }, [])

    return (
        <div className="border">
        {loading ?
          <h2>Buscando Ordenes...</h2> 
          :
         <h1>xx</h1>
        }
      </div>

    );
}
