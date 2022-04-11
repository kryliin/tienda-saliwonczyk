import React from 'react'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import CartWidget from './CartWidget'
import { Link, NavLink } from 'react-router-dom'

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
                                <NavDropdown.Item to="/categoria/FAMILIAR">Familiar</NavDropdown.Item>
                                <NavDropdown.Item to="/categoria/ACCION">Accion</NavDropdown.Item>
                                <NavDropdown.Item to="/categoria/ESTRATEGIA">Estrategia</NavDropdown.Item>
                                <NavDropdown.Item to="/categoria/CONOCIMIENTO">Preguntas y Respuestas</NavDropdown.Item>
                                <NavDropdown.Item to="/categoria/INFANTIL">Infantiles</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="../Juegos/Juegos.jsx">Ver Todos</NavDropdown.Item>
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