import { NavLink } from "react-router"

const Header = () => {
    return (
        <header className="container__menu">
            <h1>Maquet<span className="container__site">Smart</span></h1>
            <nav className="container__nav">
                <NavLink to="/nosotros" className={({ isActive }) => isActive ? "active" : ""}>Nosotros</NavLink>
                <NavLink to="/galeria" className={({ isActive }) => isActive ? "active" : ""}>Galería</NavLink>
                <NavLink to="/planes" className={({ isActive }) => isActive ? "active" : ""}>Planes</NavLink>
                <NavLink to="/faq" className={({ isActive }) => isActive ? "active" : ""}>Preguntas Frecuentes</NavLink>
                <NavLink to="/proforma" className={({ isActive }) => isActive ? "active" : ""}>Proforma</NavLink>
                <NavLink to="/contacto" className={({ isActive }) => isActive ? "active" : ""}>Contacto</NavLink>
            </nav>
            <nav>
                <NavLink to="/login" className="button header__button-login">Ingresar</NavLink>
            </nav>
        </header>
    )
}

export default Header