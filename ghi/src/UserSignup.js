import { useState } from "react";
import useToken from "@galvanize-inc/jwtdown-for-react";
import { useNavigate } from "react-router-dom";

const UserSignup = () => {
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [language, setLanguage] = useState("");
  const { register } = useToken();
  const navigate = useNavigate();

  const handleRegistration = (e) => {
    e.preventDefault();
    const accountData = {
      full_name: fullName,
      password: password,
      email: email,
      country: country,
      language: language,
    };
    register(
      accountData,
      `${process.env.REACT_APP_USER_SERVICE_API_HOST}/api/user`
    );
    e.target.reset();
    navigate("/");
  };

  return (
    <div className="card text-bg-light mb-3">
      <h5 className="card-header">Signup</h5>
      <div className="card-body">
        <form onSubmit={(e) => handleRegistration(e)}>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              name="email"
              type="email"
              className="form-control"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              name="password"
              type="password"
              className="form-control"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input
              name="full_name"
              type="text"
              className="form-control"
              onChange={(e) => {
                setFullName(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Country</label>
            <input
              name="country"
              type="text"
              className="form-control"
              onChange={(e) => {
                setCountry(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Language</label>
            <input
              name="language"
              type="text"
              className="form-control"
              onChange={(e) => {
                setLanguage(e.target.value);
              }}
            />
          </div>
          <div>
            <input className="btn btn-primary" type="submit" value="Register" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserSignup;
