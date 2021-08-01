import axios from "axios";

import * as actions from "../configuration/apiActions.js";
import { showMessage } from "../message.js";
import constants from "../../config/constants";

const api =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    if (action.type !== actions.apiCallBegan.type) return next(action);

    const {
      url,
      method,
      data,
      params,
      successMessage,
      onStart,
      onSuccess,
      onError,
    } = action.payload;

    if (onStart) dispatch({ type: onStart });
    next(action);

    axios.defaults.headers.common["x-auth-token"] = localStorage.getItem(
      constants.userTokenKey
    );

    try {
      const response = await axios.request({
        baseURL: `${process.env.REACT_APP_API_URL}`,
        url,
        method,
        data,
        params,
      });

      dispatch(actions.apiCallSuccess(response.data));

      if (onSuccess) dispatch({ type: onSuccess, payload: response.data });

      if (successMessage) {
        dispatch(
          showMessage({
            description: successMessage,
            type: "success",
          })
        );
      }
    } catch (error) {
      let errorMessage = "";
      if (error.response) {
        if (error.response.data.errorMessage) {
          errorMessage = error.response.data.errorMessage;
        } else {
          errorMessage = "Bir hata meydana geldi.";
        }
      } else {
        errorMessage = error.message;
      }
      dispatch(actions.apiCallFailed(errorMessage));

      dispatch(
        showMessage({
          description: errorMessage,
          type: "error",
        })
      );

      if (onError) dispatch({ type: onError, payload: errorMessage });
    }
  };

export default api;
