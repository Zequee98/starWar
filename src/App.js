import React, { useState } from 'react';
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

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleDrawerChange = (movie) => {
    if (movie) setItem(movie)
    setOpen(!open);
  };

  return (
    <Provider store={store}>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar handleDrawerToggle={handleDrawerToggle} open={open} />
        <Drawer handleDrawerToggle={handleDrawerToggle} mobileOpen={mobileOpen} />

        <Routes
          handleDrawerChange={handleDrawerChange}
          open={open}
        />

        <DrawerInfo
          handleDrawerChange={handleDrawerChange}
          open={open}
          item={item}
        />
      </div>
    </Provider>
  );
};

export default App;
