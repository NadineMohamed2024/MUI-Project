import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { useScrollTrigger, Slide } from '@mui/material';

// Custom styled components for enhanced design
const Logo = styled('div')(({ theme }) => ({
  fontSize: '1.8rem',
  fontWeight: 'bold',
  color: theme.palette.primary.main,
  marginRight: theme.spacing(2),
  fontFamily: "'Pacifico', cursive",
}));

const NavLink = styled(Typography)(({ theme }) => ({
  fontSize: '1rem',
  fontWeight: 500,
  color: theme.palette.mode === 'light' ? '#333' : '#fff',
  marginLeft: theme.spacing(2),
  cursor: 'pointer',
  transition: 'color 0.3s ease',
  '&:hover': {
    color: theme.palette.primary.main,
  },
}));

export default function DenseAppBar() {
  const scrolled = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100 
  });

  return (
    <Slide appear={false} direction="down" in={!scrolled}>
      <AppBar position="fixed" sx={{ backgroundColor: scrolled ? '#000000' : 'transparent', boxShadow: 'none' }}>
        <Toolbar>
          <Logo>MyBrand</Logo>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <NavLink>Home</NavLink>
            <NavLink>About</NavLink>
            <NavLink>Services</NavLink>
            <NavLink>Contact</NavLink>
            <IconButton color="inherit" aria-label="menu">
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Slide>
  );
}
