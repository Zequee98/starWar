import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import clsx from 'clsx';

import store from './store';
import Drawer from './components/commons/drawer';
import AppBar from './components/commons/AppBar';
import OtherDrawer from './components/characters/otherDrawer';
import Routes from './routes';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('md')]: {
      width: 240,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    width: 240,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -500,
  },
  toolbar: theme.mixins.toolbar,
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
}));

const App = () => {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [open, setOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleDrawerChange = () => {
    setOpen(!open);
  };

  return (
    <Provider store={store}>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar handleDrawerToggle={handleDrawerToggle} open={open} />
        <Drawer handleDrawerToggle={handleDrawerToggle} mobileOpen={mobileOpen} />

        <main className={clsx(classes.content, { [classes.contentShift]: open })}>
          <div className={classes.toolbar} />
          <Routes handleDrawerChange={handleDrawerChange} />
        </main>

        <OtherDrawer handleDrawerChange={handleDrawerChange} open={open} />
      </div>
    </Provider>
  );
};

export default App;
