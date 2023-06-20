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
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [picture, setPicture] = useState("");
  const [category, setCategory] = useState("");
  const [cost, setCost] = useState("");
  const [language, setLanguage] = useState("");
  const [payment, setPayment] = useState("");
  const [description, setDescription] = useState("");
  const [country, setCountry] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [countries, setCountries] = useState([]);
  const { token } = useToken();
  const navigate = useNavigate();

  const fetchCountries = async () => {
    try {
      const response = await axios.get("https://restcountries.com/v2/all");
      setCountries(response.data);
    } catch (error) {
      console.log("Error fetching countries:", error);
    }
  };


  const handleTitleChange = (event) => {
    const value = event.target.value;
    setTitle(value);
  };

  const handleLocationChange = (event) => {
    const value = event.target.value;
    setLocation(value);
  };

  const handleDateChange = (event) => {
    const value = event.target.value;
    setDate(value);
  };

  const handleTimeChange = (event) => {
    const value = event.target.value;
    setTime(value);
  };

  const handlePictureChange = (event) => {
    const value = event.target.value;
    setPicture(value);
  };

  const handleCategoryChange = (event) => {
    const value = event.target.value;
    setCategory(value);
  };

  const handleCostChange = (event) => {
    const value = event.target.value;
    setCost(value);
  };

  const handleLanguageChange = (event) => {
    const value = event.target.value;
    setLanguage(value);
  };

  const handlePaymentChange = (event) => {
    const value = event.target.value;
    setPayment(value);
  };

  const handleDescriptionChange = (event) => {
    const value = event.target.value;
    setDescription(value);
  };

  const handleCountryChange = (event) => {
    const value = event.target.value;
    setCountry(value);
  };

  const handlePostalCodeChange = (event) => {
    const value = event.target.value;
    setPostalCode(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {};

    data.event_title = title;
    data.location = location;
    data.date = date + " " + time;
    data.picture = picture;
    data.category = category;
    data.cost = cost;
    data.payment_type = payment;
    data.language = language;
    data.description = description;
    data.country = country;
    data.postal_code = postalCode;
    console.log(data)

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
      setTitle("");
      setLocation("");
      setPostalCode("");
      setCountry("");
      setDate("");
      setTime("");
      setPicture("");
      setCategory("");
      setCost("");
      setLanguage("");
      setPayment("");
      setDescription("");
    }
  };

  useEffect(() => {
    if (!token) {
      navigate("/login");
    } else {
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
                    value={title}
                    onChange={handleTitleChange}
                    placeholder="title"
                    name="title"
                    required
                    type="string"
                    id="title"
                    className="form-control"
                  />
                  <label htmlFor="title">Title</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    value={location}
                    onChange={handleLocationChange}
                    placeholder="city"
                    name="city"
                    required
                    type="string"
                    id="city"
                    className="form-control"
                  />
                  <label htmlFor="location">City</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    value={postalCode}
                    onChange={handlePostalCodeChange}
                    placeholder="postal code"
                    name=""
                    required
                    type="string"
                    id="postal code"
                    className="form-control"
                  />
                  <label htmlFor="postal code">Postal Code</label>
                </div>
                <div className="form-floating mb-3">
                  <select
                    onChange={handleCountryChange}
                    value={country}
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
                    value={picture}
                    onChange={handlePictureChange}
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
                    onChange={handleCategoryChange}
                    value={category}
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
                    value={cost}
                    onChange={handleCostChange}
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
                    value={language}
                    onChange={handleLanguageChange}
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
                    value={payment}
                    onChange={handlePaymentChange}
                    placeholder="payment"
                    name="payment"
                    required
                    type="string"
                    id="payment"
                    className="form-control"
                  />
                  <label htmlFor="payment">Payment</label>
                </div>
                <div className="form-floating mb-3">
                  <textarea
                    value={description}
                    onChange={handleDescriptionChange}
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
