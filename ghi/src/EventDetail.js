import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import useToken from "@galvanize-inc/jwtdown-for-react";
import { Link } from "react-router-dom";

function EventDetail() {
  const { event_id } = useParams();
  const [eventDetails, setEventDetails] = useState([]);
  const { fetchWithCookie, token } = useToken();

  const fetchEvent = useCallback(async () => {
    const eventUrl = `${process.env.REACT_APP_PASSPORT_PALS_API_HOST}/api/events/${event_id}`;
    const response = await fetch(eventUrl);
    if (response.ok) {
      const responseData = await response.json();
      const eventData = responseData;
      setEventDetails(eventData);
    }
  }, [event_id]);

  useEffect(() => {
    fetchEvent();
  }, [fetchEvent]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const accountResponse = await fetchWithCookie(
      `${process.env.REACT_APP_PASSPORT_PALS_API_HOST}/token`
    );
    const accountEmail = accountResponse.account.email;
    const signUpUrl = `${process.env.REACT_APP_PASSPORT_PALS_API_HOST}/api/accounts`;

    const data = {};
    data.event_id = event_id;
    data.email = accountEmail;

    const fetchConfig = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      credentials: "include",
    };

    await fetch(signUpUrl, fetchConfig);

    alert("You're signed up!");
  };

  return (
    <div className="event-detail-all">
      <div className="detail-header-container">
        <h1 className="event-detail-title">{eventDetails.event_title}</h1>
        <h3 className="event-detail-location">{eventDetails.location}</h3>
        <img
          className="event-detail-image"
          src={eventDetails.picture}
          alt="event"
        />
      </div>
      <div>
        <div className="text-modal">
          <h2 className="event-details">Event Details</h2>
        </div>
        <p className="detail description">{eventDetails.description}</p>
        <div className="detail-container">
          <p className="detail date">
            <strong>When:</strong> {eventDetails.date}
          </p>
          <p className="detail language">
            <strong>Language:</strong> {eventDetails.language}
          </p>
          <p className="detail cost">
            <strong>Cost:</strong> {eventDetails.cost}
          </p>
          <p className="detail payment-type">
            <strong>Payment Type:</strong> {eventDetails.payment_type}
          </p>
        </div>
      </div>
      {token ? (
        <div className="login-join">
          <button className="login-join-button" onClick={handleSubmit}>
            Sign up!
          </button>
        </div>
      ) : (
        <div className="login-join">
          <Link className="login-join-link" to="/login">
            Login to sign up!
          </Link>
        </div>
      )}
    </div>
  );
}

export default EventDetail;
