import React from 'react'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

export const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Alquiler Juegos</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="../QuienesSomos/QuienesSomos.jsx">¿Quienes Somos?</Nav.Link>
                      
                        <Nav.Link href="../Faq/Faq.jsx">F.A.Q</Nav.Link>
                        <Nav.Link href="../Contacto/contacto.jsx">Contacto</Nav.Link>
                        <NavDropdown title="Juegos" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#">Arcade</NavDropdown.Item>
                            <NavDropdown.Item href="#">Accion</NavDropdown.Item>
                            <NavDropdown.Item href="#">Estrategia</NavDropdown.Item>
                            <NavDropdown.Item href="#">Preguntas y Respuestas</NavDropdown.Item>
                            <NavDropdown.Item href="#">Infantiles</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="../Juegos/Juegos.jsx">Ver Todos</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                    <Nav.Link href="../Usuarios/Usuarios.jsx">Usuario</Nav.Link>
                        <Nav.Link eventKey={2} href="#carrito">
                            Carrito
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}
export default NavBar;