import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import TableCell from '@material-ui/core/TableCell';
import EyeIcon from '@material-ui/icons/Visibility';
import EyeOffIcon from '@material-ui/icons/VisibilityOff';
import TableRow from '@material-ui/core/TableRow';

import { handleDrawerChange } from '../../../actions/drawer';

const tableInfo = ({
  data,
  title,
}) => {
  const dispatch = useDispatch();
  const item = useSelector(state => state.drawer.item)

  const handleSelected = () => {
    dispatch(handleDrawerChange(data))
  };

  return (
    <TableRow key={title}>
      <TableCell component="th" scope="row">
        {title}
      </TableCell>
      <TableCell align="right">
        {((data.title || data.name) === (item.title || item.name))
          ? (<EyeOffIcon style={{ cursor: 'pointer' }} onClick={handleSelected} />)
          : (<EyeIcon style={{ cursor: 'pointer' }} onClick={handleSelected} />)}
      </TableCell>
    </TableRow>
  )
}

export default tableInfo;
