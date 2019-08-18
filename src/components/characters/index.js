import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fade, makeStyles, useTheme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';
import SearchIcon from '@material-ui/icons/Search';
import EyeIcon from '@material-ui/icons/Visibility';
import TextField from '@material-ui/core/TextField';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import styled from 'styled-components';

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
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

const useStyles1 = makeStyles(theme => ({
  root: {
    flexShrink: 0,
    color: theme.palette.text.secondary,
    marginLeft: theme.spacing(2.5),
  },
}));

const InputContainer = styled.div`
  display: flex;
  flex: 1 1 0%;
  justify-content: flex-end;
  align-items: center;
`; 

function TablePaginationActions(props) {
  const classes = useStyles1();
  const theme = useTheme();
  const { count, page, rowsPerPage, onChangePage } = props;

  function handleFirstPageButtonClick(event) {
    onChangePage(event, 0);
  }

  function handleBackButtonClick(event) {
    onChangePage(event, page - 1);
  }

  function handleNextButtonClick(event) {
    onChangePage(event, page + 1);
  }

  function handleLastPageButtonClick(event) {
    onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  }

  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  );
}

const SimpleTable = ({ films, get, handleDrawerChange }) => {
  const classes = useStyles();
  const [search, setValueSearch] = React.useState('');
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, films.list.length - page * rowsPerPage);

  function handleChangePage(event, newPage) {
    setPage(newPage);
  }
  
  const handleChangeText = event => {
    setValueSearch(event.target.value);
  };

  function handleChangeRowsPerPage(event) {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  }

  // if (films.isFetching) {
  //   return (
  //     <div style={{ display: 'flex', flex: 1, justifyContent: 'center' }}>
  //       <CircularProgress />
  //     </div>
  //   );
  // }

  const data = films.list.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(film => {
    if (search && film.title.includes(search)) {
      return (
        <TableRow key={film.title}>
          <TableCell component="th" scope="row">
            {film.title}
          </TableCell>
          <TableCell align="right">
            <EyeIcon
              style={{ cursor: 'pointer' }}
              onClick={() => handleDrawerChange(film)}
            />
          </TableCell>
        </TableRow>
      )
    } else if (search === '') {
      return (
        <TableRow key={film.title}>
          <TableCell component="th" scope="row">
            {film.title}
          </TableCell>
          <TableCell align="right">
            <EyeIcon
              style={{ cursor: 'pointer' }}
              onClick={() => handleDrawerChange(film)}
            />
          </TableCell>
        </TableRow>
      )
    }
    return null;
  })


  return (
    <div>
      <button onClick={get}>
        test
      </button>

      <Paper className={classes.root}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Peliculas</TableCell>
              <TableCell align="right">
                <InputContainer>
                  <TextField
                    placeholder="Buscar"
                    onChange={handleChangeText}
                    InputProps={{
                      endAdornment: <SearchIcon />
                    }}
                  />
                </InputContainer>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.length ? (
              <React.Fragment>
                {data}
                {emptyRows > 0 && (
                  <TableRow style={{ height: 48 * emptyRows }}>
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </React.Fragment>
            ) : (
              <TableRow style={{ height: 48 * emptyRows }}>
                {films.isFetching ? (
                  <TableCell align="center" colSpan={6}>
                    <CircularProgress />
                  </TableCell>
                ) : (
                  <TableCell align="center" colSpan={6}>
                    No hay datos.
                  </TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                colSpan={3}
                count={films.list.length}
                page={page}
                SelectProps={{
                  inputProps: { 'aria-label': 'rows per page' },
                  native: true,
                }}
                onChangePage={handleChangePage}
                ActionsComponent={TablePaginationActions}
                rowsPerPage={rowsPerPage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </Paper>
    </div>
  );
};

const mapStateToProps = state => ({ films: state.films });

const mapDispatchToProps = dispatch => bindActionCreators({ get: getFilms }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SimpleTable);
