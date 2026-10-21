import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <h1 className="header__title">World Explorer</h1>

      <nav className="header__nav" aria-label="Navegação principal">
        <NavLink className="header__link" to="/">
          Início
        </NavLink>

        <NavLink className="header__link" to="/explore">
          Explorar países
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
