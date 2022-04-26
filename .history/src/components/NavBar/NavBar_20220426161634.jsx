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



export const NavBar = () => {

    const { cantidadTotalItem } = useCartContext()
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <NavLink className="btn btn-dark" to="/" lement={<ItemListContainer />}>Alquiler Juegos</NavLink>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink className="btn btn-dark" to="/quines" element={<QuienesSomos />}>Fotos</NavLink>
                            <NavLink className="btn btn-dark" to="/faq" element={<Faq />}>F.A.Q</NavLink>
                            <NavLink className="btn btn-dark" to="/contacto" element={<Contacto />}>Contacto</NavLink>

                            {/* 
                            <Link to={`/detalle/${productos.id}`}> */}


                            <NavDropdown title="Juegos" id="collasible-nav-dropdown">
                                <Link id="RouterNavLink" to="categoria/Familiar">
                                    <NavDropdown.Item >Familiar</NavDropdown.Item>
                                </Link>
                                <Link id="RouterNavLink" to="/categoria/Accion">
                                    <NavDropdown.Item >Accion</NavDropdown.Item>
                                </Link >
                                <Link id="RouterNavLink" to="/categoria/Estrategia">
                                    <NavDropdown.Item>Estrategia</NavDropdown.Item>
                                </Link>
                                <Link id="RouterNavLink" to="/categoria/Preguntas y Respuestas">
                                    <NavDropdown.Item >Preguntas y Respuestas</NavDropdown.Item>
                                </Link>
                                <Link id="RouterNavLink"  to="/categoria/Infantiles">
                                    <NavDropdown.Item >Infantiles</NavDropdown.Item>
                                </Link>
                                <NavDropdown.Divider />
                                <Link id="RouterNavLink" to="/">
                                    <NavDropdown.Item>Ver Todos</NavDropdown.Item>
                                </Link>
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