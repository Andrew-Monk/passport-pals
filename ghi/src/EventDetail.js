import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function EventDetail() {
  const { event_id } = useParams();
  const [eventDetails, setEventDetails] = useState([]);
  const handleFormChange = (event) => {
    const inputName = event.target.name;
    const value = event.target.value;
    setFormData({
      ...formData,
      [inputName]: value,
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
  };
  const [formData, setFormData] = useState({
    name: "",
    group_size: "",
    country: "",
  });
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
        <h2>Sign Up!</h2>
        <form id="join_event_form">
          <div>
            <input
              value={formData.name}
              onChange={handleFormChange}
              placeholder="Your Name"
              required
              type="text"
              name="name"
              id="name"
            />
          </div>
          <div>
            <input
              value={formData.group_size}
              onChange={handleFormChange}
              placeholder="How big is your group?"
              required
              type="number"
              name="group_size"
              id="group_size"
            />
          </div>
          <div>
            <input
              value={formData.country}
              onChange={handleFormChange}
              placeholder="Where are you from?"
              required
              type="text"
              name="country"
              id="country"
            />
          </div>
          <button>Register</button>
        </form>
      </div>
    </>
  );
}

export default EventDetail;
