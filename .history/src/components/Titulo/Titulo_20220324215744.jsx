import './Titulo.css'
import logo from '../../logo.svg'
import '../../App.css'

function Titulo({ tituloProps }) {
  return (
    <div className='titulo'>
      <img align='left' src={logo} className="App-logo" alt="logo" />    &nbsp;   &nbsp;
      <div>
        <h1>{tituloProps}</h1>
      </div>
    </div>
  )
}
export default Titulo