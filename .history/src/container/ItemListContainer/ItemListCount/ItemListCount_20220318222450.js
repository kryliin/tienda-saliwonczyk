import { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import CircularProgressBar from './CircularProgressBar.tsx'
import CartWidget from '../../../components/NavBar/CartWidget'

export const ItemListCount = (props) => {
    const { stock } = props;
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

    const contar = () => {
   
            setCount(contadorActual + 1)
        }
    

    const quitar = (numero) => {
    
            setCount(contadorActual - 1)
 
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
        
                <Button onClick={quitar()} variant="outline-danger">Quitar</Button>{' '}
                <Button variant="outline-danger"> <CartWidget /></Button>{' '}

            </div>
        </fieldset>
    )
}
export default ItemListCount