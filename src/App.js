import React, { useState } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import store from './store';
import Drawer from './components/commons/drawer';
import AppBar from './components/commons/AppBar';
import DrawerInfo from './components/commons/drawerInfo';
import Routes from './routes';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
  },
}));

const App = () => {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [item, setItem] = React.useState({});

  const handleDrawerToggle = (close) => {
    if (!close) return setMobileOpen(false);
    setMobileOpen(!mobileOpen);
  };

  const handleDrawerChange = (movie) => {
    if (movie) setItem(movie)
    setOpen(!open);
  };

  return (
    <Provider store={store}>
      <div className={classes.root}>
        <Router>
          <CssBaseline />
          <AppBar
            handleDrawerToggle={handleDrawerToggle}
            open={open}
          />
          <Drawer
            handleDrawerToggle={handleDrawerToggle}
            mobileOpen={mobileOpen}
          />

          <Routes
            handleDrawerChange={handleDrawerChange}
            open={open}
          />

          <DrawerInfo
            handleDrawerChange={handleDrawerChange}
            open={open}
            item={item}
          />
        </Router>
      </div>
    </Provider>
  );
};

export default App;
