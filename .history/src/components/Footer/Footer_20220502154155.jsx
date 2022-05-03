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
        <img src={Instagram} alt="instagram" to='https://www.instagram.com/christian.saliwonczyk/' />
        <img src={Facebook} alt="facebook" to="https://www.facebook.com/christian.saliwonczyk/" />
        <img src={Wpp} alt="whatsapp" to="https://wa.me/+59899419799" />
      </div>
      <div className="links">
        <Link to={"/"} element={<ItemListContainer />} >
          <span>Todos</span>
        </Link>
        <Link to={"/categoria/Accion"} element={<ItemListContainer />} >
          <span>Ofertas</span>
        </Link>
        <Link to={"/categoria/Estrategia"} element={<ItemListContainer />} >
          <span>Mas Alquilados</span>
        </Link>
        <Link to={"/"} element={<ItemListContainer />} >
          <span>Ultimos</span>
        </Link>
      </div>
      <div className="derechos">
        <h5>Saliwonczyk - Commerce</h5>
        <span href="http://www.charruasistemas.com" /><h5>www.charruasistemas.com</h5>
      </div>
    </div>
  );
}
