import UpcomingEvents from "../../../Components/UpcomingEvents/UpcomingEvents";
import "./Profile.css";

export default function Profile() {
  const user = {
    name: "Luna The Lab 🐾",
    avatar: "/images/profile/luna-avatar.jpg",
    bio: "Friendly Labrador who loves long walks, beach days, and peanut butter! 🦴",
    followers: 238,
    following: 182,
    posts: 48,
  };

  const posts = [
    "/images/profile/post1.jpg",
    "/images/profile/post2.jpg",
    "/images/profile/post3.jpg",
    "/images/profile/post4.jpg",
    "/images/profile/post5.jpg",
    "/images/profile/post6.jpg",
  ];

  return (
    <>
      <UpcomingEvents />

      <section className="profile-page">
        <div className="profile-header">
          <img src={user.avatar} alt={user.name} className="profile-avatar" />

          <div className="profile-info">
            <h2 className="profile-name">{user.name}</h2>
            <p className="profile-bio">{user.bio}</p>

            <div className="profile-stats">
              <div>
                <strong>{user.posts}</strong>
                <span>Posts</span>
              </div>
              <div>
                <strong>{user.followers}</strong>
                <span>Followers</span>
              </div>
              <div>
                <strong>{user.following}</strong>
                <span>Following</span>
              </div>
            </div>

            <div className="profile-buttons">
              <button className="edit-btn">Edit Profile</button>
              <button className="message-btn">Message</button>
            </div>
          </div>
        </div>

        <div className="profile-posts">
          {posts.map((post, index) => (
            <img
              key={index}
              src={post}
              alt={`Post ${index + 1}`}
              className="profile-post"
            />
          ))}
        </div>
      </section>
    </>
  );
}
