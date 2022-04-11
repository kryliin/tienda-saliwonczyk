import React from 'react'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import CartWidget from './CartWidget'
import { NavDropdownItem, NavLink } from 'react-router-dom'

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
                                <NavDropdownItem to="/categoria/FAMILIAR">Familiar</NavDropdownItem>
                                <NavDropdownItem to="/categoria/ACCION">Accion</NavDropdownItem>
                                <NavDropdownItem to="/categoria/ESTRATEGIA">Estrategia</NavDropdownItem>
                                <NavDropdownItem to="/categoria/CONOCIMIENTO">Preguntas y Respuestas</NavDropdownItem>
                                <NavDropdownItem to="/categoria/INFANTIL">Infantiles</NavDropdownItem>
                                <NavDropdown.Divider />
                                <NavDropdownItem href="../Juegos/Juegos.jsx">Ver Todos</NavDropdownItem>
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