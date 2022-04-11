import React from 'react'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'

export const NavBar = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Alquiler Juegos</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Link to="../QuienesSomos/QuienesSomos.jsx">¿Quienes Somos?</Link>
                            <Link to="../Faq/faq.jsx">F.A.Q</Link>
                            <Link to="../Contacto/contacto.jsx">Contacto</Link>
                            <Dropdown title="Juegos" id="collasible-nav-dropdown">
                                <Link to="/categoria/:categoriaId">
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
                                <Link to="/categoria/:categoriaId">
                                    <NavDropdown.Item >Infantiles</NavDropdown.Item>
                                </Link>
                                <NavDropdown.Divider />

                                <Link to="/categoria/:categoriaId">
                                    <NavDropdown.Item>Ver Todos</NavDropdown.Item>
                                </Link>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Link to="../Usuarios/Usuarios.jsx">Usuario</Link>
                            <Link to="../Cart/Cart.jsx"><CartWidget /></Link> 
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
export default NavBar;