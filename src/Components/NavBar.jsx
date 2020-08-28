import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class NavBar extends Component {
  state = {
    navItems: [
      { Text: "Servers", To: "/servers" },
      { Text: "Forum", To: "/forum" },
      { Text: "Gallery", To: "/gallery" },
      { Text: "User List", To: "/userlist" },
      { Text: "Contact Info", To: "/contact" },
    ],
  };
  render() {
    const activeStyle = { color: "rgb(0, 163, 204)" };
    return (
      <nav class="navbar navbar-expand-md navbar-dark container-fluid">
        <NavLink
          className="navbar-brand font-weight-bold"
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
            {this.state.navItems.map((item) =>
              this.NavButton(item.Text, activeStyle, item.To)
            )}
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

  NavButton = (text, activeStyle, to) => {
    return (
      <li class="nav-item">
        <NavLink
          className="nav-link"
          activeStyle={activeStyle}
          style={{ color: "white" }}
          to={to}
        >
          {text}
        </NavLink>
      </li>
    );
  };
}

export default NavBar;
