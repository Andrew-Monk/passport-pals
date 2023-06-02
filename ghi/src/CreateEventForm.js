import React, { useState } from "react";
import useToken from "@galvanize-inc/jwtdown-for-react";

function CreateEventForm () {
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
  const { token } = useToken();


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

    const createEventUrl = "http://localhost:8000/api/events";
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

  return (
    <div className="row">
      <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4 text-dark">
          <h1>Host an Event!</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-floating mb-4">
              <div className="form-floating mb-0">
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
                <label htmlFor="vin">Title</label>
              </div>
              <div className="form-floating mb-0">
                <input
                  value={location}
                  onChange={handleLocationChange}
                  placeholder="location"
                  name="location"
                  required
                  type="string"
                  id="location"
                  className="form-control"
                />
                <label htmlFor="location">Location</label>
              </div>
              <div className="form-floating mb-0">
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
              <div className="form-floating mb-0">
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
              <div className="form-floating mb-3">
                <input
                  value={category}
                  onChange={handleCategoryChange}
                  placeholder="category"
                  name="category"
                  required
                  type="string"
                  id="category"
                  className="form-control"
                />
                <label htmlFor="category">Category</label>
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
                <input
                  value={description}
                  onChange={handleDescriptionChange}
                  placeholder="description"
                  name="description"
                  required
                  type="string"
                  id="description"
                  className="form-control"
                />
                <label htmlFor="description">Description</label>
              </div>
            </div>
            <div className="col-md-12 text-center">
              <button className="btn btn-primary">Host!</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateEventForm;
