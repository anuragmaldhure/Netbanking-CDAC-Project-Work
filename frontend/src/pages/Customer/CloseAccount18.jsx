import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import { Box, Container } from "@mui/system";

import CustomerSideNavigationMenu from "../../components/CustomerSideNavigationMenu";
import CustomerTopNavigationBar from "../../components/CustomerTopNavigationBar";

const CloseAccount18 = () => {
  const [isCloseAccountOpen, setCloseAccountOpen] = useState(false);
  const [feedback, setFeedback] = useState("");

  const handleOpenCloseAccount = () => {
    setCloseAccountOpen(true);
  };

  const handleCloseCloseAccount = () => {
    setCloseAccountOpen(false);
  };

  const handleConfirmCloseAccount = () => {
    // Implement your logic to close the account here
    // You can also use the 'feedback' state here
    console.log("Account Closed!");
    console.log("Feedback:", feedback);
    handleCloseCloseAccount();
  };

  return (
    <div>
      <CustomerTopNavigationBar />
      <div style={{ display: "flex" }}>
        <CustomerSideNavigationMenu />
        <Container maxWidth="md" sx={{ display: "flex" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              mt: 5,
            }}
          >
            {/* Your other components or page content */}
            <Box sx={{ textAlign: "center" }}>
              <h1>CLOSE ACCOUNT</h1>
              <h2>
                Do you really want to close your account? If yes, click on the
                "Close Account" button below.
              </h2>
            </Box>

            {/* Feedback input field */}
            <TextField
              label="Feedback (optional)"
              variant="outlined"
              margin="normal"
              fullWidth
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
            />

            {/* Button to open the CloseAccount modal */}
            <Button
              onClick={handleOpenCloseAccount}
              color="primary"
              variant="contained"
            >
              Close Account
            </Button>

            {/* CloseAccount modal */}
            <Dialog open={isCloseAccountOpen} onClose={handleCloseCloseAccount}>
              <DialogTitle>Close Account</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  We're sorry to see you go. Closing your account is
                  irreversible.
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleCloseCloseAccount} color="primary">
                  Cancel
                </Button>
                <Button
                  onClick={handleConfirmCloseAccount}
                  color="primary"
                  variant="contained"
                >
                  Confirm Closure
                </Button>
              </DialogActions>
            </Dialog>
          </Box>
        </Container>
      </div>
    </div>
  );
};

export default CloseAccount18;
