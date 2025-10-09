import { NavLink } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <nav className="bottom-nav">
      <NavLink to="/" end>
        <img src="/images/footer-icons/footer-home-icon.svg" alt="Home" />
      </NavLink>

      <NavLink to="/meetUps">
        <img src="/images/footer-icons/dog-walk-icon.png" alt="Meetups" />
      </NavLink>

      <NavLink to="/add">
        <img
          src="/images/footer-icons/post-image-icon.svg"
          alt="Add post"
          className="add-btn"
        />
      </NavLink>

      <NavLink to="/notifacations">
        <img src="/images/footer-icons/paw-like-icon.svg" alt="Likes" />
      </NavLink>

      <NavLink to="/profile">
        <img
          src="/images/footer-icons/dog-profile-pic-icon.svg"
          alt="Profile"
        />
      </NavLink>
    </nav>
  );
}
