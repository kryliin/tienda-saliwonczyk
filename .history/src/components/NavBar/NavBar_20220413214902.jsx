import React from 'react'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import CartWidget from './CartWidget'
import { Link, NavLink } from 'react-router-dom'
import Faq from '../Faq/faq'
import QuienesSomos from '../QuienesSomos/QuienesSomos'
import ItemDetailedConteiner from '../../container/ItemDetailsConteiner/ItemDetailedConteiner'
import ItemListContainer from '../../container/ItemListContainer/ItemListConteiner'
import Contacto from '../Contacto/Contacto'

export const NavBar = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <NavLink className="btn btn-dark" to="/" lement={<ItemListContainer />}>Alquiler Juegos</NavLink>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink className="btn btn-dark" to="/quines" element={<QuienesSomos />}>¿Quienes Somos?</NavLink>
                            <NavLink className="btn btn-dark" to="/faq" element={<Faq />}>F.A.Q</NavLink>
                            <NavLink className="btn btn-dark" to="/contacto" element={<Contacto />}>Contacto</NavLink>
                          
                            <NavDropdown title="Juegos" id="collasible-nav-dropdown">

                                <NavLink to="/detalle/:detalleId" element={<ItemDetailedConteiner detalleID={'Familiar'}/>}>
                                    <NavDropdown.Item >Familiar</NavDropdown.Item>
                                </NavLink>
                                <NavLink to="/detalle/:detalleId" element={<ItemDetailedConteiner detalleID={'Accion'}/>}>
                                    <NavDropdown.Item >Accion</NavDropdown.Item>
                                </NavLink >
                                <NavLink to="/detalle/:detalleId" element={<ItemDetailedConteiner detalleID={'Estrategia'}/>}>
                                    <NavDropdown.Item>Estrategia</NavDropdown.Item>
                                </NavLink>
                                <NavLink to="/detalle/:detalleId" element={<ItemDetailedConteiner detalleID={'Preguntas y Respuestas'}/>}>
                                    <NavDropdown.Item >Preguntas y Respuestas</NavDropdown.Item>
                                </NavLink>
                                <NavLink to="/detalle/:detalleId" element={<ItemDetailedConteiner detalleID={'Infantiles'}/>}>
                                    <NavDropdown.Item >Infantiles</NavDropdown.Item>
                                </NavLink>
                                <NavDropdown.Divider />

                            
                                <NavLink to="/" element={<ItemListContainer />}>
                                    <NavDropdown.Item>Ver Todos</NavDropdown.Item>
                                </NavLink>

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