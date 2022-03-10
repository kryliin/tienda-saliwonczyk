import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg'
import './App.css'

function App() {

  const style = { backgroundColor: 'blue' }

    return (
      <div className="e-Commerce Saliwonczyk">
        <div className="App" style={ style }>
            <NavBar />
     
            <img src={logo} className="App-logo" alt="logo"/>

            </div>

  </div>
    )
}

export default App;


