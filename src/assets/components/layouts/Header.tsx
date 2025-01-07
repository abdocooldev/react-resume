import { NavLink } from "react-router-dom";
import { css } from "../../../../styled-system/css";
function Header() {
  return (
    <header
      className={css({
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: { base: "10px", xs: "20px" },
        fontSize: "20px",
        margin: "auto",
        maxWidth: "100%",
        padding: "15px",
        mb: "50px",
        background: "rgba(255, 255, 255, 0.2)",
        border: "1px solid rgba(255, 255, 255, 0.3)",
        borderRadius: "16px",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(5px)",
        "& a.active": {
          borderBottom: "3px solid var(--colors-blue-900)",
        },
      })}>
      <NavLink className={({ isActive }) => (isActive ? "active" : "")} to="/">
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "active" : "")}
        to="/quotes">
        Quotes
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "active" : "")}
        to="/gallery">
        Gallery
      </NavLink>
    </header>
  );
}

export default Header;
