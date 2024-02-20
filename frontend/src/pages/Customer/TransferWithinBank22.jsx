import React, { useState } from "react";
import {
  Typography,
  Paper,
  Grid,
  TextField,
  Button,
  IconButton,
  InputAdornment,
  Dialog,
  DialogTitle,
  DialogContent,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import {
  ArrowBack as ArrowBackIcon,
  CheckCircleOutline as CheckCircleOutlineIcon,
} from "@mui/icons-material";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import CustomerSideNavigationMenu from "../../components/CustomerSideNavigationMenu";
import CustomerTopNavigationBar from "../../components/CustomerTopNavigationBar";

const TransferWithinBank22 = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const [otp, setOtp] = useState("");
  const [isOtpValid, setIsOtpValid] = useState(false);
  const [showDialog, setShowDialog] = useState(false);

  const transferredData = location.state?.transferredData || null;

  const handleOtpValidation = () => {
    const expectedOtp = "112"; // Static OTP for demonstration

    if (otp === expectedOtp) {
      setIsOtpValid(true);
      setShowDialog(true);

      const transferData = {
        accountNumber: transferredData.accountNumber,
        amount: transferredData.amount,
        remarks: transferredData.remarks,
      };

      // Use navigate to pass data to the next page through the URL
      navigate("/Customer/FundTransfer/TransferWithinBank23", {
        state: { transferData },
      });
    } else {
      setIsOtpValid(false);
      setShowDialog(false);
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
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      edge="end"
                      onClick={handleOtpValidation}
                      disabled={isOtpValid}
                    >
                      {isOtpValid ? (
                        <CheckCircleOutlineIcon
                          sx={{ color: theme.palette.success.main }}
                        />
                      ) : (
                        <Typography
                          variant="body2"
                          sx={{ color: theme.palette.text.secondary }}
                        >
                          Verify
                        </Typography>
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
          <Typography>
            Your OTP is successfully validated! Redirecting... Please wait...
          </Typography>
        </DialogContent>
      </Dialog>
      <ToastContainer />
    </div>
  );
};

export default TransferWithinBank22;
