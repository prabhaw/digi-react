import React from "react";
import { Route, Redirect } from "react-router-dom";

interface RouteProps {
  path: string;
  exact?: boolean;
  component: React.ComponentType<any>;
}

const PrivateRoute: React.FC<RouteProps> = ({
  path,
  component: Component,
  ...restProps
}) => {
  const token = localStorage.getItem("token");
  return (
    <Route
      path={path}
      {...restProps}
      render={(props) =>
        token ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export default PrivateRoute;
