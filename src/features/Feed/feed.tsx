import "./feed.css";
import type { Post } from "../../types/posts";

const posts: Post[] = [
  {
    username: "LunaTheLab 🐶",
    image: "/images/Luna-the-lab/Luna-the-lab.jpg",
    caption: "Just had the best walk in the park!",
    avatar: "https://placedog.net/60",
  },
  {
    username: "Luna 🐕‍🦺",
    image: "https://placedog.net/401/250",
    caption: "First puppy playdate today 🎉",
    avatar: "https://placedog.net/61",
  },
  {
    username: "Max 🐾",
    image: "https://placedog.net/402/250",
    caption: "Sunbathing all afternoon ☀️",
    avatar: "https://placedog.net/62",
  },
];

export default function Feed() {
  return (
    <div className="feed-container">
      <section className="posts">
        {posts.map((post, index) => (
          <article className="post-card" key={index}>
            <div className="post-header">
              <img
                src={post.avatar}
                alt={post.username}
                className="post-avatar"
              />
              <h3 className="post-username">{post.username}</h3>
            </div>

            {/* Full-width image */}
            <div className="post-image-container">
              <img
                src={post.image}
                alt={post.username}
                className="post-image"
              />
            </div>

            <div className="post-footer">
              <p>
                <strong>{post.username}</strong> {post.caption}
              </p>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
