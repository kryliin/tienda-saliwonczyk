import { React, useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import CircularProgressBar from './CircularProgressBar.tsx'
import CartWidget from '../../../components/NavBar/CartWidget'

function ItemListCount({stock}) {
    const [contadorActual, setCount, numero] = useState(0)
    // const  [porcentaje] = useState(100)

    useEffect(() => {
        return () => {
            console.log('Contador a cero')
        }
    })

    useEffect(() => {
        console.log('dependencia vacia')
    }, [])

    const contar = (numero) => {
        if (numero) {
            setCount(contadorActual + numero)
        } else {
            setCount(contadorActual + 1)
        }
    }

    const quitar = (numero) => {
        if (numero) {
            setCount(contadorActual - numero)
        } else {
            setCount(contadorActual - 1)
        }
    }

    useEffect(() => {
        if (contadorActual > stock) {
            alert('No hay mas Stock');
            setCount(stock);
        } else {
            if (contadorActual < 0)
                alert('No puede ser negativo');
            setCount(0);
        }
    }, [contadorActual, stock, setCount]);

    return (
        <>
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

                    <Button onClick={contar(numero)} variant="outline-success">Agregar</Button>{' '}
                    <input
                        id="numero"
                        value={numero}
                    />
                    <Button onClick={quitar(numero)} variant="outline-danger">Quitar</Button>{' '}
                    <Button variant="outline-danger"> <CartWidget /></Button>{' '}

                </div>
            </fieldset>
        </>
    );
}
export default ItemListCount



