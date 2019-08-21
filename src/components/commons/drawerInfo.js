import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Typography from '@material-ui/core/Typography';

import { handleDrawerChange } from '../../actions/drawer';

const drawerWidth = 500;

const useStyles = makeStyles(theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  },
}));

const PersistentDrawerRight = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const theme = useTheme();
  const drawerInfo = useSelector(state => state.drawer)

  const handleDrawerOff = () => {
    dispatch(handleDrawerChange(false))
  };

  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="right"
      open={drawerInfo.open}
      style={{ zIndex: drawerInfo.open ? 'unset' : -10 }}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={handleDrawerOff}>
          {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </div>
      <div style={{ margin: 20 }}>
        <Typography style={{ marginBottom: 10 }} variant="h5" component="h2">Título original: {drawerInfo.item.title}</Typography>
        <Typography style={{ marginBottom: 10 }} variant="h5" component="h2">Año: {drawerInfo.item.release_date}</Typography>
        <Typography style={{ marginBottom: 10 }} variant="h5" component="h2">Dirección: {drawerInfo.item.director}</Typography>
        <Typography style={{ marginBottom: 10 }} variant="h5" component="h2">Productor: {drawerInfo.item.producer}</Typography>
      </div>
    </Drawer>
  );
};

export default PersistentDrawerRight;