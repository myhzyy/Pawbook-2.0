import "./Header.css";

export default function Header() {
  return (
    <nav className="navbar">
      <img
        className="header-images"
        src="/images/Feed-icons/system-settings.svg"
        alt=""
      />
      <h2 className="logo">Pawbook 🐾</h2>
      <img
        className="header-images"
        src="/images/Feed-icons/add-friend.svg"
        alt="Profile"
      />
    </nav>
  );
}
