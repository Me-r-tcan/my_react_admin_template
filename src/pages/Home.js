import React from "react";
import { Avatar, Container, CssBaseline } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import LoginForm from "../components/forms/LoginForm";
import paths from "../routers/paths";

import { login } from "../store/auth";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
}));

function Home() {
  const dispatch = useDispatch();
  const classes = useStyles();

  const { user, loading } = useSelector((state) => state.entities.auth);

  if (user && user.isAdmin) {
    return <Redirect to={paths.DASHBOARD} />;
  }

  const handleSubmit = ({ email, password }) => {
    dispatch(login(email, password));
  };

  return (
    <>
      <Container component='main' maxWidth='sm'>
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>

          <LoginForm handleSubmit={handleSubmit} loading={loading} />
        </div>
      </Container>
    </>
  );
}

export default Home;
