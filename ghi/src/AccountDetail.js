import { useState, useEffect } from "react";
import useToken from "@galvanize-inc/jwtdown-for-react";
import useAuthContext from "@galvanize-inc/jwtdown-for-react";
import { Link } from "react-router-dom";
import { Navigate, useNavigate } from "react-router-dom";


function AccountDetail() {
  const [accountData, setAccountData] = useState({});
  const { fetchWithCookie } = useToken();
  const [events, setEvents] = useState([]);
  const { token } = useToken();
  const navigate = useNavigate();
  const { token } = useAuthContext();

  useEffect(() => {
    if (!token) {
      navigate("/login");

  async function fetchEvents() {
    const eventsUrl = "http://localhost:8000/api/events/";
    const response = await fetch(eventsUrl);
    console.log(response);
    if (response.ok) {
      const responseData = await response.json();
      const eventsData = responseData.events;
      console.log(eventsData)
      setEvents(eventsData);
    }
    const handleFetch = async () => {
      const accountUrl = "http://localhost:8000/token";
      const response = await fetch(accountUrl, {
        credentials: "include",
      }).then((response) => response.json());
      console.log(response);
      setAccountData(response.account);
    };
    handleFetch();
    fetchEvents();
  }, [navigate, token]);

  return (
    <>
      <div>
        <h1>Welcome, {accountData.full_name}!</h1>
      </div>
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
          {accountData.hosting &&
            accountData.hosting.map((eventId) => {
              const hostedEvent = events.find((event) => event.id === eventId);
              if (hostedEvent) {
                return (
                  <tr key={hostedEvent.id}>
                    <td>
                      <Link to={`/events/${hostedEvent.id}`}>
                        {hostedEvent.event_title}
                      </Link>
                    </td>
                    <td>{hostedEvent.location}</td>
                    <td>{hostedEvent.picture}</td>
                  </tr>
                );
              }
            })}
        </tbody>
      </table>
      <h2>Your Upcoming Events</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Location</th>
            <th>Picture</th>
          </tr>
        </thead>
        <tbody>
          {accountData.attending &&
            accountData.attending.map((eventId) => {
              const attendingEvent = events.find(
                (event) => event.id === eventId
              );
              if (attendingEvent) {
                return (
                  <tr key={attendingEvent.id}>
                    <td>
                      <Link to={`/events/${attendingEvent.id}`}>
                        {attendingEvent.event_title}
                      </Link>
                    </td>
                    <td>{attendingEvent.location}</td>
                    <td>{attendingEvent.picture}</td>
                  </tr>
                );
              }
            })}
        </tbody>
      </table>
    </>
  );
}

export default AccountDetail;
