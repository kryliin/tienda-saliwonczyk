import './Titulo.css'
import logo from '../../logo.svg'
import '../../App.css'
import foto from './Imagenes/fondo.jpg'

function Titulo({ tituloProps }) {
  return (
    <div className='titulo'>
      <img align='center' src={foto} className="App-logo" alt="logo" />
      <h1>{tituloProps}</h1>

    </div>
  )
}
export default Titulo