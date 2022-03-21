import { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import CircularProgressBar from '../ItemCount/CircularProgressBar'
import CartWidget from '../../../components/NavBar/CartWidget'

function ItemCount(props) {
    const { stock } = props.stock;
    const [contadorActual, setCount, numero] = useState(0)

    // const  [porcentaje] = useState(100)

    /*     useEffect(() => {
            if (contadorActual > stock) {
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
           }, [stock, contadorActual,setCount])
     */

/*     useEffect(() => {
        return () => {
            console.log('volver a cero todo')
            setCount(0)
        }
    }) */


    const agregar = (numero) => {
        console.log(numero);
        if (numero) {
            setCount(contadorActual + numero)
        } else {
            setCount(contadorActual + 1)
        }
        return () => {
            console.log('agrego')
        }

    }

    const quitar = (numero) => {
        if (numero) {
            setCount(contadorActual - numero)
        } else {
            setCount(contadorActual - 1)
        }
        return () => {
            console.log('quito')
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
                <Button variant="outline-danger"> <CartWidget /></Button>{' '}

            </div>
        </fieldset>
    )
}
export default ItemCount