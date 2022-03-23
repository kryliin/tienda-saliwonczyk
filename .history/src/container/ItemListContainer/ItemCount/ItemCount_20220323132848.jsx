import { useState } from 'react'
import { Button } from 'react-bootstrap'
import CircularProgressBar from '../../../components/NavBar/CircularProgressBar';
import CartWidget from '../../../components/NavBar/CartWidget';


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
               
             
                <Button size="sm" onClick={() => agregar(numero)} variant="outline-success">+</Button>{' '}
                <input size="1"
                    id="numero"
                    value={numero}
                />
                <Button size="sm" onClick={() => quitar(numero)} variant="outline-danger">-</Button>{' '}
                <br/>
                <CircularProgressBar
                    selectedValue={contadorActual}
                    maxValue={stock}
                    activeStrokeColor='#0f4fff'
                    withGradient
                    radius={40}
                />
                <br/>
                <br/>
                <Button variant="btn-outline-primary">
                    <CartWidget name={"Agregar"}/>
                </Button>{' '}


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

