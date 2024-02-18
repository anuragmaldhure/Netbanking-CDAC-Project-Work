import React, { useState } from "react";
import {
  TextField,
  Button,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
} from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CancelIcon from "@mui/icons-material/Cancel";
import TransferWithinAStationIcon from "@mui/icons-material/TransferWithinAStation";

import CustomerSideNavigationMenu from "../../components/CustomerSideNavigationMenu";
import CustomerTopNavigationBar from "../../components/CustomerTopNavigationBar";

const TransferWithinBank21 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const selectedData = location.state?.selectedData || null;

  const [accountNumber, setAccountNumber] = useState(
    selectedData ? selectedData[0] : ""
  );
  const [confirmAccountNumber, setConfirmAccountNumber] = useState(
    selectedData ? selectedData[1] : ""
  );
  const [amount, setAmount] = useState(selectedData ? selectedData[2] : "");
  const [confirmAmount, setConfirmAmount] = useState(
    selectedData ? selectedData[3] : ""
  );
  const [remarks, setRemarks] = useState(selectedData ? selectedData[4] : "");

  const [isTransferLocked, setTransferLocked] = useState(false);

  const handleTransferConfirmation = () => {
    if (validateFields()) {
      setOpenDialog(true);
    }
  };

  const handleConfirmTransfer = () => {
    setOpenDialog(false);

    // Simulating a successful transfer
    toast.success("Transfer successful!");

    // Lock the transfer button for 10 seconds
    setTransferLocked(true);
    setTimeout(() => {
      setTransferLocked(false);
    }, 10000);

    // Example: Transfer data using navigate
    navigate("/Customer/FundTransfer/TransferWithinBank22", {
      state: { transferredData: { accountNumber, amount, remarks } },
    });
  };

  const validateFields = () => {
    const accountNumberRegex = /^\d{1,12}$/;
    const amountRegex = /^\d{1,7}$/;

    if (!accountNumberRegex.test(accountNumber)) {
      toast.error("Account number should be numeric and up to 12 digits.");
      return false;
    }

    if (!amountRegex.test(amount)) {
      toast.error("Amount should be numeric and up to 7 digits.");
      return false;
    }

    if (accountNumber !== confirmAccountNumber) {
      toast.error("Account numbers do not match.");
      return false;
    }

    if (amount !== confirmAmount) {
      toast.error("Amounts do not match.");
      return false;
    }

    return true;
  };

  const [openDialog, setOpenDialog] = useState(false);

  return (
    <div>
      <CustomerTopNavigationBar />
      <div style={{ display: "flex" }}>
        <CustomerSideNavigationMenu />
        <div style={{ marginLeft: "20px", marginTop: "20px", width: "80%" }}>
          <h2>Details for Transfer</h2>
          <form>
            <Grid
              container
              spacing={2}
              sx={{ padding: "10px", margin: "10px" }}
            >
              <Grid item xs={12} md={6}>
                <TextField
                  label="Account Number"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={accountNumber}
                  onChange={(e) => setAccountNumber(e.target.value)}
                  inputProps={{ maxLength: 12 }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Confirm Account Number"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={confirmAccountNumber}
                  onChange={(e) => setConfirmAccountNumber(e.target.value)}
                  inputProps={{ maxLength: 12 }}
                  error={
                    confirmAccountNumber !== "" &&
                    accountNumber !== confirmAccountNumber
                  }
                  helperText={
                    confirmAccountNumber !== "" &&
                    accountNumber !== confirmAccountNumber
                      ? "Account numbers do not match"
                      : ""
                  }
                  InputProps={{
                    endAdornment:
                      confirmAccountNumber !== "" ? (
                        accountNumber === confirmAccountNumber ? (
                          <CheckCircleOutlineIcon sx={{ color: "green" }} />
                        ) : (
                          <CancelIcon sx={{ color: "red" }} />
                        )
                      ) : null,
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Amount"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  inputProps={{ maxLength: 7 }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Confirm Amount"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={confirmAmount}
                  onChange={(e) => setConfirmAmount(e.target.value)}
                  inputProps={{ maxLength: 7 }}
                  error={confirmAmount !== "" && amount !== confirmAmount}
                  helperText={
                    confirmAmount !== "" && amount !== confirmAmount
                      ? "Amounts do not match"
                      : ""
                  }
                  InputProps={{
                    endAdornment:
                      confirmAmount !== "" ? (
                        amount === confirmAmount ? (
                          <CheckCircleOutlineIcon sx={{ color: "green" }} />
                        ) : (
                          <CancelIcon sx={{ color: "red" }} />
                        )
                      ) : null,
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Remarks"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={remarks}
                  onChange={(e) => setRemarks(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleTransferConfirmation}
                  startIcon={<TransferWithinAStationIcon />}
                  sx={{ width: "50%", mt: 2 }}
                  disabled={isTransferLocked}
                >
                  {isTransferLocked ? "Transfer Locked" : "Transfer"}
                </Button>
              </Grid>
            </Grid>
          </form>
        </div>
      </div>

      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>
          <Typography variant="h6">Confirm Transfer Details</Typography>
        </DialogTitle>
        <DialogContent>
          <Typography>
            <strong>Account Number:</strong> {accountNumber}
          </Typography>
          <Typography>
            <strong>Confirm Account Number:</strong> {confirmAccountNumber}
          </Typography>
          <Typography>
            <strong>Amount:</strong> {amount}
          </Typography>
          <Typography>
            <strong>Confirm Amount:</strong> {confirmAmount}
          </Typography>
          <Typography>
            <strong>Remarks:</strong> {remarks}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => setOpenDialog(false)}
            color="secondary"
            startIcon={<CancelIcon />}
          >
            Cancel
          </Button>
          <Button
            onClick={handleConfirmTransfer}
            color="primary"
            startIcon={<CheckCircleOutlineIcon />}
          >
            Confirm Transfer
          </Button>
        </DialogActions>
      </Dialog>

      <ToastContainer />
    </div>
  );
};

export default TransferWithinBank21;
