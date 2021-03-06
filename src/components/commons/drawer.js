import React, { useState } from 'react';
import { Link } from "react-router-dom";

import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import MovieIcon from '@material-ui/icons/Movie';
import PeopleIcon from '@material-ui/icons/People';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  drawer: {
    [theme.breakpoints.up('md')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    width: drawerWidth,
    marginTop: 64,
    backgroundColor: '#4f5b62'
  },
  drawerPaperMobile: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,

}));

const ResponsiveDrawer = ({ container, mobileOpen, handleDrawerToggle }) => {
  const classes = useStyles();
  const [select, setSelect] = useState(window.location.pathname);

  const handleChangeSelect = (path) => {
    handleDrawerToggle(false);
    setSelect(path);
  };

  const drawer = (
    <div>
      <List>
        <ListItem
          button
          component={Link}
          to='/'
          onClick={() => handleChangeSelect('/')}
          selected={select === '/'}
        >
          <ListItemIcon><PeopleIcon style={{ color: 'white' }} /></ListItemIcon>
          <ListItemText primary="Personajes" style={{ color: 'white' }} />
        </ListItem>
        <ListItem
          button
          component={Link}
          to='/movies'
          onClick={() => handleChangeSelect('/movies')}
          selected={select === '/movies'}
        >
          <ListItemIcon><MovieIcon style={{ color: 'white' }} /></ListItemIcon>
          <ListItemText primary="Peliculas" style={{ color: 'white' }} />
        </ListItem>
      </List>
    </div>
  );

  return (
    <nav className={classes.drawer} aria-label="mailbox folders">
      <Hidden mdUp implementation="css">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          classes={{ paper: classes.drawerPaperMobile }}
          ModalProps={{ keepMounted: true }}
        >
          <div className={classes.toolbar} />
          {drawer}
        </Drawer>
      </Hidden>
      <Hidden smDown implementation="css">
        <Drawer
          classes={{ paper: classes.drawerPaper }}
          variant="permanent"
          open
        >
          {drawer}
        </Drawer>
      </Hidden>
    </nav>
  );
};

export default ResponsiveDrawer;
