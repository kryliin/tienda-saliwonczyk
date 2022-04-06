import React from 'react'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import CartWidget from './CartWidget'

export const NavBar = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Alquiler Juegos</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link to="../QuienesSomos/QuienesSomos.jsx">¿Quienes Somos?</Nav.Link>
                            <Nav.Link to="../Faq/faq.jsx">F.A.Q</Nav.Link>
                            <Nav.Link to="../Contacto/contacto.jsx">Contacto</Nav.Link>

                            <Nav.Link to="/categoria/FAMILIAR">Familiar</Nav.Link>
                            <Nav.Link to="/categoria/ESTRATEGIA">Estrategia</Nav.Link>
                            <Nav.Link to="/categoria/CONOCIMIENTO">Preguntas y Respuestas</Nav.Link>
                            <Nav.Link to="/categoria/INFANTIL">Infantiles</Nav.Link>

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
                            <Nav.Link href="../Usuarios/Usuarios.jsx">Usuario</Nav.Link>
                            <CartWidget />
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
export default NavBar;