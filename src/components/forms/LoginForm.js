import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import {
  AppForm,
  AppFormTextField,
  SubmitButtonWithLoading,
} from "../formElements";
import validationSchema from "../formValidations/login";

const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const LoginForm = ({ handleSubmit, loading, ...otherProps }) => {
  const classes = useStyles();

  return (
    <form className={classes.form} noValidate>
      <AppForm
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
        {...otherProps}
      >
        <AppFormTextField
          variant='outlined'
          margin='normal'
          required
          fullWidth
          id='email'
          label='Mail'
          name='email'
          autoComplete='email'
          autoFocus
        />
        <AppFormTextField
          variant='outlined'
          margin='normal'
          required
          fullWidth
          name='password'
          label='Şifre'
          type='password'
          id='password'
          autoComplete='current-password'
        />

        <SubmitButtonWithLoading
          title='Giriş Yap'
          type='submit'
          fullWidth
          variant='contained'
          color='primary'
          className={classes.submit}
          loading={loading}
        />
      </AppForm>
    </form>
  );
};

export default LoginForm;
