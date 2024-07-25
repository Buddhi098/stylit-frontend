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
import { headCellsAllRequests, headCellsRejectedRequests, rejectedRequests } from "./TableConfig";
import RequestDialog from "./RequestDialog";
import RejectedRequestDialog from "./RejectedRequestDialog"; 
import SelectCourierDialog from "./SelectCourierDialog";

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
  const [openDialog, setOpenDialog] = React.useState(null); // null, "delivery", "reject", or "courier"
  const [selectedRow, setSelectedRow] = React.useState(null);
  const [tab, setTab] = React.useState(0);

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
    if (tab === 0) {
      setOpenDialog("request");
    } else if (tab === 1) {
      setOpenDialog("reject");
    }
  };

  const handleCourierRequestClick = (row) => {
    handleRowClick(row);
    setOpenDialog("courier");
  };

  const handleCloseDialog = () => {
    setOpenDialog(null);
    setSelectedRow(null);
  };

  const handleTabChange = (event, newValue) => {
    setTab(newValue);
  };

  const filterRows = () => {
    if (tab === 0) {
      return rows;
    }
    if (tab === 1) {
      return rejectedRequests; 
    }
    return [];
  };

  const filteredRows = filterRows();
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - filteredRows.length) : 0;

  const getHeadCells = () => {
    return tab === 0 ? headCellsAllRequests : headCellsRejectedRequests;
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <Tabs value={tab} onChange={handleTabChange}
          sx={{
            "& .MuiTabs-indicator": {
              backgroundColor: "#C0A888", 
            },
            "& .MuiTab-root": {
              color: "#000",
            },
            "& .MuiTab-root.Mui-selected": {
              color: "#C0A888", 
            },
          }}>
        
          <Tab label="All Requests" />
          <Tab label="Rejected Requests" />
        </Tabs>

        {tab === 0 && (
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
                  headCells={getHeadCells()} // Pass headCells dynamically
                />
                <TableBody>
                  {stableSort(filteredRows, getComparator(order, orderBy))
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row, index) => {
                      const labelId = `enhanced-table-checkbox-${index}`;

                      return (
                        <TableRow hover tabIndex={-1} key={row.id} onClick={() => handleRowClick(row)} sx={{ cursor: "pointer" }}>
                           <TableCell
                          align="left"
                          component="th"
                          id={labelId}
                          scope="row"
                          padding="none"
                          colSpan={2} // This merges the two cells
                        >
                          <div style={{ display: "flex", alignItems: "center" }}>
                            <img src={row.imageUrl} alt={row.info} width={50} style={{ marginRight: 10, marginLeft: 25}} />
                            <div>
                              {row.info}
                              <div style={{ fontSize: "0.75em", color: "#888" }}>
                                Order ID: {row.orderId}
                              </div>
                            </div>
                          </div>
                        </TableCell>
                          <TableCell align="right">{row.courier}</TableCell>
                          <TableCell align="right">{row.quantity}</TableCell>
                          <TableCell align="right">{row.price}</TableCell>
                          <TableCell align="right">{row.ordered_date}</TableCell>
                          <TableCell align="right">{row.payment}</TableCell>
                          <TableCell
                            align="center"
                            onClick={(event) => event.stopPropagation()}
                          >
                            <Button
                              variant="contained"
                              sx={{ margin: "3px", backgroundColor: "#C0A888",}}
                              size="small"
                              onClick={() => handleCourierRequestClick(row)}
                            >
                              Courier Request
                            </Button>
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
        )}

        {tab === 1 && (
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
                  headCells={getHeadCells()} // Pass headCells dynamically
                />
                <TableBody>
                  {stableSort(filteredRows, getComparator(order, orderBy))
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row, index) => {
                      const labelId = `enhanced-table-checkbox-${index}`;

                      return (
                        <TableRow hover tabIndex={-1} key={row.id} onClick={() => handleRowClick(row)} sx={{ cursor: "pointer" }}>
                           <TableCell
                          align="left"
                          component="th"
                          id={labelId}
                          scope="row"
                          padding="none"
                          colSpan={2} // This merges the two cells
                        >
                          <div style={{ display: "flex", alignItems: "center" }}>
                            <img src={row.imageUrl} alt={row.info} width={50} style={{ marginRight: 10, marginLeft: 25}} />
                            <div>
                              {row.info}
                              <div style={{ fontSize: "0.75em", color: "#888" }}>
                                Order ID: {row.orderId}
                              </div>
                            </div>
                          </div>
                        </TableCell>
                          <TableCell align="right">{row.courier}</TableCell>
                          <TableCell align="right">{row.quantity}</TableCell>
                          <TableCell align="right">{row.price}</TableCell>
                          <TableCell align="right">{row.ordered_date}</TableCell>
                          <TableCell align="right">{row.payment}</TableCell>
                          <TableCell
                            align="center"
                          >
                            <CancelIcon sx={{ color: "#ff1744" }} />
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
        )}
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      />

      {openDialog === "request" && (
        <RequestDialog
          open={openDialog === "request"}
          handleClose={handleCloseDialog}
          selectedRow={selectedRow}
        />
      )}

      {openDialog === "reject" && (
        <RejectedRequestDialog
          open={openDialog === "reject"}
          handleClose={handleCloseDialog}
          selectedRow={selectedRow}
        />
      )}

      {openDialog === "courier" && (
        <SelectCourierDialog
          open={openDialog === "courier"}
          handleClose={handleCloseDialog}
          selectedRow={selectedRow}
        />
      )}
    </Box>
  );
}
