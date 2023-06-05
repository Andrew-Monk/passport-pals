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
    <nav className="navbar navbar-expand-lg navbar-dark bg-info navbar-fixed-top">
      <div className="container-fluid">
        <div className="row">
          <ul className="navbar-nav mx-2 me-auto mb-5 mb-lg-3">
            {token ? (
              <>
                <li>
                  <NavLink className="navbar" to="/">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink className="navbar" to="/events/list">
                    List of Events
                  </NavLink>
                </li>
                <li>
                  <NavLink className="navbar" to="/events/create">
                    Host Event
                  </NavLink>
                </li>
                <li>
                  <NavLink className="navbar" to="/myaccount">
                    Account
                  </NavLink>
                </li>
                <li>
                  <NavLink className="navbar" to="/" onClick={handleLogout}>
                    Logout
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink className="navbar" to="/">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink className="navbar" to="/login">
                    Login
                  </NavLink>
                </li>
                <li>
                  <NavLink className="navbar" to="/usersignup">
                    Sign Up
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
