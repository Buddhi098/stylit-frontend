import PropTypes from 'prop-types';
// material-ui
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// third-party
import { NumericFormat } from 'react-number-format';

// project import
import Dot from '../../components/@extended/Dot';

function createData(orderId, destination, expected_date, completed_date, delay) {
  return { orderId, destination, expected_date, completed_date, delay};
}

const rows = [
    createData(12658456, 'Kandy', '2024-08-15', '2024-08-18', '3 days'),
    createData(13578965, 'Kandy', '2024-08-10', '2024-08-12', '2 days'),
    createData(14235789, 'Colombo', '2024-08-12', '2024-08-13', '1 days'),
    createData(15987654, 'Ampara', '2024-08-18', '2024-08-22', '4 days'),
    createData(16894523, 'Colombo', '2024-08-11', '2024-08-13', '2 days'),
    createData(17896542, 'Galle', '2024-08-20', '2024-08-21', '1 day'),
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc' ? (a, b) => descendingComparator(a, b, orderBy) : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: 'orderId',
    align: 'left',
    disablePadding: false,
    label: 'Order ID'
  },
  {
    id: 'destination',
    align: 'left',
    disablePadding: true,
    label: 'City'
  },
  {
    id: 'expected_date',
    align: 'right',
    disablePadding: false,
    label: 'Approx. Delivery Date'
  },
  {
    id: 'completed_date',
    align: 'right',
    disablePadding: false,
    label: 'Completed Delivery Date'
  },
  {
    id: 'delay',
    align: 'right',
    disablePadding: false,
    label: 'Delayed Days'
  },

];

// ==============================|| ORDER TABLE - HEADER ||============================== //

function OrderTableHead({ order, orderBy }) {
  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.align}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            {headCell.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

// ==============================|| ORDER TABLE ||============================== //

export default function OrderTable() {
  const order = 'asc';
  const orderBy = 'orderId';

  return (
    <Box>
      <TableContainer
        sx={{
          width: '100%',
          overflowX: 'auto',
          position: 'relative',
          display: 'block',
          maxWidth: '100%',
          '& td, & th': { whiteSpace: 'nowrap' }
        }}
      >
        <Table aria-labelledby="tableTitle">
          <OrderTableHead order={order} orderBy={orderBy} />
          <TableBody>
            {stableSort(rows, getComparator(order, orderBy)).map((row, index) => {
              const labelId = `enhanced-table-checkbox-${index}`;

              return (
                <TableRow
                  hover
                  role="checkbox"
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  tabIndex={-1}
                  key={row.orderId}
                >
                  <TableCell component="th" id={labelId} scope="row">
                    <Link color="secondary"> {row.orderId}</Link>
                  </TableCell>
                  <TableCell>{row.destination}</TableCell>
                  <TableCell align="right">{row.expected_date}</TableCell>
                  <TableCell align="right">{row.completed_date}</TableCell>
                  <TableCell align="right">{row.delay}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

OrderTableHead.propTypes = { order: PropTypes.any, orderBy: PropTypes.string };
