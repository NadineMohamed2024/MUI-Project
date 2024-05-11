import React from 'react';
import { Box, Button, Typography, Card, CardContent, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#db9243' : '#308fe8',
  },
}));

// Custom styled component for a decorative separator
const Separator = styled('div')({
  width: '100%',
  height: 2,
  backgroundColor: '#000000',
  margin: '20px 0',
});

export default function MUIBio() {
  return (
    <>
      <Box textAlign="center">

        {/* Decorative separator */}
        <Separator />
        <Typography variant="body1" paragraph>
          My name is Nadine and I am a UI/UX designer.
        </Typography>
      </Box>

      {/* Add more components or content here */}
      <Box mt={4}>
        <Grid container spacing={3} justifyContent="center">
          {/* Sample Cards */}
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  My Skills
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  - UI Design<br />
                  - UX Design<br />
                  - Prototyping<br />
                  - Wireframing<br />
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  My Projects
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  - Project 1<br />
                  - Project 2<br />
                  - Project 3<br />
                  - Project 4<br />
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* Button */}
      <Box mt={4} textAlign="center">
        <Button variant="contained" color="primary">
          View Portfolio
        </Button>
      </Box>
    </>
  );
}
