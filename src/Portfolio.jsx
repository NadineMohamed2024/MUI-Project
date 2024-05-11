import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';
import { styled } from '@mui/material/styles';

// Sample item data (replace with actual portfolio items)
const itemData = [
  {
    id: 1,
    title: 'Project 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet turpis vitae ipsum posuere, id sollicitudin urna pulvinar.',
    imageUrl: 'https://via.placeholder.com/300',
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet turpis vitae ipsum posuere, id sollicitudin urna pulvinar.',
    imageUrl: 'https://via.placeholder.com/300',
  },
  {
    id: 3,
    title: 'Project 3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet turpis vitae ipsum posuere, id sollicitudin urna pulvinar.',
    imageUrl: 'https://via.placeholder.com/300',
  },
];

const StyledPaper = styled(Paper)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: theme.spacing(2),
  borderRadius: theme.spacing(1),
}));

export default function MUIMasonry() {
  return (
    <Box p={2}>
      <Masonry columns={3} spacing={2}>
        {itemData.map((item) => (
          <StyledPaper key={item.id}>
            <img src={item.imageUrl} alt={item.title} style={{ marginBottom: '8px', borderRadius: '4px' }} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </StyledPaper>
        ))}
      </Masonry>
    </Box>
  );
}

