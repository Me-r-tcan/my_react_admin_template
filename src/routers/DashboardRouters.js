import React from "react";
import { Switch, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import PrivateRoute from "./PrivateRoute";
import { Copyright, Navbar, Sidebar } from "../components/baseTemplate";
import PageNotFound from "../pages/PageNotFound";
import dashboardRoutes from "./dashboardRoutes";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
}));

function DashboardRouters() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />

      <Switch>
        {dashboardRoutes.map((route, index) => (
          <PrivateRoute
            key={index}
            path={route.path}
            exact={route.exact}
            children={
              <>
                <Navbar />
                <Sidebar />
              </>
            }
          />
        ))}
      </Switch>

      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Switch>
          {dashboardRoutes.map((route, index) => (
            <PrivateRoute
              key={index}
              path={route.path}
              exact={route.exact}
              children={
                <>
                  <route.main />
                  <Copyright />
                </>
              }
            />
          ))}

          <Route path='*'>
            <PageNotFound />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default DashboardRouters;
