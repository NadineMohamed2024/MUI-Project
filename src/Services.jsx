import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import DesignIcon from '@mui/icons-material/DesignServices'; // Assuming you have an icon for design services

export default function MUICard() {
  return (
    <Card sx={{ border: '.5px solid #ccc', minWidth: "35%", height: '40vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', margin: '10px', padding: '20px' }}>
      <CardContent>
        <DesignIcon sx={{ fontSize: '50px', color: "#000000", marginBottom: '20px',display:"flex",justifyContent:"center" }} />
        <Typography variant="h4" sx={{ marginBottom: '20px' }}>UI/UX Design</Typography>
        <Typography variant="body1" sx={{ textAlign: 'center', marginBottom: '20px' }}>
          As a UI/UX designer, I create visually stunning and intuitive user interfaces that prioritize user experience and usability.
        </Typography>
      </CardContent>
    </Card>
  );
}
