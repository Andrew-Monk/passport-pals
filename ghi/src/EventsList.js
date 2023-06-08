import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const categories = [
  { value: "Food & Drink", label: "Food & Drink" },
  { value: "Wellness & Fitness", label: "Wellness & Fitness" },
  { value: "Art & Cultural", label: "Art & Cultural" },
  { value: "Restaurants & Bars", label: "Restaurants & Bars" },
  { value: "Sightseeing & Local Spots", label: "Sightseeing & Local Spots" },
];

function EventsList() {
  const [events, setEvents] = useState([]);
  const [category, setCategory] = useState("");
  const [filteredEvents, setFilteredEvents] = useState([]);

  async function fetchEvents() {
    const eventsUrl = `${process.env.REACT_APP_PASSPORT_PALS_API_HOST}/api/events/`;
    const response = await fetch(eventsUrl);
    if (response.ok) {
      const responseData = await response.json();
      const eventsData = responseData.events;
      setEvents(eventsData);
    }
  }

  useEffect(() => {
    fetchEvents();
  }, []);

  useEffect(() => {
    if (category) {
      const filtered = events.filter((event) => event.category === category);
      setFilteredEvents(filtered);
    } else {
      setFilteredEvents(events);
    }
  }, [category, events]);

  const handleCategoryChange = (event) => {
    const value = event.target.value;
    setCategory(value);
  };

  return (
    <>
      <h2>Events</h2>
      <select
        onChange={handleCategoryChange}
        value={category}
        required
        name="category"
        id="category"
        className="form-select"
      >
        <option value="">Choose a Category...</option>
        {categories.map((category) => {
          return (
            <option key={category.value} value={category.value}>
              {category.label}
            </option>
          );
        })}
      </select>
      <div className="list-container">
        {filteredEvents.map((event) => {
          return (
            <div key={event.id} className="list-card">
              <p>
                <Link to={`/events/${event.id}`}>{event.event_title}</Link>
              </p>
              <p>{event.location}</p>
              <img
                className="list-card-picture"
                src={event.picture}
                alt="card"
              />
              <p>{event.category}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default EventsList;
