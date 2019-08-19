import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Typography from '@material-ui/core/Typography';

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

const PersistentDrawerRight = ({ handleDrawerChange, open, item }) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="right"
      open={open}
      style={{ zIndex: open ? 'unset' : -10 }}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={handleDrawerChange}>
          {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </div>
      <div style={{ margin: 20 }}>
        <Typography style={{ marginBottom: 10 }} variant="h5" component="h2">Título original: {item.title}</Typography>
        <Typography style={{ marginBottom: 10 }} variant="h5" component="h2">Año: {item.release_date}</Typography>
        <Typography style={{ marginBottom: 10 }} variant="h5" component="h2">Dirección: {item.director}</Typography>
        <Typography style={{ marginBottom: 10 }} variant="h5" component="h2">Productor: {item.producer}</Typography>
      </div>
    </Drawer>
  );
};

export default PersistentDrawerRight;