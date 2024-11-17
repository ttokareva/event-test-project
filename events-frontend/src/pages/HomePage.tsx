import React, { useState, useEffect } from 'react';
import { getEvents, deleteEvent, Event } from '../services/api';
import EventForm from '../components/EventForm';
import EventList from '../components/EventList';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';

const HomePage: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [editingEvent, setEditingEvent] = useState<Event | null>(null);

  const fetchEvents = async () => {
    const response = await getEvents();
    setEvents(response.data);
  };

  const handleDelete = async (id: string) => {
    await deleteEvent(id);
    fetchEvents();
  };

  const handleEdit = (event: Event) => {
    setEditingEvent(event);
  };

  const handleFormSuccess = () => {
    fetchEvents();
    setEditingEvent(null);
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <div>
      <AppBar position="static">
        <Typography variant="h4" align="center">Events</Typography>
      </AppBar>
      <EventForm existingEvent={editingEvent || undefined} onSuccess={handleFormSuccess} />
      <EventList events={events} onDelete={handleDelete} onEdit={handleEdit} />
    </div>
  );
};

export default HomePage;
