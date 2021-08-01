import React from "react";

import paths from "./paths";
import Home from "../pages/Home";

const homeRoutes = [
  {
    path: paths.HOME,
    exact: true,
    main: () => <Home />,
  },
];

export default homeRoutes;
