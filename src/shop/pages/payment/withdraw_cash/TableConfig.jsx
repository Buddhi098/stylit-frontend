export const headCells = [
    { id: 'id', numeric: true, disablePadding: false, label: 'Request ID' },
    { id: 'amount', numeric: true, disablePadding: false, label: 'Amount' },
    { id: 'reason', numeric: true, disablePadding: false, label: 'Reason' },
    { id: 'status', numeric: true, disablePadding: false, label: 'Status' },
    { id: 'actions', numeric: false, disablePadding: false, label: 'Actions' },
  ];
  
  export const initialWithdrawals = [
    { id: 1, amount: 100, reason: 'Business Expense', status: 'Pending' },
    { id: 2, amount: 250, reason: 'Supplies', status: 'Approved' },
    { id: 3, amount: 75, reason: 'Travel', status: 'Rejected' },
  ];
  