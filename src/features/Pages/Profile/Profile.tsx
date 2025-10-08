import "./Profile.css";

export default function Profile() {
  const user = {
    name: "Luna The Lab 🐾",
    avatar: "/images/Luna-the-lab/Luna-the-lab.jpg",
    breed: "Beagle",
    bio: "Friendly Labrador who loves long walks, beach days, and peanut butter! 🦴",
    followers: 238,
    following: 182,
    posts: 48,
    age: 3,
  };

  const posts = [
    "/images/Luna-the-lab/Luna-the-lab.jpg",
    "/images/Luna-the-lab/Luna-the-lab-2.jpg",
    "/images/Luna-the-lab/Luna-the-lab-3.jpg",
    "/images/Luna-the-lab/Luna-the-lab-4.jpg",
    "/images/Luna-the-lab/Luna-the-lab-5.jpg",
    "/images/Luna-the-lab/Luna-the-lab-6.jpg",
  ];

  return (
    <>
      <section className="profile-page">
        <div className="profile-header">
          <img src={user.avatar} alt={user.name} className="profile-avatar" />

          <div className="profile-info">
            <h2 className="profile-name">{user.name}</h2>
            <p className="profile-bio">{user.breed}</p>
            <p className="profile-bio">{user.age} years</p>

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
            {/* <p className="profile-bio">About {user.bio}</p> */}
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
