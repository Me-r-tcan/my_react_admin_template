import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AppFlashMessage from "./components/elements/AppFlashMessage";
import configureStore from "./store/configuration/configureStore";

import DashboardRouters from "./routers/DashboardRouters";
import homeRoutes from "./routers/homeRoutes";

function App() {
  const store = configureStore();

  return (
    <Provider store={store}>
      <AppFlashMessage
        verticalPosition='top'
        horizontalPosition='center'
        duration={3000}
      />

      <Router>
        <Switch>
          {homeRoutes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              children={<route.main />}
            />
          ))}

          <DashboardRouters />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
