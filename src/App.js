import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

//Component
import Header from "./components/Header";

//Pages
import Profile from "./pages/Profile";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Switch>
            {/* <Route exact path="/" component={Landing} /> */}
            <Route exact path="/username" component={Profile} />
            {/* <Route exact path="/signup" component={Signup} /> */}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
