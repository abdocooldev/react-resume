import { Link } from "react-router-dom";
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
        mb: "50px",
      })}>
      <Link to="/">Home</Link>
      <Link to="/quotes">Quotes</Link>
      <Link to="/gallery">Gallery</Link>
    </header>
  );
}

export default Header;
