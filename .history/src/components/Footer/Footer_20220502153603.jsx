import React from "react";
import { Link } from "react-router-dom";
import "../Footer/footer.css";
import ItemListContainer from '../../container/ItemListContainer/ItemListConteiner'
//LOGOS
import Instagram from "../logos/ig.png";
import Facebook from "../logos/fb.png";
import Wpp from "../logos/wp.png";

export default function Footer() {
  return (
    <div className="footer">
      <div className="redes">
        <img src={Instagram} alt="instagram" link='https://www.instagram.com/christian.saliwonczyk/' target="_blank" rel="noopener noreferrer"/>
        <img src={Facebook} alt="facebook" href="https://www.facebook.com/christian.saliwonczyk/" target="_blank" rel="noopener noreferrer"/>
        <img src={Wpp} alt="whatsapp" href="https://wa.me/+59899419799" target="_blank" rel="noopener noreferrer"/>
      </div>
      <div className="links">
        <Link to={"/categoria/todos"} element={<ItemListContainer/>} >
          <span>Todos</span>
        </Link>
        <Link to={"/categoria/todos"} element={<ItemListContainer/>} >
          <span>Ofertas</span>
        </Link>
        <Link to={"/categoria/todos"} element={<ItemListContainer/>} >
          <span>Mas Alquilados</span>
        </Link>
        <Link to={"/categoria/todos"} element={<ItemListContainer/>} >
          <span>Ultimos</span>
        </Link>
      </div>
      <div className="derechos">
        <h5>Saliwonczyk - Commerce</h5>
        <span href="http://www.charruasistemas.com"/><h5>www.charruasistemas.com</h5>
      </div>
    </div>
  );
}
