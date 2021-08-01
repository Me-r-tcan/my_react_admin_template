import React from "react";
import { useDispatch } from "react-redux";
import { List, ListItem, ListItemText, ListItemIcon } from "@material-ui/core";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import { authDeleted } from "../../store/auth";

function SidebarSecondaryList() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(authDeleted());
  };

  return (
    <List>
      <ListItem button onClick={handleLogout}>
        <ListItemIcon>
          <ExitToAppIcon />
        </ListItemIcon>
        <ListItemText primary='Çıkış' />
      </ListItem>
    </List>
  );
}

export default SidebarSecondaryList;
