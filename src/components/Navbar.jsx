import { NavLink, useNavigate } from "react-router-dom";

function Navbar({ user, onLogout }) {
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    onLogout();
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <NavLink to="/">Dashboard</NavLink>
      <NavLink to="/players">Cầu thủ</NavLink>
      <NavLink to="/schedule">Lịch</NavLink>
      <NavLink to="/attendance">Điểm danh</NavLink>

      <div className="navbar-user">
        {user ? (
          <>
            <span>👤 {user.username}</span>
            <button onClick={handleLogoutClick}>Đăng xuất</button>
          </>
        ) : (
          <NavLink to="/login">Đăng nhập</NavLink>
        )}
      </div>
    </nav>
  );
}
export default Navbar;
