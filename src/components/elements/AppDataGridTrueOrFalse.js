import React from "react";
import CloseIcon from "@material-ui/icons/Close";
import DoneIcon from "@material-ui/icons/Done";
import { green, red } from "@material-ui/core/colors";

function AppDataGridTrueOrFalse({ isTrue }) {
  return (
    <>
      {isTrue ? (
        <DoneIcon style={{ color: green[500], marginLeft: 40 }} />
      ) : (
        <CloseIcon style={{ color: red[500], marginLeft: 40 }} />
      )}
    </>
  );
}

export default AppDataGridTrueOrFalse;
