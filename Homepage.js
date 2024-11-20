import React, { useState } from "react";
import { Box, TextField, Button, Typography, Paper, Grid, IconButton } from "@mui/material";
import UploadFileIcon from "@mui/icons-material/UploadFile";

function CreateAccount() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [background, setBackground] = useState("");

  const handleBackgroundUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setBackground(reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      sx={{
        backgroundImage: background
          ? `url(${background})`
          : "linear-gradient(to right, #8360c3, #2ebf91)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background 0.3s ease",
      }}
    >
      <Paper
        elevation={5}
        sx={{
          p: 4,
          width: { xs: "90%", sm: "400px" },
          textAlign: "center",
          borderRadius: 4,
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            fontWeight: "bold",
            color: "primary.main",
            textTransform: "uppercase",
            marginBottom: "20px",
          }}
        >
          Create Account
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Enter your name"
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
              InputProps={{
                style: { borderRadius: "10px" },
              }}
              sx={{ "& .MuiOutlinedInput-root": { borderRadius: "10px" } }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Enter email"
              type="email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              InputProps={{
                style: { borderRadius: "10px" },
              }}
              sx={{ "& .MuiOutlinedInput-root": { borderRadius: "10px" } }}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="success"
              fullWidth
              sx={{
                borderRadius: "10px",
                fontWeight: "bold",
                py: 1.5,
                fontSize: "16px",
                transition: "background-color 0.3s",
                "&:hover": {
                  backgroundColor: "#4caf50",
                },
              }}
              onClick={() => alert(`Account created for ${name}!`)}
            >
              Create Account
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="outlined"
              component="label"
              color="secondary"
              startIcon={<UploadFileIcon />}
              fullWidth
              sx={{
                borderRadius: "10px",
                fontWeight: "bold",
                py: 1.5,
                fontSize: "16px",
                transition: "background-color 0.3s",
                "&:hover": {
                  backgroundColor: "#9e9e9e",
                },
              }}
            >
              Upload Background
              <input
                type="file"
                accept="image/*"
                hidden
                onChange={handleBackgroundUpload}
              />
            </Button>
          </Grid>
        </Grid>
        <Typography
          variant="caption"
          sx={{ display: "block", mt: 2, color: "gray" }}
        >
          Upload a background to personalize your form.
        </Typography>
      </Paper>
    </Box>
  );
}

export default HomePage;
