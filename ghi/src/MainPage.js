import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function MainPage() {
  const [events, setEvents] = useState([]);
  const [randomEvents, setRandomEvents] = useState([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  async function fetchEvents() {
    const eventsUrl = "http://localhost:8000/api/events/";
    const response = await fetch(eventsUrl);
    if (response.ok) {
      const responseData = await response.json();
      const eventsData = responseData.events;
      setEvents(eventsData);
      setRandomEvents(getRandomEvents(eventsData, 3));
    }
  }

  const getRandomEvents = (eventList, count) => {
    const shuffled = eventList.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  return (
    <div>
      <h1>Passport Pals</h1>
      <table>
        <thead>
          <h2>Events</h2>
          <tr>
            <th>Title</th>
            <th>Location</th>
            <th>Picture</th>
          </tr>
        </thead>
        <tbody>
          {randomEvents.map((event) => (
            <tr key={event.id}>
              <td>
                <Link to={`/event/${event.id}`}>{event.event_title}</Link>
              </td>
              <td>{event.location}</td>
              <td>{event.picture}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MainPage;
