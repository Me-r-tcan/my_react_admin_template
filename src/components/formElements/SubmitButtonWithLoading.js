import React from "react";
import PropType from "prop-types";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";

import { useFormikContext } from "formik";

const SubmitButtonWithLoading = ({ title, loading, ...otherProps }) => {
  const { handleSubmit } = useFormikContext();

  return (
    <>
      {loading ? (
        <Button onClick={handleSubmit} disabled={true} {...otherProps}>
          <CircularProgress size={25} />
        </Button>
      ) : (
        <Button onClick={handleSubmit} {...otherProps}>
          {title}
        </Button>
      )}
    </>
  );
};

SubmitButtonWithLoading.propTypes = {
  title: PropType.string.isRequired,
  color: PropType.string,
  width: PropType.string,
};

export default SubmitButtonWithLoading;
