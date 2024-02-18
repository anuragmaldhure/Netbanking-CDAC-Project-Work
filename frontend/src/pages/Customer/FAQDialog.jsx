// FAQDialog.jsx
import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  InputAdornment,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const FAQDialog = ({ open, handleClose, faqData }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const filteredFAQs = faqData.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
      <DialogTitle>Frequently Asked Questions (FAQ)</DialogTitle>
      <DialogContent>
        <TextField
          label="Search FAQs"
          variant="outlined"
          fullWidth
          margin="normal"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        {filteredFAQs.length === 0 ? (
          <Typography variant="body1">
            No FAQs found for your search.
          </Typography>
        ) : (
          filteredFAQs.map((faq) => (
            <div key={faq.id} style={{ marginBottom: "20px" }}>
              <Typography variant="h6">{faq.question}</Typography>
              <Typography>{faq.answer}</Typography>
            </div>
          ))
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default FAQDialog;
