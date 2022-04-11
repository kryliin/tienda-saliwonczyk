import React from 'react'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import CartWidget from './CartWidget'
import { NavLink } from 'react-router-dom'

export const NavBar = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Alquiler Juegos</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink to="../QuienesSomos/QuienesSomos.jsx">¿Quienes Somos?</NavLink>
                            <NavLink to="../Faq/faq.jsx">F.A.Q</NavLink>
                            <NavLink to="../Contacto/contacto.jsx">Contacto</NavLink>
                            <NavDropdown title="Juegos" id="collasible-nav-dropdown">
                                <NavLink to="/categoria/FAMILIAR">
                                    <NavDropdown.Item >Familiar</NavDropdown.Item>
                                </NavLink>
                                <NavLink to="/categoria/ACCION">
                                    <NavDropdown.Item >Accion</NavDropdown.Item>
                                </NavLink>
                                <NavLink to="/categoria/ESTRATEGIA">
                                    <NavDropdown.Item>Estrategia</NavDropdown.Item>
                                </NavLink>
                                <NavLink to="/categoria/CONOCIMIENTO">
                                    <NavDropdown.Item >Preguntas y Respuestas</NavDropdown.Item>
                                </NavLink>
                                <NavLink to="/categoria/INFANTIL">
                                    <NavDropdown.Item >Infantiles</NavDropdown.Item>
                                </NavLink>
                                <NavDropdown.Divider />

                                <NavLink to="../QuienesSomos/QuienesSomos.jsx">
                                    <NavDropdown.Item href="../Juegos/Juegos.jsx">Ver Todos</NavDropdown.Item>
                                </NavLink>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <NavLink href="../Usuarios/Usuarios.jsx">Usuario</NavLink>
                            <NavLink to="../Cart/Cart.jsx">Carrito</NavLink> <CartWidget />
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
export default NavBar;