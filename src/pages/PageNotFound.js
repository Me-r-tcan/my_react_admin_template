import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import WarningIcon from "@material-ui/icons/Warning";
import { Grid, Typography, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    background: "inherit",
  },
  icon: {
    fontSize: 150,
  },
}));

function PageNotFound() {
  const classes = useStyles();
  let history = useHistory();

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={4} lg={3} className={classes.paper}>
        <WarningIcon className={classes.icon} />
      </Grid>
      <Grid item xs={12} md={8} lg={9} className={classes.paper}>
        <Typography variant='h1' component='h3' gutterBottom>
          Sayfa Bulunamadı.
        </Typography>

        <Button variant='contained' onClick={() => history.goBack()}>
          GERİ DÖN
        </Button>
      </Grid>
    </Grid>
  );
}

export default PageNotFound;
