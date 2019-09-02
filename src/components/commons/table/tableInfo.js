import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import TableCell from '@material-ui/core/TableCell';
import EyeIcon from '@material-ui/icons/Visibility';
import EyeOffIcon from '@material-ui/icons/VisibilityOff';
import TableRow from '@material-ui/core/TableRow';

import { handleDrawerChange } from '../../../actions/drawer';

const EyeIconStyled = styled(EyeIcon)`
  cursor: pointer;
  color: #1E88E5;

  &:hover {
    color: #0D47A1;
  }
`;

const EyeOffIconStyled = styled(EyeOffIcon)`
  cursor: pointer;
  color: #1565C0;

  &:hover {
    color: #0D47A1;
  }
`;

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
    <TableRow key={title} style={{ backgroundColor: ((data.title || data.name) === (item.title || item.name)) ? '#eee' : 'unset' }}>
      <TableCell component="th" scope="row">
        {title}
      </TableCell>
      <TableCell align="right">
        {((data.title || data.name) === (item.title || item.name))
          ? (<EyeOffIconStyled onClick={handleSelected} />)
          : (<EyeIconStyled onClick={handleSelected} />)}
      </TableCell>
    </TableRow>
  )
}

export default tableInfo;
