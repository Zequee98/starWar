import React from 'react';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import CircularProgress from '@material-ui/core/CircularProgress';
import TableRow from '@material-ui/core/TableRow';

const SimpleTable = ({
  data,
  emptyRows,
  dataFilter
}) => {
  if (dataFilter.length) return (
    <TableBody>
      {dataFilter}
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
        {data.isFetching
          ? (<TableCell align="center" colSpan={6}><CircularProgress /></TableCell>)
          : (<TableCell align="center" colSpan={6}>No hay datos.</TableCell>)
        }
      </TableRow>
    </TableBody>
  );
};

export default SimpleTable;
