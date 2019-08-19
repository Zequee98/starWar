import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import EyeIcon from '@material-ui/icons/Visibility';
import TableRow from '@material-ui/core/TableRow';

const tableInfo = ({
  film,
  handleDrawerChange
}) => (
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

export default tableInfo;
