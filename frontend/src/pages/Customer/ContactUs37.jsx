// ContactUs37.jsx
import React, { useState } from "react";
import {
  Container,
  Typography,
  Button,
  Paper,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import CustomerSideNavigationMenu from "../../components/CustomerSideNavigationMenu";
import CustomerTopNavigationBar from "../../components/CustomerTopNavigationBar";
import FAQDialog from "./FAQDialog"; // Import the FAQDialog component
import faqData from "./faqData";

const ContactUs37 = () => {
  const [openFAQDialog, setOpenFAQDialog] = useState(false);
  const [openContactDialog, setOpenContactDialog] = useState(false);

  const handleFAQDialogOpen = () => {
    setOpenFAQDialog(true);
  };

  const handleFAQDialogClose = () => {
    setOpenFAQDialog(false);
  };

  const handleContactDialogOpen = () => {
    setOpenContactDialog(true);
  };

  const handleContactDialogClose = () => {
    setOpenContactDialog(false);
  };

  return (
    <div>
      <CustomerTopNavigationBar />
      <div style={{ display: "flex" }}>
        <CustomerSideNavigationMenu />
        <Container style={{ marginTop: "20px", marginLeft: "20px" }}>
          <Typography variant="h4" gutterBottom>
            Contact Us
          </Typography>
          <Grid container spacing={3}>
            {/* Contact Information */}
            <Grid item xs={12} md={6}>
              <Paper
                elevation={3}
                style={{ padding: "20px", textAlign: "center" }}
              >
                <Typography variant="h6">Contact Information</Typography>
                <Typography variant="body1" style={{ marginTop: "10px" }}>
                  <FaPhoneAlt style={{ marginRight: "5px" }} />
                  Phone: +1 (555) 123-4567
                </Typography>
                <Typography variant="body1" style={{ marginTop: "10px" }}>
                  <FaEnvelope style={{ marginRight: "5px" }} />
                  Email: info@example.com
                </Typography>
              </Paper>
            </Grid>

            {/* Contact Form */}
            <Grid item xs={12} md={6}>
              <Paper elevation={3} style={{ padding: "20px" }}>
                <Typography variant="h6">Have a Query?</Typography>
                <Button
                  variant="outlined"
                  color="primary"
                  style={{ marginTop: "10px" }}
                  onClick={handleContactDialogOpen}
                >
                  Contact Us
                </Button>
              </Paper>
            </Grid>
          </Grid>

          {/* View FAQs Button */}
          <Button
            variant="outlined"
            color="primary"
            style={{ marginTop: "20px" }}
            onClick={handleFAQDialogOpen}
          >
            View FAQs
          </Button>
        </Container>
      </div>

      {/* FAQ Dialog */}
      <FAQDialog
        open={openFAQDialog}
        handleClose={handleFAQDialogClose}
        faqData={faqData}
      />

      {/* Contact Dialog */}
      <Dialog open={openContactDialog} onClose={handleContactDialogClose}>
        <DialogTitle>Contact Us</DialogTitle>
        <DialogContent>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            label="Email"
            type="email"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            label="Message"
            multiline
            rows={4}
            variant="outlined"
            fullWidth
            margin="normal"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleContactDialogClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleContactDialogClose} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ContactUs37;
