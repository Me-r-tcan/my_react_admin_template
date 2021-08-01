import React from "react";
import { Link, Typography } from "@material-ui/core";

function Copyright() {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {"Copyright © "}
      <Link
        rel='noopener noreferrer'
        color='inherit'
        href='https://neocrea.com/'
        target='_blank'
      >
        Neocrea
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default Copyright;
