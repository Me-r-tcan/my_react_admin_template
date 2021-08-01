import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import paths from "./paths";

function PrivateRoute({ children, ...rest }) {
  const { user } = useSelector((state) => state.entities.auth);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        user && user.isAdmin ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: paths.LOGIN,
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;
