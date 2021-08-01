import React from "react";
import PropType from "prop-types";
import Button from "@material-ui/core/Button";
import { useFormikContext } from "formik";

const SubmitButton = ({ title, ...otherProps }) => {
  const { handleSubmit } = useFormikContext();

  return (
    <Button onClick={handleSubmit} {...otherProps}>
      {title}
    </Button>
  );
};

SubmitButton.propTypes = {
  title: PropType.string.isRequired,
  color: PropType.string,
  width: PropType.string,
};

export default SubmitButton;
