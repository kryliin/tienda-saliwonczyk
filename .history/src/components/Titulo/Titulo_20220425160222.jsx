import './Titulo.css'
import '../../App.css'
import foto from '../logos/fondo.jpg'

function Titulo({ tituloProps }) {
  return (
    <div className='titulo'>
      <img align='center' src={foto} className="imgFondo" alt="logo" />
      <h1>{tituloProps}</h1>

    </div>
  )
}
export default Titulo