import { useState } from 'react'
import { Button } from 'react-bootstrap'
import CircularProgressBar from '../ItemCount/CircularProgressBar'
import CartWidget from '../../../components/NavBar/CartWidget'

function ItemCount(props) {
    const { stock, onAdd, initial } = props;
    const [contadorActual, setCount, numero] = useState(initial)


    // const  [porcentaje] = useState(100)
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


    const agregar = () => {
        if (contadorActual >= stock) {
            alert('No hay mas Stock');
            setCount(stock);
        } else {
            setCount(contadorActual + 1)
        }

    }


    const quitar = () => {

        if (contadorActual < 1) {
            alert('No puede ser negativo');
            setCount(0);
        } else {

            setCount(contadorActual - 1)
        }
    }


    return (
        <fieldset>
            <div>
                <Button onClick={() => agregar()} variant="outline-success">+</Button>{' '}
                <br />

                <CircularProgressBar
                    selectedValue={contadorActual}
                    maxValue={stock}
                    activeStrokeColor='#0f4fff'
                    withGradient
                    radius={40}
                />
                <br />

                <Button onClick={() => quitar()} variant="outline-danger">-</Button>{' '}
                <Button variant="outline-danger" onClick={() => { onAdd(contadorActual) }}> <CartWidget />Agregar</Button>{' '}
            </div>
        </fieldset>
    )
}
export default ItemCount