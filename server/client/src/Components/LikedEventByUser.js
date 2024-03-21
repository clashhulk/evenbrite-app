import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';

const LikedEventByUser = (eventId) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  const handleClick = async () => {
    try {
      await axios.post(`https://evenbrite-app.onrender.com/api/${eventId}/`);
      setIsClicked(!isClicked);
    } catch (error) {
      console.error("Error liking event:", error);
    }
  };

  const [events, setEvents] = useState([]);
  const getEvents = async () => {
    const res = await axios.get(
      "https://evenbrite-app.onrender.com/api/liked-event"
    );
    console.log(res.data[0].date);
    setEvents(res.data);
  };

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <div>
      <h1
        style={{
          fontWeight: 800,
          fontSize: "3.25rem",
          display: "flex",
          marginBottom: "50px",
          marginTop: "120px",
          marginLeft: "120px",
        }}
      >
        Likes
      </h1>
      {events.map((eve, index) => (
        <div style={{ marginLeft: "120px" }}>
          <Card
            sx={{
              maxWidth: "950px",
              padding: "2px",
              margin: "5px",
            }}
          >
            <div
              style={{
                display: "flex",
                margin: "10px",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
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
                  sx={{ width: "220px" }}
                  image={eve.image}
                  alt={eve.event_name}
                />

                <CardActions
                  disableSpacing
                  sx={{ display: "flex", justifyContent: "flex-end" }}
                >
                  <IconButton
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
                    {isClicked ? (
                      <FavoriteBorderIcon fontSize="small" />
                    ) : (
                      <FavoriteIcon style={{ color: "red" }} />
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
    </div>
  );
};

export default LikedEventByUser;
