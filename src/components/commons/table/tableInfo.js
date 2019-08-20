import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import EyeIcon from '@material-ui/icons/Visibility';
import TableRow from '@material-ui/core/TableRow';

const tableInfo = ({
  data,
  title,
  handleDrawerChange
}) => (
  <TableRow key={title}>
    <TableCell component="th" scope="row">
      {title}
    </TableCell>
    <TableCell align="right">
      <EyeIcon
        style={{ cursor: 'pointer' }}
        onClick={() => handleDrawerChange(data)}
      />
    </TableCell>
  </TableRow>
)

export default tableInfo;
