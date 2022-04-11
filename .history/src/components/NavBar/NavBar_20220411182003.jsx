import React from 'react'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'
import Faq from './Faq/faq'
import QuienesSomos from './QuienesSomos/QuienesSomos'
import ItemListContainer from '..ItemListContainer'


export const NavBar = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand to="/">Alquiler Juegos</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Link className="btn btn-dark" to="/quienesSomos"><QuienesSomos/>¿Quienes Somos?</Link>
                            <Link className="btn btn-dark" to="/faq"><Faq/>F.A.Q</Link>
                            <Link className="btn btn-dark" to="/contacto">Contacto</Link>
                            <NavDropdown title="Juegos" id="collasible-nav-dropdown">
                                <Link to="/categoria/:categoriaId">
                                <ItemListContainer
                                greeting='Bienvenidos....'
                            />
                                    <NavDropdown.Item >Familiar</NavDropdown.Item>
                                </Link>
                                <Link to="/categoria/:categoriaId">
                                    <NavDropdown.Item >Accion</NavDropdown.Item>
                                </Link>
                                <Link to="/categoria/:categoriaId">
                                    <NavDropdown.Item>Estrategia</NavDropdown.Item>
                                </Link>
                                <Link to="/categoria/:categoriaId">
                                    <NavDropdown.Item >Preguntas y Respuestas</NavDropdown.Item>
                                </Link>
                                <Link to="/categoria/:categoriaId" >
                                    <NavDropdown.Item >Infantiles</NavDropdown.Item>
                                </Link>
                                <NavDropdown.Divider />

                                <Link to="/categoria/:categoriaId">
                                    <NavDropdown.Item>Ver Todos</NavDropdown.Item>
                                </Link>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Link className="btn btn-dark" to="/usuarios">Usuario</Link>
                            <Link className="btn btn-dark" to="/cart"><CartWidget /></Link> 
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
export default NavBar;