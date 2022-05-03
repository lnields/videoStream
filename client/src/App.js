import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Room from "./Components/Room/Room"
import "./index.css";
import Home from "./Components/Home/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/:roomId/:name" component={Room} />
      </Switch>
    </Router>
  );
}

export default App;
