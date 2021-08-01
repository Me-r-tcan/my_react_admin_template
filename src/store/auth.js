import { createSlice } from "@reduxjs/toolkit";
import jwtDecode from "jwt-decode";

import { apiCallBegan } from "./configuration/apiActions";
import constants from "../config/constants";

const slice = createSlice({
  name: "auth",
  initialState: {
    user: localStorage.getItem(constants.userTokenKey)
      ? jwtDecode(localStorage.getItem(constants.userTokenKey))
      : null,
    token: null,
    loading: false,
    error: false,
    errorMessage: "",
  },
  reducers: {
    authRequested: (auth) => {
      auth.loading = true;
      auth.errorMessage = "";
    },
    authReceived: (auth, action) => {
      auth.token = action.payload;
      auth.user = jwtDecode(action.payload);
      localStorage.setItem(constants.userTokenKey, action.payload);
      auth.loading = false;
      auth.errorMessage = "";
    },
    authRequestFailed: (auth, action) => {
      auth.loading = false;
      // auth.errorMessage = action.payload;
      // Kullanıcaya fazla bilgi vermemek için error mesajı hardcoded girildi.
      auth.errorMessage = "Geçersiz email yada şifre.";
    },
    authRestored: (auth, action) => {
      // Direk user obj getirildi.
      auth.token = action.payload;
      auth.user = jwtDecode(action.payload);
      auth.loading = false;
      auth.errorMessage = "";
    },
    authDeleted: (auth) => {
      auth.user = null;
      auth.errorMessage = "";
      localStorage.removeItem(constants.userTokenKey);
    },
  },
});

const { authRequested, authReceived, authRequestFailed } = slice.actions;
export const { authRestored, authDeleted } = slice.actions;
export default slice.reducer;

// Action Creators
const url = "/auth";

// Api sorgusu için bu kullanılmalı
export const login = (email, password) =>
  apiCallBegan({
    url,
    method: "post",
    data: { email, password },
    onStart: authRequested.type,
    onSuccess: authReceived.type,
    onError: authRequestFailed.type,
  });
