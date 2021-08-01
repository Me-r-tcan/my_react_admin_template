import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
}));

function Dashboard() {
  const classes = useStyles();

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <Container maxWidth='xl' className={classes.container}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8} lg={6}>
          <Paper className={fixedHeightPaper}>
            TESTTESTTESTTESTTEST TESTTESTTESTTESTTEST TESTTESTTESTTESTTEST
            TESTTESTTESTTESTTEST TESTTESTTESTTESTTEST TESTTESTTESTTESTTEST
            TESTTESTTESTTESTTEST TESTTESTTEST TESTTEST TESTTEST TESTTESTTEST
            TESTTEST TESTTESTTEST TESTTESTT ESTTESTTEST TESTTESTT ESTTESTTEST
          </Paper>
        </Grid>

        <Grid item xs={12} md={4} lg={6}>
          <Paper className={fixedHeightPaper}>bakalım</Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper className={classes.paper}>güzel</Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Dashboard;
