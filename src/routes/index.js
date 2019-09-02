import React from 'react';
import { Route } from "react-router-dom";
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

import Characters from '../components/characters';
import Movies from '../components/movies';

const useStyles = makeStyles(theme => ({
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

const routes = () => {
  const classes = useStyles();
  const open = useSelector(state => state.drawer.open)

  return (
    <React.Fragment>
      <main className={clsx(classes.content, { [classes.contentShift]: open })}>
        <div className={classes.toolbar} />
        <Route exact path="/movies" component={Movies} />
        <Route exact path="/" component={Characters} />
      </main>
    </React.Fragment>
  );
}

export default routes;
