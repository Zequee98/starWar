import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';

import TableBody from './tableBody';
import TableFooter from './tableFooter';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(3),
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

const InputContainer = styled.div`
  display: flex;
  flex: 1 1 0%;
  justify-content: flex-end;
  align-items: center;
`;

const SimpleTable = ({ handleDrawerChange, films }) => {
  const classes = useStyles();
  const [search, setValueSearch] = React.useState('');
  const [page, setPage] = React.useState(0);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  }

  const handleChangeText = event => {
    setValueSearch(event.target.value);
  };

  return (
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

        <TableBody
          films={films}
          handleDrawerChange={handleDrawerChange}
          rowsPerPage={10}
          page={page}
          search={search}
        />

        <TableFooter
          films={films}
          handleChangePage={handleChangePage}
          page={page}
          rowsPerPage={10}
        />
      </Table>
    </Paper>
  );
};

export default SimpleTable;
