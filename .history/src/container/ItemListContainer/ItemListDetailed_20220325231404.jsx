import Modal from 'react-bootstrap/Modal'
import { useState } from 'react'
import { Button } from 'react-bootstrap'

import ModalHeader from 'react-bootstrap/ModalHeader'
import ModalTitle from 'react-bootstrap/ModalTitle'
import ModalBody from 'react-bootstrap/ModalBody'
import ModalFooter from 'react-bootstrap/ModalFooter'


function Detalles({props}) {
  const [show, setShow] = useState(false);
  const { producto } = props;

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
  );
}

export default Detalles;