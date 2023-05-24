import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function EventDetails() {
    const { eventId } = useParams();
    const [eventDetails, setEventDetails] = useState(null);
    console.log(eventId)

    useEffect(() => {
    fetchEventDetails(eventId);
    }, [eventId]);

   const fetchEventDetails = async (eventId) => {
    try {

      const response = await fetch(`http://localhost:8000/api/events/${eventId}`);
      const eventDetailsData = await response.json();
      setEventDetails(eventDetailsData);
    } catch (error) {
      console.error('Error fetching event data:', error);
    }
  };

  if (!eventDetails) {
    return <div>Loading...</div>;
  }


  return (
    <div>

      <h1>{eventDetails.event_title}</h1>
      <p>{eventDetails.location}</p>
      <p>{eventDetails.picture}</p>
      <p>{eventDetails.category}</p>
      <p>{eventDetails.cost}</p>
      <p>{eventDetails.language}</p>
      <p>{eventDetails.payment_type}</p>
      <p>{eventDetails.date}</p>
      <p>{eventDetails.description}</p>

    </div>
  );
}
export default EventDetails;
