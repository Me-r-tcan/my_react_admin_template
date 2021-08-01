import React from "react";

import Dashboard from "../pages/Dashboard";
import paths from "./paths";

const dashboardRoutes = [
  {
    path: paths.DASHBOARD,
    exact: true,
    main: () => <Dashboard />,
  },
];

export default dashboardRoutes;
