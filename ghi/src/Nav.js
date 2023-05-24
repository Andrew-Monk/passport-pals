import React from "react";
import { NavLink} from 'react-router-dom'


function Nav(){
    return(

        <nav className="navbar navbar-expand-lg navbar-dark bg-info navbar-fixed-top">
        <div className="container-fluid">
            <div className="row">
                <ul className="navbar-nav mx-2 me-auto mb-5 mb-lg-3">
                    <li>
                        <NavLink className="navbar" to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink className="navbar" to="/account">Account</NavLink>
                    </li>
                    <li>
                        <NavLink className="navbar" to="/login">Login</NavLink>
                    </li>
                    <li>
                        <NavLink className="navbar" to="/logout">Logout</NavLink>
                    </li>
                    <li>
                        <NavLink className="navbar" to="/events/list">List of Events</NavLink>
                    </li>
                </ul>
            </div>
        </div>
        </nav>
    )
}

export default Nav;
