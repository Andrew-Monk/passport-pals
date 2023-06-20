import { useState } from "react";
import useToken from "@galvanize-inc/jwtdown-for-react";
import { useNavigate } from "react-router-dom";

const UserSignup = () => {
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [language, setLanguage] = useState("");
  const { register, login } = useToken();
  const navigate = useNavigate();
  const username = email


  const handleRegistration = async (e) => {
    e.preventDefault();
    const accountData = {
      full_name: fullName,
      password: password,
      email: username,
      country: country,
      language: language,
    };
    register(
      accountData,
      `${process.env.REACT_APP_PASSPORT_PALS_API_HOST}/api/accounts`
    );
    e.target.reset();
    await login(username, password);
    navigate("/");
  };

  return (
    <div className="row offset-1">
        <div className="offset-4 col-4">
        <div className="signup-card">
          <h1 className="signup-header">Become a Member!</h1>
          <form onSubmit={(e) => handleRegistration(e)}>
            <div className="mb-2">
              <input
                name="email"
                type="email"
                className="form-control"
                placeholder="Email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="mb-2">
              <input
                name="password"
                type="password"
                placeholder="Password"
                className="form-control"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div className="mb-2">
              <input
                name="full_name"
                type="text"
                placeholder="Full Name"
                className="form-control"
                onChange={(e) => {
                  setFullName(e.target.value);
                }}
              />
            </div>
            <div className="mb-2">
              <input
                name="country"
                type="text"
                placeholder="Country"
                className="form-control"
                onChange={(e) => {
                  setCountry(e.target.value);
                }}
              />
            </div>
            <div className="mb-2">
              <input
                name="language"
                placeholder="Language"
                className="form-control"
                onChange={(e) => {
                  setLanguage(e.target.value);
                }}
              />
            </div>
            <div>
              <input className="btn btn-primary" type="submit" value="Sign Up!" />
            </div>
          </form>
    </div>
          <div>
            <img
              src="https://i.imgur.com/TDkZ7H2.jpg"
              className="host-event"
              alt="card"
              style={{ zIndex: -1}}
            />
          </div>
        </div>
      </div>
  );
};

export default UserSignup;
