import "./meetUps.css";

export default function MeetUps() {
  const meetups = [
    {
      id: 1,
      title: "Park Playdate",
      location: "Victoria Park, London",
      date: "Sat, Oct 12 • 10:00",
      description:
        "Casual off-lead social for friendly dogs. Water bowls provided.",
      tags: ["All sizes", "Free", "Outdoor"],
      image: "/images/meet-ups/dog-meetup-park-1.png",
    },
    {
      id: 2,
      title: "Sunset Beach Walk",
      location: "Brighton Seafront",
      date: "Sun, Oct 20 • 17:30",
      description:
        "Easy 3km stroll along the promenade. Leads required near cafés.",
      tags: ["Leads on", "Beginner"],
      image: "/images/meet-ups/dog-meetup-park-2.png",
    },
    {
      id: 3,
      title: "Puppy Social",
      location: "Central Bark, Manchester",
      date: "Sat, Oct 26 • 11:00",
      description:
        "A fun morning meetup for puppies under 1 year. Gentle play only.",
      tags: ["Small breeds", "Puppies"],
      image: "/images/meet-ups/dog-meetup-park-3.png",
    },
  ];

  const filters = ["All", "Small breeds", "Large breeds", "Puppies"];

  return (
    <section className="meetups-page">
      <h2>🐶 Dog Meetups</h2>

      <div className="filters">
        {filters.map((filter, index) => (
          <button
            key={index}
            className={`filter-btn ${index === 0 ? "active" : ""}`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="meetups-list">
        {meetups.map((event) => (
          <article className="meetup-card" key={event.id}>
            <img src={event.image} alt={event.title} className="meetup-img" />

            <div className="meetup-content">
              <h3>{event.title}</h3>

              <p className="meetup-location">📍 {event.location}</p>
              <p className="meetup-date">📅 {event.date}</p>

              <p className="meetup-description">{event.description}</p>

              <div className="tags">
                {event.tags.map((tag, i) => (
                  <span key={i} className="tag">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="buttons">
                <button className="book-btn">Book</button>
                <button className="details-btn">Details</button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
