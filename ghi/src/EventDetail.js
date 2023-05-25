import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function EventDetail() {
  const { event_id } = useParams();
  const [eventDetails, setEventDetails] = useState([]);
  //   const [attending, setAttending] = useState([]);

  async function fetchEvent() {
    const eventUrl = `http://localhost:8000/api/events/${event_id}/`;
    const response = await fetch(eventUrl);
    console.log(response);
    if (response.ok) {
      const responseData = await response.json();
      const eventData = responseData;
      setEventDetails(eventData);
    }
  }

  //    async function fetchEvent() {
  //      const eventUrl = `http://localhost:8000/api/accounts/${event_id}/`;
  //      const response = await fetch(eventUrl);
  //      console.log(response);
  //      if (response.ok) {
  //        const responseData = await response.json();
  //        const eventData = responseData;
  //        setEventDetails(eventData);
  //      }
  //    }

  // ^^we need to be able to access current logged in user's id via fetch request to token ^^. it's generated when u click login
  // that token has info associated with account (id, username, attending, etc.). finish authorization first. check in with instructor before implementing this

  //   const handleSubmit = async (event) => {
  //     event.preventDefault();
  //     setAttending(event_id);
  //     const data = { attending };
  //     const accountUrl = `http://localhost:8000/api/accounts/${id}/`;
  //     const fetchConfig = {
  //       method: "put",
  //       body: JSON.stringify(data),
  //     };
  //   };

  // need to fix this handle submit thing eventually ^^

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
