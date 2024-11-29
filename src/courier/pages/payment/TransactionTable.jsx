import React, { useState } from 'react';
import { 
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, 
  Paper, Chip, Box, TableSortLabel, TablePagination
} from '@mui/material';

const initialTransactions = [
  { 
    id: 1000456, 
    amount: 50000,
    paymentMethod: 'Commercial Bank (AC No: 8001543827)',
    status: 'Success',
    date: new Date('Jan 28, 2024 3:40 PM')
  },
  { 
    id: 1000786, 
    amount: 40000,
    paymentMethod: 'Sampath Bank (AC No: 8001546329)',
    status: 'Pending',
    date: new Date('Jan 12, 2024 3:40 PM')
  },
  { 
    id: 1000537, 
    amount: 55000,
    paymentMethod: 'Sampath Bank (AC No: 8001546329)',
    status: 'Failed',
    date: new Date('Jan 26, 2024 3:40 PM')
  },
  { 
    id: 1000907, 
    amount: 70000,
    paymentMethod: 'Commercial Bank (AC No: 8001543827)',
    status: 'Success',
    date: new Date('Feb 09, 2024 3:40 PM')
  },
  { 
    id: 1000793, 
    amount: 65000,
    paymentMethod: 'Sampath Bank (AC No: 8001546329)',
    status: 'Pending',
    date: new Date('Feb 23, 2024 3:40 PM')
  },
  { 
    id: 1000321, 
    amount: 85000,
    paymentMethod: 'Commercial Bank (AC No: 8001543827)',
    status: 'Failed',
    date: new Date('Mar 08, 2024 3:40 PM')
  },
];

const statusColors = {
  Success: 'success',
  Pending: 'warning',
  Failed: 'error'
};

const getStatusChip = (status) => {
  return (
    <Chip 
      label={status} 
      color={statusColors[status]} 
      variant="outlined" 
      size="small" 
      sx={{ 
        textTransform: 'capitalize',
      }} 
    />
  );
};

const TransactionTable = () => {
  const [transactions] = useState(initialTransactions);
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('id');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const sortedTransactions = transactions.slice().sort((a, b) => {
    if (orderBy === 'amount') {
      return (order === 'asc' ? a.amount - b.amount : b.amount - a.amount);
    } else if (orderBy === 'date') {
      return (order === 'asc' ? a.date - b.date : b.date - a.date);
    }
    return 0;
  });

  const paginatedTransactions = sortedTransactions.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <TableContainer component={Paper} elevation={0} sx={{ boxShadow: 3, borderRadius: 3, border: '1px solid #bdbdbd' }}>
      <Table sx={{ minWidth: 650 }} aria-label="transaction table">
        <TableHead sx={{ backgroundColor: 'rgba(240, 240, 240)' }}>
          <TableRow>
            <TableCell align="center">TRANSACTION ID</TableCell>
            <TableCell sortDirection={orderBy === 'amount' ? order : false}>
              <TableSortLabel
                active={orderBy === 'amount'}
                direction={orderBy === 'amount' ? order : 'asc'}
                onClick={() => handleRequestSort('amount')}
              >
                AMOUNT
              </TableSortLabel>
            </TableCell>
            <TableCell>PAYMENT METHOD</TableCell>
            <TableCell>STATUS</TableCell>
            <TableCell sortDirection={orderBy === 'date' ? order : false}>
              <TableSortLabel
                active={orderBy === 'date'}
                direction={orderBy === 'date' ? order : 'asc'}
                onClick={() => handleRequestSort('date')}
              >
                REDEEMED DATE
              </TableSortLabel>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {paginatedTransactions.map((transaction) => (
            <TableRow key={transaction.id}>
              <TableCell align="center">{transaction.id}</TableCell>
              <TableCell>{`Rs.${transaction.amount.toLocaleString()}`}</TableCell>
              <TableCell>{transaction.paymentMethod}</TableCell>
              <TableCell>{getStatusChip(transaction.status)}</TableCell>
              <TableCell>{transaction.date.toLocaleString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Box display="flex" justifyContent="flex-end" mt={2} mb={2}>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={transactions.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Box>
    </TableContainer>
  );
};

export default TransactionTable;
