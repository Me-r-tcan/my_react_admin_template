import React from "react";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { IconButton, Divider, Drawer } from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

import constants from "../../config/constants";
import SidebarMainList from "./SidebarMainList";
import SidebarSecondaryList from "./SidebarSecondaryList";

import { closeDrawer } from "../../store/drawer";

const useStyles = makeStyles((theme) => ({
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: constants.sideBarDrawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
}));

function Sidebar() {
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleDrawerClose = () => {
    dispatch(closeDrawer());
  };

  const { open } = useSelector((state) => state.entities.drawer);

  return (
    <Drawer
      variant='permanent'
      classes={{
        paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
      }}
      open={open}
    >
      <div className={classes.toolbarIcon}>
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <SidebarMainList />
      <Divider />
      <SidebarSecondaryList />
    </Drawer>
  );
}

export default Sidebar;
