import "./Header.css";

export default function Header() {
  return (
    <nav className="navbar">
      <button className="menu-btn">☰</button>
      <h2 className="logo">Pawbook 🐾</h2>
      <img
        className="profile-pic"
        src="https://placedog.net/50"
        alt="Profile"
      />
    </nav>
  );
}
