import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';
import SearchIcon from '@material-ui/icons/Search';

import { getFilms } from '../../actions/films';

const useStyles = makeStyles(theme => ({
  root: {
    // marginTop: theme.spacing(3),
    display: 'flex',
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
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
}));


const SimpleTable = (props) => {
  const classes = useStyles();

  if (props.films.isFetching) {
    return (
      <div style={{ display: 'flex', flex: 1, justifyContent: 'center' }}>
        <CircularProgress />
      </div>
    );
  }

  return (
    <div>
      <button onClick={props.get}>
        test
      </button>
      <Paper className={classes.root}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Peliculas</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {props.films.list.map(film => (
              <TableRow key={film.title}>
                <TableCell component="th" scope="row">
                  {film.title}
                </TableCell>
                <TableCell align="right">
                  <SearchIcon
                    style={{ cursor: 'pointer' }}
                    onClick={props.handleDrawerChange}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
};

const mapStateToProps = state => ({ films: state.films });

const mapDispatchToProps = dispatch => bindActionCreators({ get: getFilms }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SimpleTable);
