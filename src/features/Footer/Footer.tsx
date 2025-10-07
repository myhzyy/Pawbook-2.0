import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <nav className="bottom-nav">
      <Link to="/">
        <button>🏠</button>
      </Link>

      <Link to="/notifacations">
        <button>🚶‍♂️</button>
      </Link>
      <button className="add-btn">＋</button>
      <button>🐾</button>
      <button>🐶</button>
    </nav>
  );
}
