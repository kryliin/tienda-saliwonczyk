import React, { useState, useEffect } from "react";
import ItemDetailed from './ItemDetailed'
import { useParams } from 'react-router-dom'
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import './ItemDetailed.css'
import swal from 'bootstrap-sweetalert'


const ItemDetailedConteiner = () => {
  const [producto, setProducto] = useState({})
  const [loading, setLoading] = useState(true)

  const { detalleId } = useParams()

  useEffect(() => {
    const querydb = getFirestore()
    const queryProd = doc(querydb, 'Juegos', detalleId)

    getDoc(queryProd)
      .then(resp => setProducto({ id: resp.id, ...resp.data() }))
      .catch(err => swal({
        title: "Oops!",
        text: err,
        icon: "error",
        button: "Entiendo",
        confirmButtonClass: "btn-warning",
        buttonText: 'Entiendo'
    }))
      .finally(() => setLoading(false))
  }, [detalleId])


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

