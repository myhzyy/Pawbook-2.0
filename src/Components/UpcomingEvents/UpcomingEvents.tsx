import "./UpcomingEvents.css";

export default function UpcomingEvents() {
  return (
    <section className="meetups">
      <h2>🐶 Upcoming Dog Meetups</h2>
      <div className="stories">
        <div className="story">
          <img src="https://placedog.net/100/100?id=1" alt="Playdate" />
          <p className="event-title">Playdate</p>
          <p className="event-date">Sep 28</p>
        </div>

        <div className="story">
          <img src="https://placedog.net/100/100?id=2" alt="Beach Walk" />
          <p className="event-title">Beach Walk</p>
          <p className="event-date">Oct 5</p>
        </div>

        <div className="story">
          <img src="https://placedog.net/100/100?id=3" alt="Adoption" />
          <p className="event-title">Adoption</p>
          <p className="event-date">Oct 9</p>
        </div>

        <div className="story">
          <img src="https://placedog.net/100/100?id=4" alt="Halloween" />
          <p className="event-title">Halloween</p>
          <p className="event-date">Oct 31</p>
        </div>
      </div>
    </section>
  );
}
