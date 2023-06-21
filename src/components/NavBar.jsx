import { Link } from 'react-router-dom'
import '../assets/styles/navbar.css'

export const NavBar = () => {

    
    return (
        <div className='nav-container'>
            <nav className="navigation-bar">
                <section className="navigation-logo">
                    <h1>KMY</h1>
                </section>
                <ul className="navigation-menu">
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/about">Sobre mi</Link></li>
                    <li><Link to="/works">Trabajos</Link></li>
                </ul>
                <Link to="/contact"><button className="btn-contact">Contacto</button></Link>
            </nav>
        </div>
    )
}