import useToken from "@galvanize-inc/jwtdown-for-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import bg from "./static/bg.jpg";

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
        <div className="row offset-1">
          <div className="offset-4 col-4">
            <div className="login-card">
              {/* <h1 className="login-title">Login</h1> */}
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
                    <div className="mb-2">
                      <input
                        placeholder="Email"
                        name="email"
                        type="email"
                        className="form-control"
                        onChange={(e) => setEmail(e.target.value)}
                        // style={{ marginBottom: "5px" }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="mb-2">
                      <input
                        placeholder="Password"
                        name="password"
                        type="password"
                        className="form-control"
                        onChange={(e) => setPassword(e.target.value)}
                        // style={{ marginBottom: "10px" }}
                      />
                    </div>
                  </div>
                  <div>
                    <button
                      className="login-button"
                      type="submit"
                      value="Login"
                    >
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
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
