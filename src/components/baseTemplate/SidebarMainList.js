import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { List, ListItem, ListItemText, ListItemIcon } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import DashboardIcon from "@material-ui/icons/Dashboard";

import paths from "../../routers/paths";

const useStyles = makeStyles(() => ({
  link: { color: "inherit", textDecoration: "none" },
}));

function SidebarMainList() {
  const classes = useStyles();

  const { user } = useSelector((state) => state.entities.auth);

  return (
    <List>
      <ListItem>
        <ListItemIcon>
          <AccountCircleIcon />
        </ListItemIcon>
        <ListItemText
          primary={user.username ? user.username : "Kullanıcı Adı"}
        />
      </ListItem>

      <NavLink to={paths.DASHBOARD} className={classes.link}>
        <ListItem button>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary='Ana Sayfa' />
        </ListItem>
      </NavLink>
    </List>
  );
}

export default SidebarMainList;
