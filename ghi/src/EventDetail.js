import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useToken from "@galvanize-inc/jwtdown-for-react";
import { Link } from "react-router-dom";

function EventDetail() {
  const { event_id } = useParams();
  const [eventDetails, setEventDetails] = useState([]);
  const [accountData, setAccountData] = useState({});
  const { fetchWithCookie, token } = useToken();

  async function fetchEvent() {
    const eventUrl = `http://localhost:8000/api/events/${event_id}/`;
    const response = await fetch(eventUrl);
    console.log(response);
    if (response.ok) {
      const responseData = await response.json();
      const eventData = responseData;
      console.log(eventData);
      setEventDetails(eventData);
    }
  }

  useEffect(() => {
    fetchEvent();
  }, [event_id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const accountResponse = await fetchWithCookie(
      `${process.env.REACT_APP_PASSPORT_PALS_API_HOST}/token`
    );
    const accountEmail = accountResponse.account.email;
    const signUpUrl = `http://localhost:8000/api/accounts`;

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

    const response = await fetch(signUpUrl, fetchConfig);

    alert("You're signed up!");
  };

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
      {token ? (
        <div>
          <button onClick={handleSubmit}>Sign up!</button>
        </div>
      ) : (
        <Link to="/login">Login to sign up!</Link>
      )}
    </>
  );
}

export default EventDetail;
