import { useState } from 'react'
import { Button } from 'react-bootstrap'
import CircularProgressBar from '../../components/NavBar/CircularProgressBar';
import CartWidget from '../../components/NavBar/CartWidget';
import ItemListContainer from '../ItemListContainer/ItemListConteiner.jsx'
import { Link } from 'react-router-dom'
import swal from 'bootstrap-sweetalert'


function ItemCount({ initial, stock, onAdd }) {
    const [contadorActual, setCount] = useState(initial)


    const agregar = () => {
        if (contadorActual >= stock) {
            swal({
                title: "Oops!",
                text: "No hay mas Stock!",
                icon: "error",
                confirmButtonClass: "btn-warning",
                buttonText: 'Entiendo'

            });
            setCount(stock);
        } else {

            setCount(contadorActual + 1)
        }

    }

    const quitar = () => {
        if (contadorActual < 1) {
            swal({
                title: "Oops!",
                text: "No puede ser negativo!",
                icon: "error",
                button: "Entiendo",
                confirmButtonClass: "btn-warning",
                buttonText: 'Entiendo'
            });
            setCount(0);
        } else {
            setCount(contadorActual - 1)
        }
    }


    const add = () => {
        if (contadorActual < 1) {
            swal({
                title: "Oops!",
                text: "Debe Elegir Al Menos 1!",
                icon: "error",
                button: "Entiendo",
                confirmButtonClass: "btn-warning",
                buttonText: 'Entiendo'
            });
            setCount(0);
        } else {
            onAdd(contadorActual)
        }

    }

    return (
        <fieldset>
            <div>
                <Button size="sm" onClick={() => quitar()} variant="outline-danger">-</Button>{' '}
                <CircularProgressBar
                    selectedValue={contadorActual}
                    maxValue={stock}
                    activeStrokeColor='#198754'
                    inactiveStrokeColor='#adadad'
                    withGradient
                    radius={40}
                />
                &nbsp;
                <Button size="sm" onClick={() => agregar()} variant="outline-success">+</Button>{' '}

                <br />

                <br />
                <button className="btn btn-success" size="lg" onClick={add}>
                    <CartWidget name={"Agregar"} />
                </button>{' '}
                <button className="btn btn-dark" size="lg">
                    <Link className="btn btn-dark" to="/" element={<ItemListContainer />}>Tienda</Link>
                </button>
                <button className="btn btn-success" size="lg">
                    <Link className="btn btn-success" to="/cart">Ir al Carrito</Link>
                </button>

            </div>
        </fieldset>
    )
}
export default ItemCount



/*
    useEffect(() => {
        console.log('stock' + stock);
        if (contadorActual >= stock) {
            alert('No hay mas Stock');
            setCount(stock);
        } else {
            if (contadorActual < 0)
                alert('No puede ser negativo');
            setCount(0);
        }
        return () => {
            console.log('controlo stock')
        }
    }, [stock, contadorActual, setCount]) */


/*     useEffect(() => {
        return () => {
            console.log('volver a cero todo')
            setCount(0)
        }
    }) */

