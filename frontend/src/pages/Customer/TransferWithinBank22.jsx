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
import { ToastContainer, toast } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css"; // Include Bootstrap CSS

import CustomerSideNavigationMenu from "../../components/CustomerSideNavigationMenu";
import CustomerTopNavigationBar from "../../components/CustomerTopNavigationBar";

const BASE_URL = "http://65.2.82.68:8080";

// setting a default authorization header for Axios requests
axios.defaults.headers.common[
  "Authorization"
] = `Bearer ${sessionStorage.getItem("jwt")}`;
axios.defaults.headers.post["Content-Type"] = "application/json";

const TransferWithinBank22 = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const [userInputOtp, setUserInputOtp] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const transferredData = location.state?.transferredData || null;
  const receiverAccountNumber = transferredData?.accountNumber || null;

  const [customerData, setCustomerData] = useState(null);

  useEffect(() => {
    const fetchCustomerData = async () => {
      try {
        const response = await axios.get(
          BASE_URL + `/Customer/User/GetMyDetails`
        );
        setCustomerData(response.data);

        // Once customerData is set, call generateOTP
        generateOTP(response.data.customerId);
      } catch (error) {
        console.error("Error fetching customer data:", error);
      }
    };

    fetchCustomerData();
  }, []);


  const generateOTP = async (customerId) => {
    try {
      await axios.get(`${BASE_URL}/Customer/transaction/otp/generate?customerId=${customerId}`);
    } catch (error) {
      toast.error(
        "🦄 Error generating OTP"+ error,
        {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        }
      );
      throw error; // Handle error as needed
    }
  };

  const handleOtpValidation = async () => {
    try {
      setIsLoading(true);

      const customerId = customerData.customerId;
      const verifyOtpResponse = await axios.post(
        BASE_URL+`/Customer/transaction/otp/verify?customerId=${customerId}&otp=${userInputOtp}`
      );
      console.log(verifyOtpResponse);

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
          const response = await axios.post(
            `${BASE_URL}/Customer/FundTransfer/SendMoney/${customerId}/${receiverAccountNumber}?amountToSend=${transferData.amount}&remarks=${remarksValue}`
          );
          if (response.status === 200) {
            navigate("/Customer/FundTransfer/TransferWithinBank23", {
              state: { transferData },
            });
          } else {
            toast.error(
              "🦄 "+response.statusText,
              {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              }
            );
            // console.error("Failed to send money:", response.statusText);
          }
        } catch (error) {
          toast.error(
            "🦄 " + error.message,
            {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            }
          );
          // console.error("Error while sending money:", error.message);
        }
      }
    } catch (error) {
      setIsLoading(false);
      toast.error(
        "🦄 " + error.message,
        {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        }
      );
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  if (!customerData) {
    return null; // Or render a loading indicator
  }

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
            OTP has been sent to your registered email id :{" "}
            <strong>{customerData.emailId}</strong>. Please enter the OTP below to
            complete the transaction (OTP is only valid for 2 minutes)
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
