import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function CustomerSideNavigationMenu() {
  const location = useLocation();
  const [openSection, setOpenSection] = useState(null);

  const isActiveLink = (path) => {
    return location.pathname === path;
  };

  const handleSectionToggle = (section) => {
    setOpenSection((prevSection) => (prevSection === section ? null : section));
  };
  const renderAccordionItem = (sectionHeading, links) => {
    if (sectionHeading === "Logout") {
      const link = links[0];
      return (
        <ListItem
          key={link.to}
          component={Link}
          to={link.to}
          className={isActiveLink(link.to) ? "active" : ""}
          sx={{ p: 1, color: "inherit", textDecoration: "none" }} // Customize styles here
        >
          <ListItemButton sx={{ p: 1 }}>
            <ListItemText primary={link.label} />
          </ListItemButton>
        </ListItem>
      );
    } else {
      return (
        <Accordion
          key={sectionHeading}
          expanded={openSection === sectionHeading}
          onChange={() => handleSectionToggle(sectionHeading)}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ p: 1 }}>
            <Typography>{sectionHeading}</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ p: 1 }}>
            <List>
              {links.map((link) => (
                <ListItem key={link.to} component={Link} to={link.to} sx={{ p: 1 }}>
                  <ListItemButton
                    className={isActiveLink(link.to) ? "active" : ""}
                    sx={{ p: 1 }}
                  >
                    <ListItemText primary={link.label} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </AccordionDetails>
        </Accordion>
      );
    }
  };
  

  const sections = [
    {
      heading: "Accounts",
      links: [
        {
          to: "/Customer/Account/ViewAccountBalance",
          label: "View Account Balance",
        },
        {
          to: "/Customer/Account/ViewAccountStatement9",
          label: "Account Statement",
        },
        { to: "/Customer/Account/KYCDetails12", label: "KYC Details" },
        { to: "/Customer/Account/CloseAccount18", label: "Close Account" },
      ],
    },
    {
      heading: "Funds Transfer",
      links: [
        {
          to: "/Customer/FundTransfer/TransferWithinBank21",
          label: "Transfer within bank",
        },
        // {
        //   to: "/Customer/FundTransfer/AddBeneficiary24",
        //   label: "Add Beneficiary",
        // },
        // {
        //   to: "/Customer/FundTransfer/AddDeleteBeneficiary24  ",
        //   label: "View / Delete Beneficiary",
        // },
        {
          to: "/Customer/FundTransfer/WithdrawMoney6",
          label: "Withdraw Money",
        },
      ],
    },
    {
      heading: "Other Services",
      links: [
        {
          to: "/Customer/OtherServices/ChangePassword30",
          label: "Change password",
        },
        {
          to: "/Customer/OtherServices/OffersAvailableForMe31",
          label: "Offers Available for me",
        },
        { to: "/Customer/OtherServices/ContactUs37", label: "Contact Us" },
        {
          to: "/Customer/OtherServices/NetBankingTutorials38",
          label: "Netbanking Tutorials",
        },
      ],
    },
    {
      heading: "Logout",
      links: [{ to: "/", label: "Log Out" }],
    },
  ];

  return (
    <div>
      {sections.map((section) =>
        renderAccordionItem(section.heading, section.links)
      )}
    </div>
  );
}

export default CustomerSideNavigationMenu;
