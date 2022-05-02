
import React, { useState, useEffect } from "react";
import ItemDetailed from './ItemDetailed'
import { useParams } from 'react-router-dom'
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import './ItemDetailed.css'


const ItemDetailedConteiner = () => {
  const [producto, setProducto] = useState({})
  const [loading, setLoading] = useState(true)

  const { detalleId } = useParams()

  useEffect(() => {
    const querydb = getFirestore()
    const queryProd = doc(querydb, 'Juegos', detalleId)

    getDoc(queryProd)
      .then(resp => setProducto({ id: resp.id, ...resp.data() }))
      .catch(err => console.log(err))
      .finally(() => setLoading(false))
  }, [detalleId])

  console.log(detalleId)
  return (
    <>
      {loading ?
        <h2>Tirando Dados...</h2> :
        <ItemDetailed producto={producto} />
      }
  </>
  );
};


export default ItemDetailedConteiner;

