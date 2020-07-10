import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class NavBar extends Component {
  state = {};
  render() {
    const activeStyle = { color: "rgb(0, 163, 204)" };
    return (
      <nav class="navbar navbar-expand-md navbar-dark bg-dark container-fluid">
        <NavLink
          className="navbar-brand"
          activeStyle={activeStyle}
          exact
          to="/"
        >
          Chimera
        </NavLink>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExampleDefault"
          aria-controls="navbarsExampleDefault"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarsExampleDefault">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <NavLink
                className="nav-link"
                activeStyle={activeStyle}
                to="/servers"
              >
                Servers
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink
                className="nav-link"
                activeStyle={activeStyle}
                to="/forum"
              >
                Forum
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink
                className="nav-link"
                activeStyle={activeStyle}
                to="/gallery"
              >
                Gallery
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink
                className="nav-link"
                activeStyle={activeStyle}
                to="/userslist"
              >
                User List
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink
                className="nav-link"
                activeStyle={activeStyle}
                to="/contact"
              >
                Contact Info
              </NavLink>
            </li>
          </ul>
          <button
            className="btn btn-secondary my-2 my-sm-0"
            style={{ marginRight: 10 }}
            type="submit"
          >
            Login
          </button>
          <button className="btn btn-secondary my-2 my-sm-0" type="submit">
            Register
          </button>
        </div>
      </nav>
    );
  }
}

export default NavBar;
