import useToken from "@galvanize-inc/jwtdown-for-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import bg from "./static/1.jpg";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useToken();
  const navigate = useNavigate();
  const picCount = 7;
  const [background, setBackground] = useState(bg);
  const username = email;

  const changeBackground = () => {
    const num = Math.floor(Math.random() * picCount);
    const randomPic = `url(background/${num}.jpg)`;
    setBackground(randomPic);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username, password);
    e.target.reset();
    navigate("/");
  };

  useEffect(() => {
    changeBackground();
  }, []);

  return (
    <>
      <div>
        <h1 className="login-title">Login</h1>
        <div>
          <h2 className="login-signup-member">
            Not a member yet?
            <a href="/usersignup" className="login-signup-link">
            Sign Up
            </a>
          </h2>
        </div>
        <div>
          <form className="login-form" onSubmit={(e) => handleSubmit(e)}>
            <div>
              <label>Email:</label>
              <input
                name="email"
                type="text"
                onChange={(e) => setEmail(e.target.value)}
                style={{ marginBottom: "10px" }}
              />
            </div>
            <div>
              <label>Password:</label>
              <input
                name="password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                style={{ marginBottom: "10px" }}
              />
            </div>
            <div>
              <button className="login-button" type="submit" value="Login">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
      <div>
        <img
          className="hero-image"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), ${background}`,
            backgroundSize: "cover",
            zIndex: -1,
          }}
          alt="card"
        />
      </div>
    </>
  );
}

export default Login;
