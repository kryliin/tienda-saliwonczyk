import { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import CircularProgressBar from '../ItemCount/CircularProgressBar'
import CartWidget from '../../../components/NavBar/CartWidget'

export const ItemCount = (props) => {
    const { stock } = props;
    const [contadorActual, setCount] = useState(0)
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

                <Button onClick={contar(this.state.numero)} variant="outline-success">Agregar</Button>{' '}
                <input
                    id="numero"
                    value={this.state.numero}
                />
                <Button onClick={quitar(this.state.numero)} variant="outline-danger">Quitar</Button>{' '}
                <Button variant="outline-danger"> <CartWidget /></Button>{' '}

            </div>
        </fieldset>
    )
}
export default ItemCount