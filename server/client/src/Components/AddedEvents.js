import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';

const AddedEvents = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  const [events, setEvents] = useState([]);
  const getEvents = async () => {
    const res = await axios.get(
      "https://evenbrite-app.onrender.com/api/events/"
    );
    console.log(res.data[0].date);
    setEvents(res.data);
  };

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h1
        style={{
          fontWeight: 600,
          fontSize: "2.25rem",
          display: "flex",
          marginBottom: "50px",
          marginTop: "10px",
          marginLeft: "120px",
        }}
      >
        Events for you
      </h1>
      <Grid
        container
        spacing={1}
        style={{ display: "flex", marginLeft: "120px" }}
      >
        {events.map((eve, index) => (
          <div style={{ display: "flex" }}>
            <Card
              sx={{
                maxWidth: "286px",
                height: "369px",
                padding: "2px",
                margin: 2,
                borderRadius: "0px 0px 15px 15px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column-reverse",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    marginLeft: 15,
                  }}
                >
                  <CardHeader
                    titleTypographyProps={{ fontSize: "1.1rem" }}
                    title={eve.event_name}
                    sx={{
                      display: "flex",
                      fontSize: "1.5rem",
                      textAlign: "start",
                      lineHeight: "1.5rem",
                      padding: 0,
                    }}
                  />
                  <Typography color="red">
                    {format(new Date(eve.date), "EEE, MMM d, h:mm a")}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {eve.location}
                  </Typography>
                </div>
                <div>
                  <CardMedia
                    component="img"
                    sx={{ width: "100%", height: "165px" }}
                    image={eve.image}
                    alt={eve.event_name}
                  />

                  <CardActions
                    disableSpacing
                    sx={{ display: "flex", justifyContent: "flex-end" }}
                  >
                    <IconButton
                      href={`${eve.id}`}
                      type="submit"
                      onMouseEnter={handleHover}
                      onMouseLeave={handleHover}
                      onClick={handleClick}
                      sx={{
                        borderWidth: "1px",
                        borderStyle: "solid",
                        borderColor: "#dbdae3",
                        borderRadius: "50%",
                      }}
                    >
                      {isClicked || isHovered ? (
                        <FavoriteIcon style={{ color: "red" }} />
                      ) : (
                        <FavoriteBorderIcon fontSize="small" />
                      )}
                    </IconButton>
                    <IconButton aria-label="share">
                      <FileUploadOutlinedIcon
                        fontSize="large"
                        sx={{
                          borderWidth: "1px",
                          borderStyle: "solid",
                          borderColor: "#dbdae3",
                          borderRadius: "50%",
                        }}
                      />
                    </IconButton>
                  </CardActions>
                </div>
              </div>
            </Card>
          </div>
        ))}
      </Grid>
    </div>
  );
};

export default AddedEvents;
