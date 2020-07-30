import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import MainScene from "./scenes/main";

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" render={() => <MainScene />} />
      <Route exact path="/card/:name/:id" render={() => <MainScene />} />
    </Switch>
  </Router>
);

export default Routes;
