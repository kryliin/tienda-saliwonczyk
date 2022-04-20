import React from "react";
import { Link } from "react-router-dom";
import "../Footer/footer.css";

//LOGOS
import Instagram from "../logos/ig.png";
import Facebook from "../logos/fb.png";
import Wpp from "../logos/wp.png";

export default function Footer() {
  return (
    <div className="footer">
      <div className="redes">
        <img src={Instagram} alt="instagram" href="#"/>
        <img src={Facebook} alt="facebook" href="#"/>
        <img src={Wpp} alt="whatsapp" href="#"/>
      </div>
      <div className="links">
        <Link to={"/category/all"}>
          <span>Todos</span>
        </Link>
        <Link to={"/category/Nike"}>
          <span>Ofertas</span>
        </Link>
        <Link to={"/category/Jordan"}>
          <span>Mas Alquilados</span>
        </Link>
        <Link to={"/category/Yeezy"}>
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
