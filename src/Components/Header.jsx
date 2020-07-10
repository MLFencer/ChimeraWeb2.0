import React, { Component } from "react";

import chimeralogo from "./../chimeralogo.png";

import NavBar from "./NavBar";

class Header extends Component {
  //state = {};
  render() {
    return (
      <div>
        <div className="container">
          <img src={chimeralogo} style={{ float: "left", width: 150 }} />
          <div className="page-header">
            <h1 style={{ color: "rgb(0, 163, 204)", paddingTop: 20 }}>
              Chimera
              <small className="text-muted">
                &nbsp;&nbsp;The best gaming community on the web!
              </small>
            </h1>
          </div>
        </div>
        <NavBar />
      </div>
    );
  }
}

export default Header;
