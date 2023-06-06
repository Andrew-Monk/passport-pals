import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function MainPage() {
  const [randomEvents, setRandomEvents] = useState([]);

  async function fetchEvents() {
    const eventsUrl = "http://localhost:8000/api/events/";
    const response = await fetch(eventsUrl);
    if (response.ok) {
      const responseData = await response.json();
      const eventsData = responseData.events;
      setRandomEvents(getRandomEvents(eventsData, 3));
    }
  }

  const getRandomEvents = (eventList, count) => {
    const shuffled = eventList.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <>
      {/* <div>
        <img className="hero-image" src="https://i.imgur.com/KJnUkIb.jpg" />
      </div> */}
      <div className="card-section">
        <p className="upcoming-events">Upcoming Events Around the World</p>
        {/* <div className="category-bar">
          <ion-icon className="category-icon" name="bicycle-outline"></ion-icon>
          <ion-icon
            className="category-icon"
            name="fast-food-outline"
          ></ion-icon>
          <ion-icon className="category-icon" name="school-outline"></ion-icon>
          <ion-icon className="category-icon" name="happy-outline"></ion-icon>
        </div> */}
        <div className="cards-container">
          {randomEvents.map((event) => (
            <div className="card">
              <tr key={event.id}>
                <Link className="card-title" to={`/events/${event.id}`}>
                  {event.event_title}
                </Link>
                <p className="card-location">{event.location}</p>
                <div className="card-image-container">
                  <img className="card-image" src={event.picture} />
                </div>
              </tr>
            </div>
          ))}
        </div>
      </div>
      <div className="hero-image">
        <img src="https://i.imgur.com/JdMJn0G.jpg" />
        <div>
          <p>PassportPals is blah blah blah</p>
        </div>
      </div>
    </>
  );
}

export default MainPage;
