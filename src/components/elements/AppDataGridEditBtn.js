import React from "react";
import { IconButton } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import { blue } from "@material-ui/core/colors";

function AppDataGridEditBtn({ onClick }) {
  return (
    <IconButton color='secondary' aria-label='Güncelle' onClick={onClick}>
      <EditIcon style={{ color: blue[500] }} />
    </IconButton>
  );
}

export default AppDataGridEditBtn;
