import React from "react";
import { Checkbox, FormControlLabel } from "@material-ui/core";
import { useFormikContext } from "formik";

function AppFormCheckboxField({ name, label, color = "primary", ...others }) {
  const { setFieldValue, values } = useFormikContext();

  return (
    <>
      <FormControlLabel
        control={
          <Checkbox
            checked={values[name]}
            onChange={(event) => {
              console.log(event.target.checked);
              setFieldValue(name, event.target.checked);
            }}
            name={name}
            color={color}
          />
        }
        label={label}
        {...others}
      />
    </>
  );
}

export default AppFormCheckboxField;
