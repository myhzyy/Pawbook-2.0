import "./Notifacations.css";
import type { Notification } from "../../../types/notifacations";

const notifications: Notification[] = [
  {
    id: "1",
    avatar: "https://placedog.net/61",
    message: "Luna 🐕‍🦺 liked your post",
    time: "2m ago",
  },
  {
    id: "2",
    avatar: "https://placedog.net/62",
    message: "Buddy 🐶 started following you",
    time: "10m ago",
  },
  {
    id: "3",
    avatar: "https://placedog.net/63",
    message: "Max 🐾 commented: 'Such a cute pup!'",
    time: "1h ago",
  },
];

export default function Notifications() {
  return (
    <div className="notifications-container">
      <h2 className="notifications-title">🔔 Notifications</h2>

      <ul className="notifications-list">
        {notifications.map((notif) => (
          <li key={notif.id} className="notification-item">
            <img src={notif.avatar} alt="avatar" className="notif-avatar" />
            <div className="notif-content">
              <p>{notif.message}</p>
              <small>{notif.time}</small>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
