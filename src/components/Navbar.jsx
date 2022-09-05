import { Link, useMatch, NavLink } from "react-router-dom";
// import { BsFillBackspaceFill } from "react-icons/bs";
// import { FiSettings } from "react-icons/fi";
// import { BiMicrophone } from "react-icons/bi";

const Navbar = () => {
  const match = useMatch("/chart");
  return (
    <nav className="nav-bar">
      <div className="navbar-container">
      <NavLink className="navbar-item home" activeclassname="is-active" to="/">
              Home
      </NavLink>
      <NavLink className="navbar-item chart" activeclassname="is-active" to="/chart">Chart</NavLink>

      </div>



    </nav>
  );
};

export default Navbar;