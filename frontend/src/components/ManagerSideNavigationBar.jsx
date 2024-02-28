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
import styles from "./ManagerSideNavigationBar.module.css"; // Make sure to adjust the import path based on your file structure

function ManagerSideNavigationBar() {
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
          className={isActiveLink(link.to) ? styles.active : ""}
          sx={{ p: 1, color: "inherit", textDecoration: "none" }}
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
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            sx={{
              p: 1,
              backgroundColor: isActiveLink(links[0].to)
                ? "#ffdd40" // Active background color
                : "inherit",
              "&:hover": {
                backgroundColor: "#ffdd40", // Hover background color
              },
            }}
          >
            <Typography
              sx={{
                color: isActiveLink(links[0].to) ? "#1f5156" : "inherit", // Active text color
                "&:hover": {
                  color: "#1f5156", // Hover text color
                },
              }}
            >
              {sectionHeading}
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ p: 1 }}>
            <List>
              {links.map((link) => (
                <ListItem
                  key={link.to}
                  component={Link}
                  to={link.to}
                  sx={{ p: 1 }}
                >
                  <ListItemButton
                    className={isActiveLink(link.to) ? styles.active : ""}
                    sx={{
                      p: 1,
                      "&:hover": {
                        backgroundColor: "#ffdd40", // Hover background color for links
                      },
                    }}
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
      heading: "Customer",
      links: [
        {
          to: "/Manager/Customer/SearchCustomerAccount",
          label: "Search Customer",
        },
      ],
    },
    {
      heading: "Employee",
      links: [
        {
          to: "/Manager/Employee/SearchEmployee67",
          label: "Search Employee",
        },
        {
          to: "/Manager/Employee/AddEmployee68",
          label: "Add Employee",
        },
        // {
        //   to: "/Manager/Employee/DeleteEmployee69",
        //   label: "Delete Employee",
        // },
      ],
    },
    
    {
      heading: "Logout",
      links: [{ to: "/", label: "Log Out" }],
    },
  ];

  return (
    <div className={styles["manager-side-navbar-container"]}>
      <div className={styles["nav-links-container"]}>
        {sections.map((section) =>
          renderAccordionItem(section.heading, section.links)
        )}
      </div>
      <div className={styles["user-icons-container"]}>
        {/* Add your user icons here */}
      </div>
    </div>
  );
}

export default ManagerSideNavigationBar;
