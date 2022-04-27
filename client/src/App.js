import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SwipeableEdgeDrawer from "./chatDrawer/toggleDrawer"
import "./index.css";
import Home from "./Home/Home";



function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/:roomId/:name" component={SwipeableEdgeDrawer} />
      </Switch>
    </Router>
  );
}

export default App;
