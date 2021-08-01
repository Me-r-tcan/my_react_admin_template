import React from "react";
import { useFormikContext } from "formik";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardMedia, IconButton, InputLabel } from "@material-ui/core";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";

import { convertBase64, isBase64 } from "../../utils/image";

const useStyles = makeStyles((theme) => ({
  label: {
    fontSize: 14,
    marginLeft: theme.spacing(2),
  },
  icon: {
    fontSize: 40,
  },
  image: {
    maxWidth: 300,
  },
}));

const AppFormImageField = ({ name, showInputArea = true }) => {
  const classes = useStyles();

  const { setFieldValue, errors, touched, values } = useFormikContext();

  const handleFileRead = async (event) => {
    const file = event.target.files[0];
    const base64 = await convertBase64(file);

    setFieldValue(name, base64);
  };

  return (
    <>
      {showInputArea && (
        <>
          <label htmlFor='icon-button-file'>
            <IconButton color='primary' component='span'>
              <PhotoCameraIcon className={classes.icon} />
            </IconButton>
          </label>

          <InputLabel
            className={classes.label}
            error={Boolean(touched[name]) && Boolean(errors[name])}
          >
            {!Boolean(errors[name]) || !touched[name] ? null : errors[name]}
          </InputLabel>

          <input
            accept='image/*'
            id='icon-button-file'
            type='file'
            style={{ visibility: "hidden" }}
            onChange={(e) => handleFileRead(e)}
          />
        </>
      )}

      {values[name] && (
        <Card className={classes.image}>
          <CardMedia
            component='img'
            alt='Kategori resmi'
            height='250'
            image={
              isBase64(values[name])
                ? values[name]
                : `${process.env.REACT_APP_API_URL}/${values[name]}`
            }
            title='Kategori resmi'
          />
        </Card>
      )}
    </>
  );
};

export default AppFormImageField;
