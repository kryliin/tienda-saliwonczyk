import './Titulo.css'
import logo from '../../logo.svg'
import '../../App.css'

function Titulo({ tituloProps }) {
  return (
    <div className='titulo'>
      <img align='left' src={logo} className="App-logo" alt="logo" />    &nbsp;   &nbsp;
        <h1>{tituloProps}</h1>
    </div>
  )
}
export default Titulo