import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { indexRoutes } from "./Routes/App.routes";
import PrivateRoute from "./Routes/Private.routes";

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        {indexRoutes.map((route) => {
          if (route.authenticated) {
            return (
              <PrivateRoute
                path={route.path}
                component={route.component}
                key={route.name}
              />
            );
          } else {
            return (
              <Route
                exact
                path={route.path}
                component={route.component}
                key={route.name}
              />
            );
          }
        })}
      </Switch>
    </Router>
  );
};

export default App;
