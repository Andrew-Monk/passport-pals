import React, { useEffect, useState } from "react";
import useToken from "@galvanize-inc/jwtdown-for-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const categories = [
  { value: "Food & Drink", label: "Food & Drink" },
  { value: "Wellness & Fitness", label: "Wellness & Fitness" },
  { value: "Art & Cultural", label: "Art & Cultural" },
  { value: "Restaurants & Bars", label: "Restaurants & Bars" },
  { value: "Sightseeing & Local Spotsr", label: "Sightseeing & Local Spots" },
];

function CreateEventForm() {
  const [countries, setCountries] = useState([]);
  const { token } = useToken();
  const navigate = useNavigate();
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [eventForm, setEventForm] = useState({
    event_title: "",
    location: "",
    date: "",
    picture: "",
    category: "",
    cost: "",
    language: "",
    payment_type: "",
    description: "",
    country: "",
  });

  const handleChange = (event) => {
    setEventForm({ ...eventForm, [event.target.name]: event.target.value });
    console.log(eventForm.cost);
  };

  const fetchCountries = async () => {
    try {
      const response = await axios.get("https://restcountries.com/v2/all");
      setCountries(response.data);
    } catch (error) {
      console.log("Error fetching countries:", error);
    }
  };

  const locationInput = async () => {
    const geoKeyResponse = await axios.get(
      `${process.env.REACT_APP_PASSPORT_PALS_API_HOST}/api/geocodify-key`
    );
    const geoKey = geoKeyResponse.data.geocodify_key;
    const searchQuery = eventForm.location
    const autoUrl = await axios.get(
      `https://api.geocodify.com/v2/autocomplete?api_key=${geoKey}&q=${searchQuery}`
    );

  };



  const handleDateChange = (event) => {
    const value = event.target.value;
    setDate(value);
  };

  const handleTimeChange = (event) => {
    const value = event.target.value;
    setTime(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = { ...eventForm };
    data.date = date + " " + time;

    const createEventUrl = `${process.env.REACT_APP_PASSPORT_PALS_API_HOST}/api/events`;
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    };

    const response = await fetch(createEventUrl, fetchConfig);
    if (response.ok) {
      setEventForm({
        event_title: "",
        location: "",
        date: "",
        picture: "",
        category: "",
        cost: "",
        language: "",
        payment_type: "",
        description: "",
        country: "",
      });
      setDate("");
      setTime("");
    }
  };

  useEffect(() => {
    if (!token) {
      navigate("/login");
    } else {
      locationInput();
      fetchCountries();
    }
  }, [token, navigate]);

  return (
    <div className="row offset-1">
      <div className="offset-4 col-4">
        <div className="host-event-card">
          <div className="mt-4 text-dark">
            <h1 className="upcoming-events">Host an Event!</h1>

            <form onSubmit={handleSubmit}>
              <div className="form-floating mb-4">
                <div className="form-floating mb-3">
                  <input
                    value={eventForm.event_title}
                    onChange={handleChange}
                    placeholder="title"
                    name="event_title"
                    required
                    type="string"
                    id="title"
                    className="form-control"
                  />
                  <label htmlFor="title">Title</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    value={eventForm.location}
                    onChange={handleChange}
                    placeholder="location"
                    name="location"
                    required
                    type="string"
                    id="location"
                    className="form-control"
                  />
                  <label htmlFor="location">Location</label>
                </div>
                <div className="form-floating mb-3">
                  <select
                    onChange={handleChange}
                    value={eventForm.country}
                    required
                    name="country"
                    id="country"
                    className="form-select mb-3 pt-3 pb-3"
                  >
                    <option value="">Choose a Country...</option>
                    {countries.map((country) => (
                      <option key={country.alpha2Code} value={country.name}>
                        {country.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-floating mb-3">
                  <input
                    value={date}
                    onChange={handleDateChange}
                    placeholder="date"
                    name="date"
                    required
                    type="date"
                    id="date"
                    className="form-control"
                  />
                  <label htmlFor="date">Date</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    value={time}
                    onChange={handleTimeChange}
                    placeholder="time"
                    name="time"
                    required
                    type="time"
                    id="time"
                    className="form-control"
                  />
                  <label htmlFor="time">Time</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    value={eventForm.picture}
                    onChange={handleChange}
                    placeholder="picture"
                    name="picture"
                    required
                    type="string"
                    id="picture"
                    className="form-control"
                  />
                  <label htmlFor="picture">Picture</label>
                </div>
                <div>
                  <select
                    onChange={handleChange}
                    value={eventForm.category}
                    required
                    name="category"
                    id="category"
                    className="form-select mb-3 pt-3 pb-3"
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
                </div>
                <div className="form-floating mb-3">
                  <input
                    value={eventForm.cost}
                    onChange={handleChange}
                    placeholder="cost"
                    name="cost"
                    required
                    type="string"
                    id="cost"
                    className="form-control"
                  />
                  <label htmlFor="cost">Cost</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    value={eventForm.language}
                    onChange={handleChange}
                    placeholder="language"
                    name="language"
                    required
                    type="string"
                    id="language"
                    className="form-control"
                  />
                  <label htmlFor="language">Language</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    value={eventForm.payment_type}
                    onChange={handleChange}
                    placeholder="payment"
                    name="payment_type"
                    required
                    type="string"
                    id="payment"
                    className="form-control"
                  />
                  <label htmlFor="payment">Payment</label>
                </div>
                <div className="form-floating mb-3">
                  <textarea
                    value={eventForm.description}
                    onChange={handleChange}
                    placeholder="description"
                    name="description"
                    required
                    id="description"
                    className="form-control"
                    rows="6"
                    style={{ height: "150px" }}
                  ></textarea>
                  <label htmlFor="description">Description</label>
                </div>
              </div>
              <div className="col-md-12 text-center">
                <button className="btn btn-primary">Host!</button>
              </div>
            </form>
          </div>
        </div>
        <div>
          <img
            src="https://i.imgur.com/XYVD23h.jpg"
            className="host-event"
            alt="card"
          />
        </div>
      </div>
    </div>
  );
}

export default CreateEventForm;
