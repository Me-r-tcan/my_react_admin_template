import React from "react";
import {
  Container,
  Divider,
  Grid,
  Typography,
  IconButton,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(2),
  },
  icon: {
    marginBottom: "5px",
  },
}));

function DashboardFormHolder({ children, title }) {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Container maxWidth='lg' className={classes.container}>
      <Grid item xs={12} md={12} lg={11}>
        <IconButton onClick={() => history.goBack()} className={classes.icon}>
          <ArrowBackIcon style={{ fontSize: 25 }} />
        </IconButton>

        <Typography
          component='h1'
          variant='h5'
          color='inherit'
          display='inline'
          noWrap
        >
          {title}
        </Typography>
      </Grid>

      <Divider />

      <Grid container spacing={4}>
        {children}
      </Grid>
    </Container>
  );
}

export default DashboardFormHolder;
