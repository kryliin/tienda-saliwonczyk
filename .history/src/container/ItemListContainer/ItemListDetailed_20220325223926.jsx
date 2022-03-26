import Modal from 'react-bootstrap/Modal'
import {useState} from 'react'
import {Button} from 'react-bootstrap'
import render from 'dom-serializer';

function Detalles(props) {
    const [show, setShow] = useState(false);
    const { producto } = props;
  console.log('entro al modal' + producto)
    return (
      <>
        <Button variant="primary" onClick={() => setShow(true)}>
        {producto.nombre}
        </Button>
  
        <Modal
          show={show}
          onHide={() => setShow(false)}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
            {producto.nombre}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
            {producto.description}
            </p>
          </Modal.Body>
        </Modal>
      </>
    );
  }
  
  export default Detalles;