import React from "react";
import { Container, Typography } from "@mui/material";
import ReactPlayer from "react-player";
import CustomerSideNavigationMenu from "../../components/CustomerSideNavigationMenu";
import CustomerTopNavigationBar from "../../components/CustomerTopNavigationBar";

const NetBankingTutorials38 = () => {
  const tutorialVideos = [
    {
      url: "https://youtu.be/dQw4w9WgXcQ?feature=shared",
      title: "Online Banking Safety Tips",
    },
    {
      url: "https://youtu.be/wWPFBDsK0uo?feature=shared",
      title: "Securing Your Online Transactions",
    },
    // Add more video URLs and titles as needed
  ];

  return (
    <div>
      <CustomerTopNavigationBar />
      <div style={{ display: "flex" }}>
        <CustomerSideNavigationMenu />
        <Container style={{ marginTop: "20px", marginLeft: "20px" }}>
          <Typography variant="h4" gutterBottom>
            Online Banking Tutorials
          </Typography>
          <Typography variant="subtitle1" style={{ marginBottom: "20px" }}>
            Explore the following video tutorials for online banking safety
            measures:
          </Typography>

          {tutorialVideos.map((video, index) => (
            <div key={index} style={{ marginBottom: "20px" }}>
              <Typography variant="h6" gutterBottom>
                {video.title}
              </Typography>
              <ReactPlayer
                url={video.url}
                controls
                light // Hide the video preview image
                width="100%"
                height="300px"
              />
            </div>
          ))}
        </Container>
      </div>
    </div>
  );
};

export default NetBankingTutorials38;
