import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Paper,
  Typography,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import TitleComponent from "./TitleComponent";
import DeleteIcon from "@mui/icons-material/Delete";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/system";
import { headCells, initialWithdrawals } from "./TableConfig";

const Card = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2),
  borderRadius: "10px",
  border: `1px solid ${theme.palette.divider}`,
}));

const getStatusColor = (status) => {
  switch (status) {
    case "Approved":
      return "green";
    case "Pending":
      return "blue";
    case "Rejected":
      return "red";
    default:
      return "black";
  }
};

const WithdrawCash = () => {
  const [withdrawals, setWithdrawals] = useState(initialWithdrawals);
  const [request, setRequest] = useState({
    amount: "",
    reason: "",
  });
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRequest((prev) => ({ ...prev, [name]: value }));
  };

  const handleRequestWithdrawal = () => {
    setWithdrawals([...withdrawals, { ...request, id: withdrawals.length + 1, status: "Pending" }]);
    setRequest({ amount: "", reason: "" });
    setIsDialogOpen(false);
  };

  const handleDialogOpen = () => {
    setIsDialogOpen(true);
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
  };

  const handleDelete = (id) => {
    setWithdrawals(withdrawals.filter((withdrawal) => withdrawal.id !== id));
  };

  return (
    <Container>
      <TitleComponent onRequestWithdrawal={handleDialogOpen} />

      <Button
        variant="contained"
        startIcon={<AddIcon />}
        onClick={handleDialogOpen}
        sx={{ backgroundColor: "#C0A888", "&:hover": { backgroundColor: "#A68A6C" }, mb: 4 }}
      >
        Request Withdrawal
      </Button>

      <Card>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Withdrawal History
        </Typography>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                {headCells.map((headCell) => (
                  <TableCell
                    key={headCell.id}
                    align={headCell.numeric ? "right" : "center"}
                    sortDirection={false}
                  >
                    <TableSortLabel>
                      {headCell.label}
                    </TableSortLabel>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {withdrawals.map((withdrawal) => (
                <TableRow key={withdrawal.id}>
                  <TableCell align="right">{withdrawal.id}</TableCell>
                  <TableCell align="right">{withdrawal.amount}</TableCell>
                  <TableCell align="right">{withdrawal.reason}</TableCell>
                  <TableCell align="right" sx={{ color: getStatusColor(withdrawal.status) }}>
                    {withdrawal.status}
                  </TableCell>
                  <TableCell align="center">
                    <IconButton color="error" onClick={() => handleDelete(withdrawal.id)}>
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>

      <Dialog open={isDialogOpen} onClose={handleDialogClose}>
        <DialogTitle sx={{ backgroundColor: '#C0A888', color: 'white' }}>
          <Box display="flex" alignItems="center" justifyContent="space-between">
            <Typography variant="h6" component="div" style={{ fontWeight: 'bold' }}>
              Request Cash Withdrawal
            </Typography>
            <IconButton onClick={handleDialogClose}>
              <CloseIcon sx={{ color: 'white' }} />
            </IconButton>
          </Box>
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            name="amount"
            label="Amount"
            type="number"
            fullWidth
            variant="standard"
            value={request.amount}
            onChange={handleInputChange}
            sx={{ mb: 2 }}
          />
          <TextField
            margin="dense"
            name="reason"
            label="Reason"
            type="text"
            fullWidth
            variant="standard"
            value={request.reason}
            onChange={handleInputChange}
            sx={{ mb: 2 }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="inherit">
            Cancel
          </Button>
          <Button onClick={handleRequestWithdrawal} sx={{ backgroundColor: '#C0A888', color: 'white', "&:hover": { backgroundColor: '#A68A6C', color: 'white' } }}>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default WithdrawCash;
