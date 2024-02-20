import React, { useEffect } from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, useLocation } from "react-router-dom";

import CustomerSideNavigationMenu from "../../components/CustomerSideNavigationMenu";
import CustomerTopNavigationBar from "../../components/CustomerTopNavigationBar";

const TransferWithinBank23 = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Access transferred data from location.state
  const transferredData = location.state?.transferData || null;

  // Display a back-to-homepage button centered
  const BackToHomepageButton = () => (
    <Box sx={{ display: "flex", justifyContent: "center", marginTop: 2 }}>
      <Button
        onClick={() => navigate("/Customer/Account/ViewAccountBalance")}
        variant="contained"
        color="primary"
      >
        Back to Homepage
      </Button>
    </Box>
  );

  // Display a toast for Transfer successful
  useEffect(() => {
    // Check if transferredData is available before showing the toast
    if (transferredData) {
      toast.success("Transfer successful!");
    }
  }, [transferredData]);

  // Check if transferredData is available
  if (!transferredData) {
    // Handle the case where transferredData is not available
    return (
      <div>
        <CustomerTopNavigationBar />
        <div style={{ display: "flex" }}>
          <CustomerSideNavigationMenu />
          <Container sx={{ padding: 3 }}>
            <Typography variant="h5" gutterBottom>
              Transfer Data Not Available
            </Typography>
            <BackToHomepageButton />
          </Container>
        </div>
      </div>
    );
  }

  // Display transfer data in a beautiful box grid format
  const TransferDataBox = () => (
    <Box
      sx={{
        border: 1,
        borderRadius: 2,
        borderColor: "primary.main",
        padding: 3,
        marginBottom: 3,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Typography variant="h5" gutterBottom>
        Transfer Successful!
      </Typography>
      <Typography>
        <strong>Account Number:</strong> {transferredData.accountNumber}
      </Typography>
      <Typography>
        <strong>Amount:</strong> {transferredData.amount}
      </Typography>
      <Typography>
        <strong>Remarks:</strong> {transferredData.remarks}
      </Typography>
    </Box>
  );

  return (
    <div>
      <CustomerTopNavigationBar />
      <div style={{ display: "flex" }}>
        <CustomerSideNavigationMenu />
        <Container sx={{ padding: 3 }}>
          <TransferDataBox />
          <BackToHomepageButton />
        </Container>
      </div>
    </div>
  );
};

export default TransferWithinBank23;
