import { Link, useNavigate, useLocation } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    navigate("/");
  };

  const isActive = (path) => {
    return location.pathname === path ? "active" : "";
  };

  return (
    <nav className="navbar">
      <h3 className="logo">React Assignment</h3>

      <div className="nav-links">
        <Link to="/list" className={isActive("/list")}>List</Link>
        <Link to="/chart" className={isActive("/chart")}>Chart</Link>
        <Link to="/map" className={isActive("/map")}>Map</Link>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;