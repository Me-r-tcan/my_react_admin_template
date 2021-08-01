import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Typography, useMediaQuery } from "@material-ui/core";
import ErrorIcon from "@material-ui/icons/Error";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    background: "inherit",
  },
  icon: {
    fontSize: 120,
    marginTop: 20,
  },
  typography: {
    marginTop: 30,
  },
}));

function DataNotFound() {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <>
      <ErrorIcon className={classes.icon} />

      <Typography
        className={classes.typography}
        variant={matches ? "h1" : "h5"}
        component='h3'
        display='inline'
        gutterBottom
      >
        Veri Bulunamadı.
      </Typography>
    </>
  );
}

export default DataNotFound;
