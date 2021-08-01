import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles(() => ({
  root: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
  loader: {
    left: "50%",
    top: "30%",
    zIndex: 9999,
    position: "absolute",
  },
}));

function AppProgress({ visible = false }) {
  const classes = useStyles();

  if (!visible) return null;

  return (
    <div className={classes.root}>
      <CircularProgress color='primary' className={classes.loader} />
    </div>
  );
}

export default AppProgress;
