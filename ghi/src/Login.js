import useToken from "@galvanize-inc/jwtdown-for-react";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, token } = useToken();

  const username = email;

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username, password);
    e.target.reset();
  };

  return (
    <>
      <div>
        <h1>Login</h1>
        <div>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div>
              <label>Email:</label>
              <input
                name="email"
                type="text"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label>Password:</label>
              <input
                name="password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <button type="submit" value="Login">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
