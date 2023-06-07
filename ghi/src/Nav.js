import { React, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import useToken from "@galvanize-inc/jwtdown-for-react";

function Nav() {
  const { logout } = useToken();
  const { token } = useToken();
  const [accountData, setAccountData] = useState({});

  const handleLogout = () => {
    logout();
    alert("You have been logged out successfully");
  };

  useEffect(() => {
    if (token) {
      const handleFetch = async () => {
        const accountUrl = "http://localhost:8000/token";
        const response = await fetch(accountUrl, {
          credentials: "include",
        }).then((response) => response.json());
        console.log(response);
        setAccountData(response.account);
      };

      handleFetch();
    }
  }, [token]);

  return (
    <nav className="#">
      <div className="#">
        <div className="nav">
          <div className="nav-title-container">
            <p className="nav-title">PassportPals</p>
            <img className="logo-icon" src="https://i.imgur.com/tYs0c3n.png" />
          </div>
          {token ? (
            <div className="navlinks">
              <li>
                <NavLink className="navlink" to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className="navlink" to="/events/list">
                  See All Events
                </NavLink>
              </li>
              <li>
                <NavLink className="navlink" to="/events/create">
                  Host Event
                </NavLink>
              </li>
              <li>
                <NavLink className="navlink" to="/myaccount">
                  Account
                </NavLink>
              </li>
              <li>
                <NavLink className="navlink" to="/" onClick={logout}>
                  Logout
                </NavLink>
              </li>
              <div className="nav-user">Welcome, {accountData.full_name}!</div>
            </div>
          ) : (
            <div className="navlinks">
              <li>
                <NavLink className="navlink" to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className="navlink" to="/login">
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink className="navlink" to="/usersignup">
                  Sign Up
                </NavLink>
              </li>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Nav;
