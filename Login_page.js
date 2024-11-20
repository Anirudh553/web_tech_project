import React from 'react';
import { Box, TextField, Button, Typography, Paper, Link } from '@mui/material';

const LoginPage = () => {
  const bodyStyle = {
    margin: 0,
    padding: 0,
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: "url('Login.jpeg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    transition: 'background 0.3s ease',
  };

  return (
    <Box sx={bodyStyle}>
      <Paper
        elevation={5}
        sx={{
          p: 4,
          width: { xs: '90%', sm: '400px' },
          textAlign: 'center',
          borderRadius: 4,
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            fontWeight: 'bold',
            color: 'primary.main',
            textTransform: 'uppercase',
            marginBottom: '20px',
          }}
        >
          Sign in
        </Typography>

        <form action="/submit-srn" method="POST">
          <TextField
            fullWidth
            label="Enter SRN"
            variant="outlined"
            required
            autoFocus
            sx={{
              marginBottom: '15px',
              '& .MuiOutlinedInput-root': { borderRadius: '10px' },
            }}
          />

          <TextField
            fullWidth
            label="Password"
            type="password"
            variant="outlined"
            required
            sx={{
              marginBottom: '15px',
              '& .MuiOutlinedInput-root': { borderRadius: '10px' },
            }}
          />

          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{
              borderRadius: '10px',
              fontWeight: 'bold',
              py: 1.5,
              fontSize: '16px',
              marginBottom: '15px',
              transition: 'background-color 0.3s ease',
              '&:hover': { backgroundColor: '#3f51b5' },
            }}
            type="submit"
          >
            Sign in
          </Button>

          <Box sx={{ marginBottom: '10px' }}>
            <Link href="CreateAccount.html" sx={{ fontSize: '14px' }}>
              Create account
            </Link>
          </Box>

          <Typography variant="body2" color="textSecondary" sx={{ fontSize: '14px' }}>
            Not a student?{' '}
            <Link href="VistorLogin.html" sx={{ fontSize: '14px' }}>
              Sign in here
            </Link>
          </Typography>
        </form>
      </Paper>
    </Box>
  );
};

export default LoginPage;
