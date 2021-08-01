import { combineReducers } from "@reduxjs/toolkit";

import authReducer from "../auth";
import messageReducer from "../message";
import drawerReducer from "../drawer";

export default combineReducers({
  auth: authReducer,
  message: messageReducer,
  drawer: drawerReducer,
});
