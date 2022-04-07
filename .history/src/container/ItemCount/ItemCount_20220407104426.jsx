import { useState } from 'react'
import { Button } from 'react-bootstrap'
import CircularProgressBar from '../../components/NavBar/CircularProgressBar';
import CartWidget from '../../components/NavBar/CartWidget';


function ItemCount(props) {
    const { stock, onAdd, initial } = props;
    const [contadorActual, setCount] = useState(initial)


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


                <Button size="sm" onClick={() => quitar()} variant="outline-danger">-</Button>{' '}
                <CircularProgressBar
                    selectedValue={contadorActual}
                    maxValue={stock}
                    activeStrokeColor='#0f4fff'
                    withGradient
                    radius={40}
                />
                &nbsp;
                <Button size="sm" onClick={() => agregar()} variant="outline-success">+</Button>{' '}

                <br />
                <br />
                <div className="d-grid gap-2">
                    <Button variant="secondary" onClick={() => { onAdd(contadorActual) }}>
                        <CartWidget name={"Agregar"} />
                    </Button>{' '}
                </div>

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

