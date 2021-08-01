import React from "react";
import { IconButton } from "@material-ui/core";
import ImageIcon from "@material-ui/icons/Image";
import { blue } from "@material-ui/core/colors";

function AppDataGridImageBtn({ onClick }) {
  return (
    <IconButton color='secondary' aria-label='Göster' onClick={onClick}>
      <ImageIcon style={{ color: blue[500] }} />
    </IconButton>
  );
}

export default AppDataGridImageBtn;
