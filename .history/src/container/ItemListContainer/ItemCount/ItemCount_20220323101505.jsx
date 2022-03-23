import { useState } from 'react'
import { Button } from 'react-bootstrap'
import { CartWidget } from '../../../components/NavBar/CartWidget';
import { CircularProgressBar } from './CircularProgressBar';


function ItemCount(props) {
    const { stock } = props;
    const [contadorActual, setCount, numero] = useState(0)


    const agregar = (numero) => {
        if (contadorActual >= stock) {
            alert('No hay mas Stock');
            setCount(stock);
        } else {
            console.log('numero' + numero);
            if (numero) {
                setCount(contadorActual + numero)
            } else {
                setCount(contadorActual + 1)
            }

        }
    }

    const quitar = (numero) => {

        if (contadorActual < 1) {
            alert('No puede ser negativo');
            setCount(0);
        } else {
            if (numero) {
                setCount(contadorActual - numero)
            } else {
                setCount(contadorActual - 1)
            }
        }
    }

    return (
        <fieldset>
            <div>
                <CircularProgressBar
                    selectedValue={contadorActual}
                    maxValue={stock}
                    activeStrokeColor='#0f4fff'
                    withGradient
                    radius={40}
                />
                <br />
                <br />
                <Button onClick={() => agregar(numero)} variant="outline-success">Agregar</Button>{' '}
                <input size="1"
                    id="numero"
                    value={numero}
                />
                <Button onClick={() => quitar(numero)} variant="outline-danger">Quitar</Button>{' '}
                <Button variant="outline-danger"> <CartWidget />Agregar</Button>{' '}

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

