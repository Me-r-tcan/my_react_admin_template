import React from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardMedia } from "@material-ui/core";

import AppModal from "./AppModal";

const useStyles = makeStyles(() => ({
  image: {
    maxWidth: 300,
  },
}));

function ImagePanel({ open, setOpen }) {
  const classes = useStyles();

  const { url } = useSelector((state) => state.entities.image);

  return (
    <AppModal open={open} setOpen={setOpen}>
      <Card className={classes.image}>
        <CardMedia
          component='img'
          alt='Kategori resmi'
          image={url}
          title='Kategori resmi'
        />
      </Card>
    </AppModal>
  );
}

export default ImagePanel;
