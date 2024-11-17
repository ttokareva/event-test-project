import React from 'react';
import { Event } from '../services/api';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';

interface EventItemProps {
  event: Event;
  onDelete: (id: string) => void;
  onEdit: (event: Event) => void;
}

const EventItem: React.FC<EventItemProps> = ({ event, onDelete, onEdit }) => {
  return (
    <Card sx={{ mb: 2, boxShadow: 2 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {event.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Date:</strong> {event.date}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Location:</strong> {event.location}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Description:</strong> {event.description}
        </Typography>
        <Box sx={{ mt: 2, display: 'flex', gap: 2 }}>
          <Button variant="outlined" color="primary" onClick={() => onEdit(event)}>
            Edit
          </Button>
          <Button variant="outlined" color="primary" onClick={() => onDelete(event.id)}>
            Delete
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default EventItem;
