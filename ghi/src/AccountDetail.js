import { useState, useEffect } from "react";
import useToken from "@galvanize-inc/jwtdown-for-react";
import useAuthContext from "@galvanize-inc/jwtdown-for-react";
import { Link } from "react-router-dom";

function AccountDetail() {
  const [accountData, setAccountData] = useState("");
  const { fetchWithCookie } = useToken();
  const [events, setEvents] = useState([]);
  const { token } = useAuthContext();

  async function fetchEvents() {
    const eventsUrl = "http://localhost:8000/api/events/";
    const response = await fetch(eventsUrl);
    console.log(response);
    if (response.ok) {
      const responseData = await response.json();
      const eventsData = responseData.events;
      console.log(eventsData);
      setEvents(eventsData);
    }
  }

  const handleFetch = async () => {
    const response = await fetchWithCookie(
      `${process.env.REACT_APP_PASSPORT_PALS_API_HOST}/token`
    );
    console.log(response.account);
    setAccountData(response.account);
    console.log("account:", response.account.hosting);
  };
  useEffect(() => {
    fetchEvents();
    handleFetch();
  }, [token]);

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
      <div>
        <h2>Your Upcoming Events</h2>
      </div>
    </>
  );
}

export default AccountDetail;
