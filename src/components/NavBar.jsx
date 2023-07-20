import { Link } from "react-router-dom";
import "../assets/styles/navbar.css";
import { useState } from "react";

export const NavBar = () => {

  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className='nav-container'>
        <nav className={`nav-bar ${isMenuOpen ? "nav-bar--show" : ""}`}>
          <div className="toggle-menu" id="toggle-menu" onClick={handleToggleMenu}>
            <i class="fa-solid fa-bars"></i>
          </div>
            <Link to="/portfolio" className="nav-logo">
                <h1>KMY</h1>
            </Link>
            <ul className={`nav-menu ${isMenuOpen ? "nav-menu--show" : ""}`} id="nav-menu">
                <li><Link to="/portfolio">Inicio</Link></li>
                <li><Link to="/about">Sobre mi</Link></li>
                <li><Link to="/works">Trabajos</Link></li>
                <li><a href='https://drive.google.com/file/d/1DxmEwEBUrtMJem9g1lYS_Hy19uyi5Ksx/view?usp=sharing' target='_blank'>CV</a></li>
            </ul>
            <Link to="/contact"><button className="btn-contact">Contacto</button></Link>
        </nav>
    </div>
  );
};
