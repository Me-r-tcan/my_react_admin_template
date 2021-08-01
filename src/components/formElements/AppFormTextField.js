import React from "react";
import PropType from "prop-types";
import { useFormikContext } from "formik";
import TextField from "@material-ui/core/TextField";

const AppFormTextField = ({ name, backgroundColor, ...otherProps }) => {
  const { setFieldTouched, setFieldValue, errors, touched, values } =
    useFormikContext();

  return (
    <>
      <TextField
        value={values[name]}
        onChange={(event) => setFieldValue(name, event.target.value)}
        onBlur={() => setFieldTouched(name)}
        error={Boolean(touched[name]) && Boolean(errors[name])}
        helperText={
          !Boolean(errors[name]) || !touched[name] ? null : errors[name]
        }
        {...otherProps}
      />
    </>
  );
};

AppFormTextField.propTypes = {
  name: PropType.string,
  width: PropType.string,
};

export default AppFormTextField;
