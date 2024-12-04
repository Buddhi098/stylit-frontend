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
//import Dot from '../../components/@extended/Dot';

function createData(tracking_no, name, fat, protein) {
  return { tracking_no, name, fat, protein };
}

const rows = [
  createData(164, 'Casual Chic T-Shirt', 40, 4),
  createData(165, 'Classic Denim Jeans', 300, 10),
  createData(166, 'Sleek Leather Jacket', 355, 11),
  createData(167, 'Tailored Trouser', 50, 11),
  createData(168, 'Luxe Silk Scarf', 100, 11),
  createData(169, 'Edgy Ripped Skinny Jeans', 99, 10),
  createData(170, 'Minimalist Button-Down Shirt', 125, 2),
  createData(171, 'Flowy Wrap Dress', 89, 2),
  createData(172, 'Tailored Trousers', 185, 12),
  createData(173, 'Modern High-Waist Skirt', 100, 10)
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
    id: 'tracking_no',
    align: 'left',
    disablePadding: false,
    label: 'Product ID'
  },
  {
    id: 'name',
    align: 'left',
    disablePadding: true,
    label: 'Product Name'
  },
  {
    id: 'fat',
    align: 'left',
    disablePadding: false,
    label: 'Total Orders'
  },/*
  {
    id: 'carbs',
    align: 'left',
    disablePadding: false,

    label: 'Price (Rs.)'
  },*/
  {
    id: 'protein',
    align: 'right',
    disablePadding: false,
    label: 'Price'
  }
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
  //let color;
  let title;

  switch (status) {/*
    case 0:
      //color = 'warning';
      title = 'Pending';
      break;
    case 1:
      //color = 'success';
      title = 'Approved';
      break;
    case 2:
      //color = 'error';
      title = 'Rejected';
      break;
    default:
      //color = 'primary';
      title = '';*/
  }

  return (
    <Stack direction="row" spacing={1} alignItems="center">
      {/*<Dot color={color} />*/}
      <Typography>{title}</Typography>
    </Stack>
  );
}

// ==============================|| ORDER TABLE ||============================== //

export default function OrderTable() {
  const order = 'asc';
  const orderBy = 'fat';

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
                  key={row.tracking_no}
                >
                  <TableCell component="th" id={labelId} scope="row">
                    <Link color="secondary"> {row.tracking_no}</Link>
                  </TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell align="left">{row.fat}</TableCell>
                  <TableCell>
                    <OrderStatus status={row.carbs} />
                  </TableCell>
                  <TableCell align="left">
                    <NumericFormat value={row.protein} displayType="text" thousandSeparator prefix="LKR " />
                  </TableCell>
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

//OrderStatus.propTypes = { status: PropTypes.number };
