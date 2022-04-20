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
        <img src={Instagram} alt="instagram" href="https://www.instagram.com/christian.saliwonczyk/"/>
        <img src={Facebook} alt="facebook" href="https://www.facebook.com/christian.saliwonczyk/"/>
        <img src={Wpp} alt="whatsapp" href="https://wa.me/+59899419799"/>
      </div>
      <div className="links">
        <Link to={"/categoria/todos"}>
          <span>Todos</span>
        </Link>
        <Link to={"/categoria/todos"}>
          <span>Ofertas</span>
        </Link>
        <Link to={"/categoria/todos"}>
          <span>Mas Alquilados</span>
        </Link>
        <Link to={"/categoria/todos"}>
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
