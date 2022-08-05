import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="header">
      <ul>
        <li>
          <NavLink to="/">Les States</NavLink>
        </li>
        <li>
          <NavLink to="/listes">Les Listes</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
