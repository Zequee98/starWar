import React, { useState } from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';

import TableBody from './tableBody';
import TableFooter from './tableFooter';
import TableInfo from './tableInfo';

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

const SimpleTable = ({
  data,
  title,
}) => {
  const classes = useStyles();
  const [search, setValueSearch] = useState('');
  const [page, setPage] = useState(0);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  }

  const handleChangeText = event => {
    setValueSearch(event.target.value);
    setPage(0);
  };

  const counterFilter = (data.data.results || []).filter(data => {
    if (search && (data.title || data.name).toLocaleLowerCase().includes(search.toLocaleLowerCase())) return true;
    else if (search === '') return true;
    return false;
  })

  const dataFilter = counterFilter.slice(page * 10, page * 10 + 10).map((data) => (
    <TableInfo
      key={data.title || data.name}
      title={data.title || data.name}
      data={data}
    />
  ));

  const emptyRows = search ? (10 - Math.min(10, dataFilter.length)) : (10 - Math.min(10, (data.data.results || []).length - page * 10));

  return (
    <Paper className={classes.root}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>{title}</TableCell>
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
          data={data}
          emptyRows={emptyRows}
          dataFilter={dataFilter}
        />

        <TableFooter
          handleChangePage={handleChangePage}
          page={page}
          rowsPerPage={10}
          counterFilter={counterFilter}
        />
      </Table>
    </Paper>
  );
};

export default SimpleTable;
