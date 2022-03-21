import { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import CircularProgressBar from '../ItemCount/CircularProgressBar'
import CartWidget from '../../../components/NavBar/CartWidget'

export const ItemCount = (props) => {



    return (
        <fieldset>
       {/*      <div>

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

            </div>*/}
        </fieldset> 
    )
}
export default ItemCount