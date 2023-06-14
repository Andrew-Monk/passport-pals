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
  const [selectedLocation, setSelectedLocation] = useState("");
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [locations, setLocations] = useState([]);


  async function fetchEvents() {
    const eventsUrl = `${process.env.REACT_APP_PASSPORT_PALS_API_HOST}/api/events`;
    const response = await fetch(eventsUrl);
    if (response.ok) {
      const responseData = await response.json();
      const eventsData = responseData.events;
      setEvents(eventsData);
    }
  }

  async function fetchLocations() {
    const response = await fetch(
      `${process.env.REACT_APP_PASSPORT_PALS_API_HOST}/api/locations`
    );
    if (response.ok) {
      const responseData = await response.json();
      const locationsData = responseData.locations;
      setLocations(locationsData);
    }
  }


  useEffect(() => {
    fetchEvents();
    fetchLocations();
  }, []);

  useEffect(() => {
    const filterEvents = () => {
      let filtered = events;

      if (category && category !== "") {
        filtered = filtered.filter((event) => event.category === category);
      }

      if (selectedLocation && selectedLocation !== "") {
        filtered = filtered.filter(
          (event) => event.location === selectedLocation
        );
      }

      setFilteredEvents(filtered);
    }
    filterEvents();
  }, [category, selectedLocation, events]);

  const handleCategoryChange = (event) => {
    const value = event.target.value;
    setCategory(value);
  };

  const handleLocationChange = (event) => {
  const value = event.target.value;
  setSelectedLocation(value);
  };

  return (
    <>
      <div className="card-section">
        <h2 className="upcoming-events">Events</h2>
        <div className="dropdown-container">
          <select
            className="category-list"
            onChange={handleCategoryChange}
            value={category}
            required
            name="category"
            id="category"
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
          <select
            className="location-list"
            onChange={handleLocationChange}
            value={selectedLocation}
            required
            name="location"
            id="location"
          >
            <option value="">Choose a Location...</option>
            {locations.map((location) => {
              return (
                <option key={location.value} value={location.value}>
                  {location.label}
                </option>
              );
            })}
          </select>
        </div>
      </div>
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
                style={{ height: "200px", width: "auto"}}
              />
              <p>{event.category}</p>
            </div>
          );
        })}
      </div>
      <div>
        <img
          src="https://i.imgur.com/Zn3DfcJ.jpg"
          className="event-list"
          alt="card"
        />
      </div>
    </>
  );
}

export default EventsList;
