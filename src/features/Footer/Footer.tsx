import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <nav className="bottom-nav">
      <Link to="/">
        <img src="/images/footer-icons/footer-home-icon.svg" alt="" />
      </Link>

      <Link to="/meetUps">
        <img src="/images/footer-icons/dog-walk-icon.png" alt="" />
      </Link>

      <img src="/images/footer-icons/post-image-icon.svg" alt="" />
      <Link to="/notifacations">
        <img src="/images/footer-icons/paw-like-icon.svg" alt="" />
      </Link>
      <img src="/images/footer-icons/dog-profile-pic-icon.svg" alt="" />
    </nav>
  );
}
