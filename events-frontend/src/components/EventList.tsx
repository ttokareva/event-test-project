import React from 'react';
import { Event } from '../services/api';
import EventItem from './EventItem';
import { Box, Typography } from '@mui/material';

interface EventListProps {
  events: Event[];
  onDelete: (id: string) => void;
  onEdit: (event: Event) => void;
}

const EventList: React.FC<EventListProps> = ({ events, onDelete, onEdit }) => (
  <Box sx={{ maxWidth: 600, margin: 'auto', mt: 4 }}>
    {events.length === 0 ? (
      <Typography variant="body1" color="text.secondary">
        No events available. Add a new event to get started!
      </Typography>
    ) : (
      events.map((event) => (
        <EventItem key={event.id} event={event} onDelete={onDelete} onEdit={onEdit} />
      ))
    )}
  </Box>
);

export default EventList;
