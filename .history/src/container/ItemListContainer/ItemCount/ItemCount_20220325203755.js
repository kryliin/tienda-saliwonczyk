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
            <Button onClick={() => agregar(numero)} variant="outline-success">Agregar</Button>{' '}
            <br />
              
                <CircularProgressBar
                    selectedValue={contadorActual}
                    maxValue={stock}
                    activeStrokeColor='#0f4fff'
                    withGradient
                    radius={40}
                />
                <br />
                <Button onClick={() => quitar(numero)} variant="outline-danger">Quitar</Button>{' '}
                <Button variant="outline-danger"  onClick={() => { onAdd(contadorActual)}}> <CartWidget />Agregar</Button>{' '}
            </div>
        </fieldset>
    )
}
export default ItemCount