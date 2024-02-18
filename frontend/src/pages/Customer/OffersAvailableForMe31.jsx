import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Container,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";

import CustomerSideNavigationMenu from "../../components/CustomerSideNavigationMenu";
import CustomerTopNavigationBar from "../../components/CustomerTopNavigationBar";
import offersData from "./offersData";

const OffersAvailableForMe31 = () => {
  const accountBalance = 150;
  const [selectedOffer, setSelectedOffer] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  const handleCardClick = (offer) => {
    setSelectedOffer(offer);
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
    setSelectedOffer(null);
  };

  const handleAvailOffer = () => {
    const availedMessage = selectedOffer && selectedOffer.offerAvailedMessage;
    if (availedMessage) {
      alert(availedMessage);
    }
    handleDialogClose();
  };

  const eligibleOffers = offersData.filter(
    (offer) => offer.minBalance <= accountBalance
  );
  return (
    <div>
      <CustomerTopNavigationBar />
      <div style={{ display: "flex" }}>
        <CustomerSideNavigationMenu />
        <Container style={{ marginTop: "20px", marginLeft: "20px" }}>
          {eligibleOffers.length === 0 ? (
            <Typography variant="h6">
              No eligible offers for your account balance
            </Typography>
          ) : (
            <Grid container spacing={3}>
              {eligibleOffers.map((offer) => (
                <Grid item xs={12} sm={6} md={4} key={offer.id}>
                  <Card
                    onClick={() => handleCardClick(offer)}
                    style={{
                      cursor: "pointer",
                      transition: "transform 0.2s",
                      "&:hover": {
                        transform: "scale(1.05)",
                      },
                      border: "1px solid #e0e0e0", // Add border for better visibility
                      borderRadius: "8px", // Add border radius for a rounded look
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Add a subtle box shadow
                    }}
                  >
                    <CardContent>
                      <Typography variant="h6">{offer.title}</Typography>
                      <Typography>{offer.description}</Typography>
                      <Typography variant="subtitle1">
                        Minimum Balance: ${offer.minBalance}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          )}
        </Container>
      </div>

      {/* Dialog Modal */}
      <Dialog open={openDialog} onClose={handleDialogClose}>
        <DialogTitle>{selectedOffer && selectedOffer.title}</DialogTitle>
        <DialogContent>
          <Typography>
            {selectedOffer && selectedOffer.dialogMessage}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleAvailOffer} color="primary">
            Avail Offer
          </Button>
          <Button onClick={handleDialogClose} color="secondary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default OffersAvailableForMe31;
