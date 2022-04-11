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
                                <NavLink to="/categoria/:categoriaId">
                                    <NavDropdown.Item >Familiar</NavDropdown.Item>
                                </NavLink>
                                <NavLink to="/categoria/:categoriaId">
                                    <NavDropdown.Item >Accion</NavDropdown.Item>
                                </NavLink>
                                <NavLink to="/categoria/:categoriaId">
                                    <NavDropdown.Item>Estrategia</NavDropdown.Item>
                                </NavLink>
                                <NavLink to="/categoria/:categoriaId">
                                    <NavDropdown.Item >Preguntas y Respuestas</NavDropdown.Item>
                                </NavLink>
                                <NavLink to="/categoria/:categoriaId">
                                    <NavDropdown.Item >Infantiles</NavDropdown.Item>
                                </NavLink>
                                <NavDropdown.Divider />

                                <NavLink to="/categoria/:categoriaId">
                                    <NavDropdown.Item>Ver Todos</NavDropdown.Item>
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