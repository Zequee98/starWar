import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';

import TablePaginationActions from './pagination';

const Footer = ({
  counterFilter,
  handleChangePage,
  page,
  rowsPerPage
}) => {
  return (
    <TableFooter>
      <TableRow>
        <TablePagination
          rowsPerPageOptions={[]}
          colSpan={3}
          count={counterFilter.length}
          page={page}
          SelectProps={{ inputProps: { 'aria-label': 'rows per page' }, native: true }}
          onChangePage={handleChangePage}
          ActionsComponent={TablePaginationActions}
          rowsPerPage={rowsPerPage}
        />
      </TableRow>
    </TableFooter>
  );
};

export default Footer;
