import 'react-toastify/dist/ReactToastify.css';

import { Box, Button, FormGroup, Paper, Stack, TextField, Typography } from '@mui/material';
import { DateTimePicker } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import axios from 'axios';
import dayjs from 'dayjs';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const tomorrow = dayjs().add(1, "day");
const AddEvent = () => {
  function formatDate(inputDate) {
    // Check if inputDate is a string
    if (typeof inputDate !== "string") {
      console.error("Input date must be a string");
      return ""; // Return an empty string or handle the error as needed
    }

    // Split the input string to extract date and time components
    const [datePart, timePart] = inputDate.split(" ");

    // Extract day, month, year, hour, and minute components
    const [month, day, year] = datePart.split("/");
    const [hour, minute] = timePart.split(":");
    const ampm = timePart.slice(-2); // AM or PM

    // Convert hour to 24-hour format if it's in PM
    let formattedHour = parseInt(hour, 10);
    if (ampm === "PM" && formattedHour !== 12) {
      formattedHour += 12;
    }

    // Create a new Date object with the extracted components
    const newDate = new Date(
      `${year}-${month}-${day}T${formattedHour}:${minute}:00Z`
    );

    // Convert the date to ISO string
    const isoString = newDate.toISOString();

    return isoString;
  }

  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const navigate = useNavigate();

  const AddNewEvent = async (e) => {
    e.preventDefault();
    let formField = new FormData();
    const dayjsObject = {
      $L: "en",
      $u: undefined,
      $d: new Date(date),
      $y: 2024,
      $M: 2,
    };
    const dateString = dayjsObject.$d.toString();

    const is_liked = false;
    const formattedDate = formatDate(dateString);
    formField.append("event_name", name);
    formField.append("data", desc);
    formField.append("date", formattedDate);
    formField.append("location", location);
    formField.append("is_liked", is_liked);
    if (image !== null) {
      formField.append("image", image);
    }

    console.log(formField);
    await axios({
      method: "POST",
      url: "https://evenbrite-app.onrender.com/api/events/",
      data: formField,
    })
      .then((res) => {
        console.log(res.data);
        toast.success("Event added Successfully");
        setName("");
        setDesc("");
        setLocation("");
        setDate("");
      })
      .catch((e) => {
        console.error("Error is : ", e);
      });
  };
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <ToastContainer />
      <Box
        maxWidth={700}
        sx={{ display: "flex", justifyContent: "center", margin: 7 }}
      >
        <Paper>
          <h1>Add EVENT</h1>
          <Stack spacing={2} direction="row">
            <FormGroup style={{ flexDirection: "column", margin: 30 }}>
              <form onSubmit={AddNewEvent} encType="multipart/form-data">
                <div>
                  <TextField
                    id="name"
                    name="name"
                    label="Event Name"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <TextField
                    id="event_detail"
                    name="event_detail"
                    label="Event Details"
                    variant="outlined"
                    fullWidth
                    multiline
                    margin="normal"
                    rows={4}
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                  />
                  <TextField
                    id="location"
                    name="location"
                    label="Location Name"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={["DateTimePicker"]}>
                      <DemoItem>
                        <DateTimePicker
                          disablePast
                          views={["year", "month", "day", "hours", "minutes"]}
                          onChange={(e) => setDate(e)}
                        />
                      </DemoItem>
                    </DemoContainer>
                  </LocalizationProvider>
                  <div style={{ display: "flex", padding: 8, marginTop: 4 }}>
                    <Typography style={{ marginTop: 4 }}>
                      Event Poster :{" "}
                    </Typography>
                    <input
                      type="file"
                      name="eventPoster"
                      style={{ marginLeft: 10 }}
                      onChange={(e) => setImage(e.target.files[0])}
                    />
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row-reverse",
                    justifyContent: "flex-start",
                  }}
                >
                  <Button
                    type="submit"
                    variant="contained"
                    style={{ backgroundColor: "red" }}
                  >
                    Add Event
                  </Button>
                </div>
              </form>
            </FormGroup>
          </Stack>
        </Paper>
      </Box>
    </div>
  );
};

export default AddEvent;
