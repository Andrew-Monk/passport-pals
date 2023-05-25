import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function EventsList() {
    const [ events, setEvents ] = useState([])

    async function fetchEvents() {
        const eventsUrl = "http://localhost:8000/api/events/";
        const response = await fetch(eventsUrl);
        console.log(response)
        if (response.ok) {
            const responseData = await response.json();
            const eventsData = responseData.events;
            setEvents(eventsData);
        }
    };

    useEffect(() => {
        fetchEvents();
    }, []);


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
            {events.map(event => {
                return (
                  <tr key={event.id}>
                    <td>
                    <Link to={`/events/${event.id}`}>{event.event_title}</Link>
                    </td>
                    <td>{event.location}</td>
                    <td>{event.picture}</td>
                  </tr>
                );
            })}
          </tbody>
        </table>
      </div>
    );
}

export default EventsList;
