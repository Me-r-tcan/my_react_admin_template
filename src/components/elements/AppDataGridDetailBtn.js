import React from "react";
import { IconButton } from "@material-ui/core";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { blue } from "@material-ui/core/colors";

function AppDataGridDetailBtn({ onClick }) {
  return (
    <IconButton color='secondary' aria-label='Detay' onClick={onClick}>
      <VisibilityIcon style={{ color: blue[500] }} />
    </IconButton>
  );
}

export default AppDataGridDetailBtn;
