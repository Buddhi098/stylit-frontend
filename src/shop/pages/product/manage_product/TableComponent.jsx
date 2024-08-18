import * as React from "react";
import PropTypes from "prop-types";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";
import Button from "@mui/material/Button";
import { visuallyHidden } from "@mui/utils";
import { headCells, additionalFields } from "../TableConfig";
import ProductDialog from "./ProductDialog";
import WebApi from "../../../api/WebApi";
import { storage } from "../../../../config/firebaseConfig";
import { getDownloadURL, ref } from "firebase/storage";
import img from "../../../assets/images/fallback.jpg"
import WarningModal from "./WarningModal";

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
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler = (property) => (event) =>
    onRequestSort(event, property);

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
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
};

function EnhancedTableToolbar(props) {
  const { numSelected } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity
            ),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: "1 1 100%" }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: "1 1 100%" }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          List of All Product
        </Typography>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

export default function TableComponent({ rows , setTrigger }) {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("quantity");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [selectedRow, setSelectedRow] = React.useState(null);
  const [open, setOpen] = React.useState(false);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleRowClick = (row) => {
    setSelectedRow(row);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedRow(null);
  };

  // const handleClick = (event, id) => {
  //   const selectedIndex = selected.indexOf(id);
  //   let newSelected = [];

  //   if (selectedIndex === -1) {
  //     newSelected = newSelected.concat(selected, id);
  //   } else if (selectedIndex === 0) {
  //     newSelected = newSelected.concat(selected.slice(1));
  //   } else if (selectedIndex === selected.length - 1) {
  //     newSelected = newSelected.concat(selected.slice(0, -1));
  //   } else if (selectedIndex > 0) {
  //     newSelected = newSelected.concat(
  //       selected.slice(0, selectedIndex),
  //       selected.slice(selectedIndex + 1)
  //     );
  //   }

  //   setSelected(newSelected);
  // };

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

  const ImageComponent = ({ id, color }) => {
    const [imageUrl, setImageUrl] = React.useState("");
    console.log("ImageComponent", id, color);
    React.useEffect(() => {
      const downloadImage = async () => {
        try {
          const imageRef = ref(storage, `productImages/${id}${color}/img0`);
          const url = await getDownloadURL(imageRef);
          setImageUrl(url);
        } catch (error) {
          console.error("Error fetching image URL:", error);
        }
      };
      downloadImage();
    }, []);

    return (
      <img
        src={imageUrl || img}
        alt="Image Not Found"
        width={50}
        style={{ marginRight: 10, marginLeft: 25 }}
      />
    );
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? "small" : "medium"}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const labelId = `enhanced-table-label-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={() => handleRowClick(row)}
                      tabIndex={-1}
                      key={row.id}
                      selected={isSelected(row.id)}
                      sx={{ cursor: "pointer" }}
                    >
                      <TableCell
                        align="left"
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                        colSpan={2} // This merges the two cells
                      >
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <ImageComponent
                            id={row.id}
                            color={row.variantBoxes?.[0]?.colorVariant}
                          />
                          <div>
                            {row.generalInformation.productName}
                            <div style={{ fontSize: "0.75em", color: "#888" }}>
                              Product ID: {row.id}
                            </div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell align="right">
                        {row.generalInformation.brand}
                      </TableCell>
                      <TableCell align="right">
                        {row.generalInformation.category}
                      </TableCell>
                      <TableCell align="right">
                        {row.generalInformation.subcategory}
                      </TableCell>
                      {/* <TableCell align="left">{row.color}</TableCell> */}
                      <TableCell align="right">
                        {row.generalInformation.gender}swear
                      </TableCell>
                      <TableCell align="right">
                        {row.pricing.basePrice}
                      </TableCell>
                      {/* <TableCell align="right">{row.payment}</TableCell> */}
                      <TableCell
                        align="left"
                        onClick={(event) => event.stopPropagation()}
                      >
                        <Button
                          variant="contained"
                          sx={{ margin: "3px", backgroundColor: "#C0A888" }}
                          size="small"
                        >
                          Update
                        </Button>
                        <WarningModal id={row.id} setTrigger={setTrigger}/>
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
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      />
      <ProductDialog
        open={open}
        handleClose={handleClose}
        selectedRow={selectedRow}
      />
    </Box>
  );
}
