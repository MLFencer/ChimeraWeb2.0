import React, { Component } from "react";

import chimeralogo from "./../chimeralogo.png";

import NavBar from "./NavBar";

class Header extends Component {
  //state = {};
  render() {
    return (
      <div
        className="border border-primary rounded"
        style={{ height: "auto", margin: 8, marginTop: 10, padding: 8 }}
      >
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-3">
              <img src={chimeralogo} style={{ width: "inherit" }} />
            </div>
            <div className="col-7">
              <div className="row">
                <div className="col-3">
                  <h1 className="text-primary">Chimera</h1>
                </div>
                <div className="col align-self-center">
                  <h4 className="text-muted">
                    The best gaming community on the web!
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-12 bg-dark border rounded-pill border-primary">
              <NavBar />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
