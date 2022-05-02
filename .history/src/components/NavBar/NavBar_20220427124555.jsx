import React from 'react'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import CartWidget from './CartWidget'
import { Link, NavLink } from 'react-router-dom'
import Faq from '../Faq/faq'
import QuienesSomos from '../QuienesSomos/QuienesSomos'
import ItemListContainer from '../../container/ItemListContainer/ItemListConteiner'
import Contacto from '../Contacto/Contacto'
import { useCartContext } from '../../context/CartContext'
import './NavBar.css'
/* import Ordenes from '../Ordenes/Ordenes' */

export const NavBar = () => {

    const { cantidadTotalItem } = useCartContext()
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="#home">| Alquileres Saliwonczyk |</Navbar.Brand>
                    <NavLink className="btn btn-dark" to="/" lement={<ItemListContainer />}>Inicio</NavLink>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink className="btn btn-dark" to="/quines" element={<QuienesSomos />}>Fotos</NavLink>
                            <NavLink className="btn btn-dark" to="/faq" element={<Faq />}>F.A.Q</NavLink>
                            <NavLink className="btn btn-dark" to="/contacto" element={<Contacto />}>Contacto</NavLink>
                           {/*  <NavLink className="btn btn-dark" to="/ordenes" element={<Ordenes />}>Ordenes</NavLink> */}
                            <NavDropdown title="Juegos" id="collasible-nav-dropdown">
                                <NavDropdown.Item >
                                    <Link id="RouterNavLink" to="categoria/Familiar">Familiar
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item >
                                    <Link id="RouterNavLink" to="/categoria/Accion">Accion
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link id="RouterNavLink" to="/categoria/Estrategia">Estrategia
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item >
                                    <Link id="RouterNavLink" to="/categoria/Preguntas y Respuestas">Preguntas y Respuestas
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item >
                                    <Link id="RouterNavLink" to="/categoria/Infantiles">Infantiles
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Link id="RouterNavLink" to="/">Ver Todos
                                    </Link>
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Link className="btn btn-dark" to="/usuarios">Usuario</Link>
                            <Link className="btn btn-dark cart" to="/cart">
                                <CartWidget />
                                <div className='icono-carro-cant'>{cantidadTotalItem() !== 0 && `${cantidadTotalItem()} `}
                                </div>
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
export default NavBar;