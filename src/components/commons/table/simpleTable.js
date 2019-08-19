import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
    display: 'flex',
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
