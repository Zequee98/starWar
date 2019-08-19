import React from 'react';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import CircularProgress from '@material-ui/core/CircularProgress';
// import EyeIcon from '@material-ui/icons/Visibility';
import TableRow from '@material-ui/core/TableRow';

import TableInfo from './tableInfo';

const SimpleTable = ({
  films,
  handleDrawerChange,
  rowsPerPage,
  page,
  search,
}) => {
  const data = (films.data.results || []).filter(data => {
    if (search && data.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())) return true;
    else if (search === '') return true;
    return false;
  }).map(film => (<TableInfo key={film.title} film={film} handleDrawerChange={handleDrawerChange} />))

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

  if (data.length) return (
    <TableBody>
      {data}
      {emptyRows > 0 && (
        <TableRow style={{ height: 48 * emptyRows }}>
          <TableCell colSpan={6} />
        </TableRow>
      )}
    </TableBody>
  )

  return (
    <TableBody>
      <TableRow style={{ height: 48 * (emptyRows - 5) }}>
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
    </TableBody>
  );
};

export default SimpleTable;
