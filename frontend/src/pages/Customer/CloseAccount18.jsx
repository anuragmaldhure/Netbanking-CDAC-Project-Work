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
    console.log("Account freezed!");
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
            <Box sx={{ textAlign: "center" }}>
              <h1>FREEZE / DEACTIVATE ACCOUNT</h1>
              <h2>
                Are you sure you want to freeze or deactivate your account? If yes, click the
                "Deactivate Account" button below.
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
              Deactivate Account
            </Button>

            {/* CloseAccount modal */}
            <Dialog open={isCloseAccountOpen} onClose={handleCloseCloseAccount}>
              <DialogTitle>Deactivate Account</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  We regret to inform you that deactivating your account will result in all transactions
                  from and to your account being blocked effective immediately. Please contact our bank employees for the same as soon as possible.
                  Contact details are mentioned in Other Services / Contact Us Section.
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
                  I understood
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
