import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./Components/Header";
import Footer from "./Components/Footer";

class MainBody extends Component {
  state = {};
  render() {
    return (
      <div className="">
        <Header />
        <div
          className="row justify-content-center align-items-start m-0"
          style={{ minHeight: "calc(100vh - 273px)" }}
        >
          <div className="col-11">
            <div className="row justify-content-center">
              <div
                className="col-7 bg-dark border border-primary rounded"
                style={{ margin: 4 }}
              ></div>
              <div
                className="col-3 bg-transparent border border-primary rounded"
                style={{ margin: 4, minHeight: "calc(100vh - 327px)" }}
              ></div>
            </div>
          </div>

          <div
            className="col-12 align-self-end bg-dark border border-primary rounded"
            style={{ height: 40 }}
          >
            <h4 className="text-muted">I Am a Footer!</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default MainBody;
