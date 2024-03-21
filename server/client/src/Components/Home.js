import React from "react";
import ShowEvent from "./ShowEvent";
import { Divider, Grid, IconButton, Typography } from "@mui/material";

const Home = () => {
  return (
    <div>
      <div>
        <img
          src="/img/Home.webp"
          style={{
            width: 1536,
            height: 448,
            objectPosition: "top",
            objectFit: "cover",
          }}
        />
      </div>
      <Divider
        sx={{
          borderColor: "black",
          marginBottom: "46px",
          marginTop: "30px",
        }}
      />
      <Grid container spacing={3} sx={{ marginTop: 3, marginLeft: "120px" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <IconButton>
            <img
              src="/img/mic.png"
              style={{
                width: 125,
                height: "auto",
                borderRadius: "100%",
                border: "1px solid black",
                margin: 6,
              }}
            />
          </IconButton>
          <Typography sx={{ fontSize: "0.7rem" }}>Music</Typography>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <IconButton>
            <img
              src="/img/disco-light.png"
              style={{
                width: 125,
                height: "auto",
                borderRadius: "100%",
                border: "1px solid black",
                margin: 6,
              }}
            />
          </IconButton>
          <Typography sx={{ fontSize: "0.7rem" }}>Night Life</Typography>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <IconButton>
            <img
              src="/img/mask.jpg"
              style={{
                width: 125,
                height: "auto",
                borderRadius: "100%",
                border: "1px solid black",
                margin: 6,
              }}
            />
          </IconButton>
          <Typography sx={{ fontSize: "0.7rem" }}>
            Performing & Visual Arts
          </Typography>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <IconButton>
            <img
              src="/img/calender.jpg"
              style={{
                width: 125,
                height: "auto",
                borderRadius: "100%",
                border: "1px solid black",
                margin: 6,
              }}
            />
          </IconButton>
          <Typography sx={{ fontSize: "0.7rem" }}>Holidays</Typography>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <IconButton>
            <img
              src="/img/health.jpg"
              style={{
                width: 125,
                height: "auto",
                borderRadius: "100%",
                border: "1px solid black",
                margin: 6,
              }}
            />
          </IconButton>
          <Typography sx={{ fontSize: "0.7rem" }}>Health</Typography>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <IconButton>
            <img
              src="/img/game.jpg"
              style={{
                width: 125,
                height: "auto",
                borderRadius: "100%",
                border: "1px solid black",
                margin: 6,
              }}
            />
          </IconButton>
          <Typography sx={{ fontSize: "0.7rem" }}>Hobbies</Typography>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <IconButton>
            <img
              src="/img/buisiness.jpg"
              style={{
                width: 125,
                height: "auto",
                borderRadius: "100%",
                border: "1px solid black",
                margin: 6,
              }}
            />
          </IconButton>
          <Typography sx={{ fontSize: "0.7rem" }}>Business</Typography>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <IconButton>
            <img
              src="/img/food.jpg"
              style={{
                width: 125,
                height: "auto",
                borderRadius: "100%",
                border: "1px solid black",
                margin: 6,
              }}
            />
          </IconButton>
          <Typography sx={{ fontSize: "0.7rem" }}>Food</Typography>
        </div>
      </Grid>
      <Divider sx={{ borderColor: "black", marginTop: "46px" }} />
      <ShowEvent />
    </div>
  );
};

export default Home;
