import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/">Dashboard</NavLink>
      <NavLink to="/players">Cầu thủ</NavLink>
      <NavLink to="/schedule">Lịch</NavLink>
      <NavLink to="/attendance">Điểm danh</NavLink>
    </nav>
  );
}
export default Navbar;
