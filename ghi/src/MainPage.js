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
      <div>
        <h1>Passport Pals</h1>
        <h2>Events</h2>
        <table>
          <thead>
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
                  <Link to={`/events/${event.id}`}>{event.event_title}</Link>
                </td>
                <td>{event.location}</td>
                <td>{event.picture}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default MainPage;
