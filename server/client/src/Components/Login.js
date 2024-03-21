import 'react-toastify/dist/ReactToastify.css';

import { Button, FormGroup, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import * as React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    try {
      const url = "https://evenbrite-app.onrender.com/api/login/";
      const response = await axios.post(url, {
        email: email,
        password: password,
      });
      toast.success("Login successful!", {
        onClose: () => navigate("/"), // Navigate to login page after toast is closed
      });
    } catch (error) {
      console.log(error);
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
              <h3>Login</h3>

              <TextField
                required
                id="email"
                label="Email Id"
                style={{ width: 350 }}
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
                style={{ backgroundColor: "red", width: 350, marginTop: 33 }}
                onClick={handleSubmit}
              >
                Login
              </Button>
            </div>
          </div>
        </Paper>
      </Box>
    </Box>
  );
}
