import React from "react";
import { Container, Grid, Typography } from "@mui/material";

const Footer = () => {
  return (
    <footer
      style={{
        marginTop: 50,
        backgroundColor: "#000",
        color: "white",
        flexDirection: "column",
      }}
    >
      <img
        src="/img/footerlogo.png"
        alt="Logo"
        width={220}
        height={80}
        style={{ marginTop: 10 }}
      />
      <div>
        <Container>
          <Grid container spcing={3}>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <ul
                style={{
                  listStyleType: "none",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  marginTop: 50,
                }}
              >
                <li style={{ fontWeight: 800, marginBottom: 10 }}>
                  Use Eventbrite
                </li>
                <li style={{ fontWeight: 200 }}>Create Events</li>
                <li style={{ fontWeight: 200 }}>Pricing</li>
                <li style={{ fontWeight: 200 }}>Event Marketing Platform</li>
                <li style={{ fontWeight: 200 }}>
                  Eventbrite Mobile Ticket App
                </li>
                <li style={{ fontWeight: 200 }}>Eventbrite Check-In App</li>
                <li style={{ fontWeight: 200 }}>Eventbrite App Marketplace</li>
                <li style={{ fontWeight: 200 }}>Event Registration Software</li>
                <li style={{ fontWeight: 200 }}>Content Standards</li>
                <li style={{ fontWeight: 200 }}>FAQs</li>{" "}
              </ul>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <ul
                style={{
                  listStyleType: "none",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  marginTop: 50,
                }}
              >
                <li style={{ fontWeight: 800, marginBottom: 10 }}>
                  Use Eventbrite
                </li>
                <li style={{ fontWeight: 200 }}>Create Events</li>
                <li style={{ fontWeight: 200 }}>Pricing</li>
                <li style={{ fontWeight: 200 }}>Event Marketing Platform</li>
                <li style={{ fontWeight: 200 }}>
                  Eventbrite Mobile Ticket App
                </li>
                <li style={{ fontWeight: 200 }}>Eventbrite Check-In App</li>
                <li style={{ fontWeight: 200 }}>Eventbrite App Marketplace</li>
                <li style={{ fontWeight: 200 }}>Event Registration Software</li>
                <li style={{ fontWeight: 200 }}>Content Standards</li>
                <li style={{ fontWeight: 200 }}>FAQs</li>{" "}
              </ul>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <ul
                style={{
                  listStyleType: "none",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  marginTop: 50,
                }}
              >
                <li style={{ fontWeight: 800, marginBottom: 10 }}>
                  Use Eventbrite
                </li>
                <li style={{ fontWeight: 200 }}>Create Events</li>
                <li style={{ fontWeight: 200 }}>Pricing</li>
                <li style={{ fontWeight: 200 }}>Event Marketing Platform</li>
                <li style={{ fontWeight: 200 }}>
                  Eventbrite Mobile Ticket App
                </li>
                <li style={{ fontWeight: 200 }}>Eventbrite Check-In App</li>
                <li style={{ fontWeight: 200 }}>Eventbrite App Marketplace</li>
                <li style={{ fontWeight: 200 }}>Event Registration Software</li>
                <li style={{ fontWeight: 200 }}>Content Standards</li>
                <li style={{ fontWeight: 200 }}>FAQs</li>{" "}
              </ul>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <ul
                style={{
                  listStyleType: "none",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  marginTop: 50,
                }}
              >
                <li style={{ fontWeight: 800, marginBottom: 10 }}>
                  Use Eventbrite
                </li>
                <li style={{ fontWeight: 200 }}>Create Events</li>
                <li style={{ fontWeight: 200 }}>Pricing</li>
                <li style={{ fontWeight: 200 }}>Event Marketing Platform</li>
                <li style={{ fontWeight: 200 }}>
                  Eventbrite Mobile Ticket App
                </li>
                <li style={{ fontWeight: 200 }}>Eventbrite Check-In App</li>
                <li style={{ fontWeight: 200 }}>Eventbrite App Marketplace</li>
                <li style={{ fontWeight: 200 }}>Event Registration Software</li>
                <li style={{ fontWeight: 200 }}>Content Standards</li>
                <li style={{ fontWeight: 200 }}>FAQs</li>{" "}
              </ul>
            </Grid>
          </Grid>
        </Container>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          style={{ padding: "20px 0" }}
        >
          <Grid item>
            <img src="/img/footerlogo.png" alt="Logo" width={120} height={40} />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1" align="center">
              Address: 123 Street, City, Country
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" align="center">
              Phone: +9130017466 | Email: akshata.bhimnale@example.com
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" align="center">
              © {new Date().getFullYear()} eventbrite. All rights reserved.
            </Typography>
          </Grid>
        </Grid>
      </div>
    </footer>
  );
};

export default Footer;
