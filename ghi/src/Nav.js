import React from "react";
import { NavLink } from "react-router-dom";
import useToken from "@galvanize-inc/jwtdown-for-react";

function Nav() {
  const { logout } = useToken();
  const { token } = useToken();

  const handleLogout = () => {
    logout();
    alert("You have been logged out successfully");
  };

  return (
    <nav className="#">
      <div className="#">
        <div className="nav">
          <div className="nav-title-container">
            <p className="nav-title">PassportPals</p>
            <img className="suitcase" src="https://i.imgur.com/VF1Nh3f.png" />
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
                  List of Events
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
