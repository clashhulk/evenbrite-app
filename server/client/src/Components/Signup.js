import 'react-toastify/dist/ReactToastify.css';

import { Button, FormGroup, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import * as React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

export default function Signup() {
  const navigate = useNavigate();
  const [user_name, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "https://evenbrite-app.onrender.com/api/signup/",
        {
          user_name: user_name,
          email: email,
          password: password,
        }
      );
      toast.success("Registration successful!", {
        onClose: () => navigate("/login"), // Navigate to login page after toast is closed
      });
      // Optionally, you can redirect the user to another page or show a success message
    } catch (error) {
      if (error.response && error.response.status === 400) {
        toast.error(error.response.data.error);
      } else {
        toast.error("Something went wrong. Please try again later.");
      }
    }
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "row",
      }}
    >
      <ToastContainer />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          "& > :not(style)": {
            width: 800,
            height: 640,
            marginTop: 1,
          },
        }}
      >
        <Paper
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <img src="/img/award.png" style={{ height: 550 }}></img>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
            }}
          >
            <div>
              <img src="/img/eventlogo.png" style={{ width: 274 }} />
            </div>

            <FormGroup style={{ flexDirection: "column" }}>
              <h1 style={{ fontWeight: 800 }}>
                Hello <span style={{ color: "red" }}>User</span>
              </h1>
              <h3>Sign Up</h3>
              <TextField
                required
                id="username"
                label="Full Name"
                style={{ width: 350 }}
                size="small"
                value={user_name}
                onChange={(e) => setUserName(e.target.value)}
              />
              <TextField
                required
                id="email"
                label="Email Id"
                style={{ width: 350, marginTop: 10 }}
                size="small"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                required
                id="password"
                label="Password"
                type="password"
                style={{ width: 350, marginTop: 10 }}
                size="small"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormGroup>
            <div style={{ display: "flex" }}>
              <Button
                type="submit"
                variant="contained"
                onClick={handleSubmit}
                style={{ backgroundColor: "red", width: 350, marginTop: 33 }}
              >
                Sign Up
              </Button>
            </div>
          </div>
        </Paper>
      </Box>
    </Box>
  );
}
