import React, { useState, useEffect } from "react";
import axios from "axios";

const LikedEventsComponent = () => {
  const [likedEvents, setLikedEvents] = useState([]);

  useEffect(() => {
    fetchLikedEvents();
  }, []);

  const fetchLikedEvents = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/liked-event");
      setLikedEvents(response.data);
    } catch (error) {
      console.error("Error fetching liked events:", error);
    }
  };

  return (
    <div>
      <h2>Liked Events</h2>
      <ul>
        {likedEvents.map((event, index) => (
          <li key={event.id}>
            <h3>{event.event_name}</h3>
            <p>{event.data}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LikedEventsComponent;
