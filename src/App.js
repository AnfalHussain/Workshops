import React, { Component } from "react";
import { Switch, Route, Router, Redirect, withRouter } from "react-router-dom";
// import { connect } from "react-redux";

//Style
import "./App.css";

//Components
import List from "./components/WorkshopsList";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Profile from "./components/Profile";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="App-header">
      <Navbar />
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/profile" component={Profile} />
        <Route exact path="/" component={List} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

// export default App;
// export default withRouter(connect(null, mapDispatchToProps)(App));
export default App;
