import React, { useState, useEffect } from "react";
import {
  Typography,
  Paper,
  Grid,
  TextField,
  IconButton,
  InputAdornment,
  Dialog,
  DialogTitle,
  DialogContent,
  CircularProgress,
} from "@mui/material";
import {
  ArrowBack as ArrowBackIcon,
  CheckCircleOutline as CheckCircleOutlineIcon,
} from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css"; // Include Bootstrap CSS

import CustomerSideNavigationMenu from "../../components/CustomerSideNavigationMenu";
import CustomerTopNavigationBar from "../../components/CustomerTopNavigationBar";

const TransferWithinBank22 = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const [userInputOtp, setUserInputOtp] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const transferredData = location.state?.transferredData || null;
  const customerId = 1;
  const receiverAccountNumber = transferredData?.accountNumber || null;

  useEffect(() => {
    const fetchOTP = async () => {
      try {
        const otpResponse = await axios.get(
          `http://localhost:8080/Customer/transaction/otp/generate?customerId=${customerId}`
        );

        const receivedOtp = otpResponse.data;
        
      } catch (error) {
        console.error("Error fetching OTP:", error.message);
      }
    };

    fetchOTP();
  }, [customerId]);

  const handleOtpValidation = async () => {
    try {
      setIsLoading(true);

      const verifyOtpResponse = await axios.post(
        `http://localhost:8080/Customer/transaction/otp/verify?customerId=${customerId}&otp=${userInputOtp}`
      );

      setIsLoading(false);

      if (verifyOtpResponse.data === "OTP Verified Successfully") {
        setShowDialog(true);

        const transferData = {
          accountNumber: transferredData.accountNumber,
          amount: transferredData.amount,
          remarks: transferredData.remarks,
        };
        const remarksValue = transferredData.remarks;

        console.log("Data to be sent to the server:", transferData);
        console.log("Receiver Account Number:", receiverAccountNumber);

        try {
          const response = await fetch(
            `http://localhost:8080/Customer/FundTransfer/SendMoney/${customerId}/${receiverAccountNumber}?amountToSend=${transferData.amount}`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: remarksValue,
            }
          );

          if (response.ok) {
            navigate("/Customer/FundTransfer/TransferWithinBank23", {
              state: { transferData },
            });
          } else {
            console.error("Failed to send money:", response.statusText);
          }
        } catch (error) {
          console.error("Error while sending money:", error.message);
        }
      }
    } catch (error) {
      setIsLoading(false);
      console.error("Error verifying OTP:", error.message);
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <CustomerTopNavigationBar />
      <div style={{ display: "flex" }}>
        <CustomerSideNavigationMenu />
        <div style={{ marginLeft: "20px", marginTop: "20px", width: "80%" }}>
          <Grid
            container
            spacing={2}
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid item>
              <IconButton onClick={handleBack}>
                <ArrowBackIcon />
              </IconButton>
            </Grid>
            <Grid item>
              <Typography variant="h4">Received Transfer Details</Typography>
            </Grid>
          </Grid>
          <Paper elevation={3} style={{ padding: "20px", marginTop: "20px" }}>
            {transferredData ? (
              <div>
                <Typography variant="h6" gutterBottom>
                  Transfer Details
                </Typography>
                <Typography>
                  <strong>Account Number:</strong>{" "}
                  {transferredData.accountNumber}
                </Typography>
                <Typography>
                  <strong>Amount:</strong> {transferredData.amount}
                </Typography>
                <Typography>
                  <strong>Remarks:</strong> {transferredData.remarks}
                </Typography>
              </div>
            ) : (
              <Typography variant="body1">
                No transfer data received.
              </Typography>
            )}
          </Paper>

          <Paper elevation={3} style={{ padding: "20px", marginTop: "20px" }}>
            <Typography variant="h6" gutterBottom>
              Enter OTP
            </Typography>
            <Typography>
              OTP has been sent to your registered mobile number:{" "}
              <strong>91xxxxxxxx71</strong> and email id:{" "}
              <strong>abcd@gmail.com</strong>.
            </Typography>
            <TextField
              label="Enter OTP"
              variant="outlined"
              fullWidth
              margin="normal"
              value={userInputOtp}
              onChange={(e) => setUserInputOtp(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      edge="end"
                      onClick={handleOtpValidation}
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <CircularProgress size={24} />
                      ) : (
                        <CheckCircleOutlineIcon
                          sx={{ color: theme.palette.success.main }}
                        />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Paper>
        </div>
      </div>

      <Dialog open={showDialog} onClose={() => setShowDialog(false)}>
        <DialogTitle>OTP Validation</DialogTitle>
        <DialogContent>
          <div className="d-flex align-items-center">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <div className="ms-2">
              <Typography>
                Your OTP is being validated! Redirecting... Please
                wait...
              </Typography>
            </div>
          </div>
        </DialogContent>
      </Dialog>
      <ToastContainer />
    </div>
  );
};

export default TransferWithinBank22;
