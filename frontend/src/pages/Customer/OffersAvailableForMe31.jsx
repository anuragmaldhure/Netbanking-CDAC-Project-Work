import React, { useState, useEffect } from "react";
import axios from "axios";
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

const OffersAvailableForMe31 = () => {
  const [selectedOffer, setSelectedOffer] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [offers, setOffers] = useState([]);

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const customerId = 1; // Replace with actual customerId
        const response = await axios.get(`http://localhost:8080/Customer/OtherServices/OffersAvailableForMe/${customerId}`);
        setOffers(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []); 

  return (
    <div>
      <CustomerTopNavigationBar />
      <div style={{ display: "flex" }}>
        <CustomerSideNavigationMenu />
        <Container style={{ marginTop: "20px", marginLeft: "20px" }}>
          {offers.length === 0 ? (
            <Typography variant="h6">
              No eligible offers for your account balance
            </Typography>
          ) : (
            <Grid container spacing={3}>
              {offers.map((offer) => (
                <Grid item xs={12} sm={6} md={4} key={offer.offerId}>
                  <Card
                    onClick={() => handleCardClick(offer)}
                    style={{
                      cursor: "pointer",
                      transition: "transform 0.2s",
                      "&:hover": {
                        transform: "scale(1.05)",
                      },
                      border: "1px solid #e0e0e0",
                      borderRadius: "8px",
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <CardContent>
                      <Typography variant="h6"><strong>{offer.offerId}</strong></Typography>
                      <Typography variant="h6">{offer.offerTitle}</Typography>
                      <Typography variant="h7">{offer.offerDetails}</Typography>
                      <Typography> <strong>Minimum balance requirement : {offer.offerMinimumBalance}</strong></Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          )}
        </Container>
      </div>

      <Dialog open={openDialog} onClose={handleDialogClose}>
        <DialogTitle>{selectedOffer && selectedOffer.offerTitle}</DialogTitle>
        <DialogContent>
          <Typography>
            {selectedOffer && selectedOffer.offerDetails}
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
