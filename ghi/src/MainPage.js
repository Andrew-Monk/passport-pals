import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";

function MainPage() {
  const [randomEvents, setRandomEvents] = useState([]);
  const picCount = 8;
  const [background, setBackground] = useState("");

  const fetchEvents = useCallback(async () => {
    const eventsUrl = `${process.env.REACT_APP_PASSPORT_PALS_API_HOST}/api/events`;
    const response = await fetch(eventsUrl);
    if (response.ok) {
      const responseData = await response.json();
      const eventsData = responseData.events;
      setRandomEvents(getRandomEvents(eventsData, 4));
    }
  }, []);

  const getRandomEvents = (eventList, count) => {
    const shuffled = eventList.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  const changeBackground = () => {
    const num = Math.ceil(Math.random() * picCount);
    const randomPic = `url(background/${num}.jpg)`;
    setBackground(randomPic);
  };

  useEffect(() => {
    changeBackground();
    fetchEvents();
  }, [fetchEvents]);

  return (
    <>
      <div className="card-section">
        <p className="upcoming-events">Upcoming Events Around the World</p>
        <div className="cards-container">
          {randomEvents.map((event) => (
            <div key={event.id} className="card">
              <Link className="card-title" to={`/events/${event.id}`}>
                {event.event_title}
              </Link>
              <p className="card-location">{event.location}</p>
              <div className="card-image-container">
                <img className="card-image" src={event.picture} alt="card" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <img
          className="hero-image"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), ${background}`,
            backgroundSize: "cover",
            zIndex: -1,
          }}
          alt="card"
        />

        <div>
          <p>PassportPals is blah blah blah</p>
        </div>
      </div>
      <div className="see-more-container">
        <Link to="/events/list">
          <button className="upcoming-events">Discover more events</button>
        </Link>
      </div>
    </>
  );
}

export default MainPage;
