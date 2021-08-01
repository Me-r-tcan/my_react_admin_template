import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import { Alert } from "@material-ui/lab";
import { useSelector, useDispatch } from "react-redux";

import { closeMessage } from "../../store/message";

function AppFlashMessage({ verticalPosition, horizontalPosition, duration }) {
  const dispatch = useDispatch();

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    dispatch(closeMessage());
  };

  const { open, type, description } = useSelector(
    (state) => state.entities.message
  );

  return (
    <Snackbar
      open={open}
      autoHideDuration={duration}
      onClose={handleClose}
      anchorOrigin={{
        vertical: verticalPosition,
        horizontal: horizontalPosition,
      }}
    >
      <Alert onClose={handleClose} severity={type}>
        {description}
      </Alert>
    </Snackbar>
  );
}

export default AppFlashMessage;
