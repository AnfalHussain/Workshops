import React, { Component } from "react";
import { Switch, Route, Router, Redirect, withRouter } from "react-router-dom";
// import { connect } from "react-redux";

//Style
import "./App.css";

//Components
import List from "./components/WorkshopsList";
import Navbar from "./components/Navbar";

class App extends Component {
  render() {
    return (
      <div className="App-header">
        <Navbar />
        <Switch>
          <Route path="/" component={List} />
        </Switch>
      </div>
    );
  }
}

// export default App;
// export default withRouter(connect(null, mapDispatchToProps)(App));
export default withRouter(App);
