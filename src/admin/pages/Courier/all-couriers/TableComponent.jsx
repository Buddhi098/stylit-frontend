import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Paper from "@mui/material/Paper";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Button from "@mui/material/Button";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import CancelIcon from '@mui/icons-material/Cancel';
import { visuallyHidden } from "@mui/utils";
import { headCellsAllShops, shopData } from "./TableConfig";
import ShopDetailsDialog from "./ShopDetailsDialog";
import ViewLocation from "./ViewLocation";
import { set } from "lodash";
import WebApi from "../../../api/WebApi";

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
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

function EnhancedTableHead(props) {
  const { order, orderBy, onRequestSort, headCells } = props;
  const createSortHandler = (property) => (event) =>
    onRequestSort(event, property);

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "center"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            {headCell.disableSort ? (
              headCell.label
            ) : (
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : "asc"}
                onClick={createSortHandler(headCell.id)}
              >
                {headCell.label}
                {orderBy === headCell.id ? (
                  <Box component="span" sx={visuallyHidden}>
                    {order === "desc" ? "sorted descending" : "sorted ascending"}
                  </Box>
                ) : null}
              </TableSortLabel>
            )}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  headCells: PropTypes.array.isRequired,
};

export default function TableComponent({ rows }) {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [openDialog, setOpenDialog] = React.useState(null); // null, "pending", or "reject"
  const [selectedRow, setSelectedRow] = React.useState(null);

  const updateStatus = async (event, status, id) => {
    event.stopPropagation();
    console.log("status", status);
    try {
      if (status == "active") {
        const response = await WebApi.post(`/admin/user/changeCourierStatus`, { id: id, status: "disable" });
        console.log("Response", response);
        window.location.reload();
      } else {
        const response = await WebApi.post(`/admin/user/changeCourierStatus`, { id: id, status: "active" });
        console.log("Response", response);
        window.location.reload();
      }
    } catch (error) {
      console.error("Error updating status", error);
    }
  }


  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const handleRowClick = (row) => {
    setSelectedRow(row);
    setOpenDialog(true);

  };

  const handleCloseDialog = () => {
    setOpenDialog(null);
    setSelectedRow(null);
  };


  const filteredRows = rows;
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - filteredRows.length) : 0;


  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <>
          <TableContainer>
            <Table
              sx={{ minWidth: 750 }}
              aria-labelledby="tableTitle"
              size={dense ? "small" : "medium"}
            >
              <EnhancedTableHead
                order={order}
                orderBy={orderBy}
                onRequestSort={handleRequestSort}
                headCells={headCellsAllShops} // Pass headCells dynamically
              />
              <TableBody>
                {stableSort(filteredRows, getComparator(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    const labelId = `enhanced-table-checkbox-${index}`;

<<<<<<< HEAD
                      return (
                        <TableRow hover tabIndex={-1} key={row.id} onClick={() => handleRowClick(row)}>
                          <TableCell align="right">{row.courierName}</TableCell>
                          <TableCell align="right">{row.courierEmail}</TableCell>
                          <TableCell align="right">{row.courierContactNumber}</TableCell>
                          <TableCell align="right">{row.courierBusinessData.businessType}</TableCell>
                          <TableCell align="center"
                            onClick={(event) => event.stopPropagation()}><ViewLocation/></TableCell>
                          <TableCell align="right">{row.courierBankDetails.accountNo}</TableCell>
                          <TableCell align="right">{row.courierBankDetails.branchName}</TableCell>
                          <TableCell align="center">
                            <Switch
                              defaultChecked
                              sx={{
                                '& .MuiSwitch-switchBase.Mui-checked': {
                                  color: 'green',
                                },
                                '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                                  backgroundColor: 'green',
                                },
                              }}
                              onClick={(event) => event.stopPropagation()}
                            />
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  {emptyRows > 0 && (
                    <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={filteredRows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </>
=======
                    return (
                      <TableRow hover tabIndex={-1} key={row.id} onClick={() => handleRowClick(row)}>
                        <TableCell align="right">{row.courierName}</TableCell>
                        <TableCell align="right">{row.courierEmail}</TableCell>
                        <TableCell align="right">{row.courierContactNumber}</TableCell>
                        <TableCell align="right">{row.courierBusinessData.businessType}</TableCell>
                        <TableCell align="center"
                          onClick={(event) => event.stopPropagation()}><ViewLocation lat={row.courierLocation.latitude} lon={row.courierLocation.longitude} /></TableCell>
                        <TableCell align="center">
                          <Switch
                            checked={row.status == "active"} // Simplified condition
                            sx={{
                              '& .MuiSwitch-switchBase.Mui-checked': {
                                color: 'green',
                              },
                              '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                                backgroundColor: 'green',
                              },
                            }}
                            onClick={(event) => updateStatus(event, row.status, row.id)} // Prevent click event from bubbling up
                          />
                        </TableCell>
                      </TableRow>
                    );
                  })}
                {emptyRows > 0 && (
                  <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={filteredRows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </>
>>>>>>> 579d610f1e78f1ae13624f4cb01451b71439b772
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      />
      {openDialog && (
        <ShopDetailsDialog
          open={openDialog}
          handleClose={handleCloseDialog}
          selectedRow={selectedRow}
        />
      )}

    </Box>
  );
}
