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

import { useNavigate } from 'react-router-dom';

import CustomerSideNavigationMenu from "../../components/CustomerSideNavigationMenu";
import CustomerTopNavigationBar from "../../components/CustomerTopNavigationBar";

const CloseAccount18 = () => {
  const [isCloseAccountOpen, setCloseAccountOpen] = useState(false);
  const [feedback, setFeedback] = useState("");

  const navigate = useNavigate();

  const handleOpenCloseAccount = () => {
    setCloseAccountOpen(true);
  };

  const handleCloseCloseAccount = () => {
    setCloseAccountOpen(false);
  };

  const handleConfirmCloseAccount = () => {
    navigate('/Customer/OtherServices/ContactUs37');
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
            <hr/>
            {/* Feedback input field
            <TextField
              label="Feedback (optional)"
              variant="outlined"
              margin="normal"
              fullWidth
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
            /> */}

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
                  Contact details are mentioned in Contact Us section.
                </DialogContentText>
              </DialogContent>
              <DialogActions>
              <Button
                onClick={handleConfirmCloseAccount}
                color="primary"
                variant="contained"
              >
                I understood, contact bank representative
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
