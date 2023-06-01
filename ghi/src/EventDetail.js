import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function EventDetail() {
  const { event_id } = useParams();
  const [eventDetails, setEventDetails] = useState([]);

  async function fetchEvent() {
    const eventUrl = `http://localhost:8000/api/events/${event_id}/`;
    const response = await fetch(eventUrl);
    console.log(response);
    if (response.ok) {
      const responseData = await response.json();
      const eventData = responseData;
      console.log(eventData)
      setEventDetails(eventData);
    }
  }

  useEffect(() => {
    fetchEvent();
  }, [event_id]);

  return (
    <>
      <div>
        <h1>{eventDetails.event_title}</h1>
        <h3>{eventDetails.location}</h3>
        <img src={eventDetails.picture} alt="event image" />
      </div>
      <div>
        <h2>Event Details</h2>
        <p>{eventDetails.description}</p>
        <p>{eventDetails.date}</p>
        <p>{eventDetails.language}</p>
        <p>{eventDetails.cost}</p>
        <p>{eventDetails.payment_type}</p>
      </div>
      <div>
        <button>Sign up!</button>
      </div>
    </>
  );
}

export default EventDetail;
