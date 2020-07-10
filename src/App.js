import React from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  return (
    <React.Fragment>
      <div
        //style={{ backgroundColor: "rgb(22,22,22)" }}
        className="d-flex flex-column h-100"
      >
        <Header />
        <Switch></Switch>
        <main role="main" className="flex-shrink-0">
          <div className="container">
            <h1 className="mt-5">Sticky footer</h1>
          </div>
        </main>
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
