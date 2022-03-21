import { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import CircularProgressBar from '../ItemCount/CircularProgressBar'
import CartWidget from '../../../components/NavBar/CartWidget'

export const ItemCount = (props) => {
    const { stock } = props.stock;
    const [contadorActual, setCount, numero] = useState(0)
    // const  [porcentaje] = useState(100)

    useEffect(() => {
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

    const contar = (numero) => {
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

                <Button onClick={contar()} variant="outline-success">Agregar</Button>{' '}
                <input
                    id="numero"
                    value={numero}
                />
                <Button onClick={quitar()} variant="outline-danger">Quitar</Button>{' '}
                <Button variant="outline-danger"> <CartWidget /></Button>{' '}

            </div>
        </fieldset> 
    )
}
export default ItemCount