import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  toolbar: theme.mixins.toolbar,
}));

const Home = () => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={12}>
        <div className={classes.root}>
          <div className={classes.toolbar} />
          <Typography variant="h4" align="center">
            Bienvenidos a la pagina de Star Wars!
          </Typography>
        </div>
      </Grid>
    </Grid>
  );
};

export default Home;
