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

function createData(orderId, name, weight, status, delivery_date) {
  return { orderId, name, weight, status, delivery_date };
}

const rows = [
  createData(12658456, 'Nolimit', 5.5, 0, '2024-08-15'),
  createData(13578965, 'Fashion Bug', 2.3, 1, '2024-08-10'),
  createData(14235789, 'Kelly Felder', 1.2, 2, '2024-08-12'),
  createData(15987654, 'Givenchy', 3.8, 0, '2024-08-18'),
  createData(16894523, 'Cool Planet', 4.6, 1, '2024-08-11'),
  createData(17896542, 'Chik Avenue', 5.0, 2, '2024-08-20'),
  createData(18987654, 'GFlock', 2.1, 0, '2024-08-14'),
  createData(19875432, 'Ebony', 6.7, 1, '2024-08-09'),
  createData(20765498, 'Bear Appeal', 3.4, 2, '2024-08-16'),
  createData(21789654, 'Tshirt Republic', 1.5, 0, '2024-08-13')
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
    id: 'name',
    align: 'left',
    disablePadding: true,
    label: 'Store Name'
  },
  {
    id: 'weight',
    align: 'right',
    disablePadding: false,
    label: 'Weight (Kg)'
  },
  {
    id: 'status',
    align: 'right',
    disablePadding: false,
    label: 'Status'
  },
  {
    id: 'delivery_date',
    align: 'right',
    disablePadding: false,
    label: 'Approx. Delivery Date'
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

function OrderStatus({ status }) {
  let color;
  let title;

  switch (status) {
    case 0:
      color = 'warning';
      title = 'Pending';
      break;
    case 1:
      color = 'success';
      title = 'Approved';
      break;
    case 2:
      color = 'error';
      title = 'Rejected';
      break;
    default:
      color = 'primary';
      title = 'None';
  }

  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <Dot color={color} />
      <Typography>{title}</Typography>
    </Stack>
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
                  <TableCell>{row.name}</TableCell>
                  <TableCell align="right">{row.weight}</TableCell>
                  <TableCell>
                    <OrderStatus status={row.status} />
                  </TableCell>
                  <TableCell align="right">{row.delivery_date}</TableCell>
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

OrderStatus.propTypes = { status: PropTypes.number };
