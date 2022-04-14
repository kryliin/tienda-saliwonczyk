
import React, { useState, useEffect } from "react";
import ItemDetailed from './ItemDetailed'
import { doc, getDoc, getFirestore } from 'firebase/firestore'


const ItemDetailedConteiner = (detalleId) => {
  const [unProducto, setProducto] = useState([])
  const [loading, setLoading] = useState(true)


  useEffect(()=>{
    const querydb = getFirestore() 
    const queryProd = doc(querydb, 'Juegos', 'EPkhNStbu0lyHZyPABD0')

    getDoc(queryProd)
    .then(resp => setProducto(  { id: resp.id, ...resp.data() }  ))
    .catch(err => console.log(err))
    .finally(() => setLoading(false))
}, [detalleId])

console.log(detalleId)
  return (
    <div>
        <div>
            {loading ?
                <h2>Tirando Dados...</h2>
                :
                <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                    {unProducto.map((productos) => <div key={productos.id} className='col-md-3 p-1'>
                      <ItemDetailed productos={productos}/>
                    </div>
                    )}
                </div>
            }
        </div>
    
    </div>
  );
};


export default ItemDetailedConteiner;






/* import Modal from 'react-bootstrap/Modal'
import { useState } from 'react'
import { Button } from 'react-bootstrap'

import ModalHeader from 'react-bootstrap/ModalHeader'
import ModalTitle from 'react-bootstrap/ModalTitle'
import ModalBody from 'react-bootstrap/ModalBody'
import ModalFooter from 'react-bootstrap/ModalFooter'


function Detalles({ producto }) {
  const [show, setShow] = useState(false);


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log(producto)

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        {producto.nombre}
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <ModalHeader closeButton>
          <ModalTitle id="example-custom-modal-styling-title">
            {producto.nombre}
          </ModalTitle>
        </ModalHeader>
        <ModalBody>
          <p>
            {producto.description}
          </p>
        </ModalBody>
        <ModalFooter>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>

        </ModalFooter>
      </Modal>
    </>
  )
};

export default Detalles; */