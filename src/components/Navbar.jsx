import { Link, NavLink, useNavigate } from "react-router-dom";
import Icon from "./Icon";

const LINKS = [
  { to: "/", label: "Dashboard", icon: "dashboard" },
  { to: "/players", label: "Cầu thủ", icon: "users" },
  { to: "/schedule", label: "Lịch", icon: "calendar" },
  { to: "/attendance", label: "Điểm danh", icon: "check" },
];

function Navbar({ user, onLogout }) {
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    onLogout();
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="brand">
          <span className="brand-ball">⚽</span>
          <span className="brand-text">
            Football <b>Manager</b>
          </span>
        </Link>

        {user && (
          <div className="nav-links">
            {LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className="nav-link"
              >
                <Icon name={link.icon} />
                <span>{link.label}</span>
              </NavLink>
            ))}
          </div>
        )}

        <div className="navbar-user">
          {user ? (
            <>
              <div className="avatar">
                {user.username.charAt(0).toUpperCase()}
              </div>
              <span className="username">{user.username}</span>
              <button
                className="icon-btn"
                onClick={handleLogoutClick}
                title="Đăng xuất"
              >
                <Icon name="logout" size={18} />
              </button>
            </>
          ) : (
            <NavLink to="/login" className="nav-link">
              <Icon name="login" />
              <span>Đăng nhập</span>
            </NavLink>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
