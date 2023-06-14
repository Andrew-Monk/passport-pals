import { useState, useEffect } from "react";
import useToken from "@galvanize-inc/jwtdown-for-react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function AccountDetail() {
  const [accountData, setAccountData] = useState({});
  const [events, setEvents] = useState([]);
  const { token } = useToken();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEvents = async () => {
      const eventsUrl = `${process.env.REACT_APP_PASSPORT_PALS_API_HOST}/api/events`;
      const response = await fetch(eventsUrl);
      if (response.ok) {
        const responseData = await response.json();
        const eventsData = responseData.events;
        setEvents(eventsData);
      }
    };

    const handleFetch = async () => {
      const accountUrl = `${process.env.REACT_APP_PASSPORT_PALS_API_HOST}/token`;
      const response = await fetch(accountUrl, {
        credentials: "include",
      }).then((response) => response.json());
      if (response == null) {
        navigate("/login");
      } else {
        setAccountData(response.account);
      }
    };

    handleFetch();
    fetchEvents();
  }, [navigate, token]);

  return (
    <>
      <div className="account-container">
        <h1 className="account">Welcome, {accountData.full_name}!</h1>
      </div>
        <h2 className="account-two">Events You're Hosting!</h2>
        <div className="account-list">
          {accountData.hosting &&
            accountData.hosting.map((eventId) => {
              const hostedEvent = events.find((event) => event.id === eventId);
              if (hostedEvent) {
                return (
                  <div key={hostedEvent.id} className="card">
                    <div>
                      <Link className="card-title" to={`/events/${hostedEvent.id}`}>
                        {hostedEvent.event_title}
                      </Link>
                    </div>
                    <div>{hostedEvent.location}</div>
                    <div className="card-image-container">
                      <img className="card-image" src={hostedEvent.picture} alt="card" />
                    </div>
                  </div>
                );
              }
            })}
        </div>
      <h2 className="account-two">Events You're Attending!</h2>
        <div className="account-list">
          {accountData.attending &&
            accountData.attending.map((eventId) => {
              const attendingEvent = events.find(
                (event) => event.id === eventId
              );
              if (attendingEvent) {
                return (
                  <div key={attendingEvent.id} className="card">
                    <div>
                      <Link className="card-title" to={`/events/${attendingEvent.id}`}>
                        {attendingEvent.event_title}
                      </Link>
                    </div>
                    <div>{attendingEvent.location}</div>
                    <div className="card-image-container">
                      <img className="card-image" src={attendingEvent.picture} alt="card" />
                    </div>
                  </div>
                );
              }
            })}
        </div>
      <div>
        <img src="https://i.imgur.com/7KFlFe1.jpg"
        className="host-event"
        alt="card"
        />
      </div>
    </>
  );
}

export default AccountDetail;
