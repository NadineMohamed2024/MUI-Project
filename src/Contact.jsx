import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PinDropIcon from '@mui/icons-material/PinDrop';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { styled } from '@mui/system';

// Custom styled components
const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#000',
    },
    '&:hover fieldset': {
      borderColor: '#000',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#000',
    },
  },
  '& .MuiInputLabel-root': {
    color: '#000',
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  background: '#000000',
  color: '#fff',
  '&:hover': {
    background: '#ffa56b',
  },
}));

export default function MUIContact() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "100px" }}>
      <Box sx={{ width: "80%", display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "50px" }}>
        {/* Contact Form */}
        <Box sx={{ width: "50%" }}>
          <Typography variant="h4" gutterBottom style={{ color: "#000" }}>
            Get in Touch
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <StyledTextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              fullWidth
              placeholder="Nadine Hany"
            />
            <StyledTextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              fullWidth
              placeholder="nadeenhany73@gmail.com"
            />
            <StyledTextField
              id="outlined-multiline-static"
              label="Message"
              multiline
              rows={4}
              variant="outlined"
              fullWidth
              placeholder="Type your message here"
            />
            <StyledButton variant="contained" fullWidth>
              Send Message
            </StyledButton>
          </Box>
        </Box>
        {/* Contact Info */}
        <Box sx={{ width: "40%" }}>
          <Typography variant="h4" gutterBottom style={{ color: "#000" }}>
            Contact Info
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <Typography variant="body1">
              <LocalPhoneIcon /> 01200721783
            </Typography>
            <Typography variant="body1">
              <PinDropIcon /> cairo egypt
            </Typography>
            <Typography variant="body1">
              <EmailIcon /> nadeenhany73@gmail.com
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
