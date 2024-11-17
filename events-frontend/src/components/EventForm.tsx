import React, { useState, useEffect } from 'react';
import { createEvent, updateEvent, EventInput } from '../services/api';
import { TextField, Button, Box, Typography } from '@mui/material';

interface EventFormProps {
  existingEvent?: EventInput & { id?: string };
  onSuccess: () => void;
}

const EventForm: React.FC<EventFormProps> = ({ existingEvent, onSuccess }) => {
  const [formData, setFormData] = useState<EventInput>({
    title: '',
    date: '',
    location: '',
    description: '',
  });

  useEffect(() => {
    if (existingEvent) {
      setFormData({
        title: existingEvent.title,
        date: existingEvent.date,
        location: existingEvent.location,
        description: existingEvent.description,
      });
    }
  }, [existingEvent]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (existingEvent?.id) {
      await updateEvent(existingEvent.id, formData);
    } else {
      await createEvent(formData);
    }
    setFormData({
      title: '',
      date: '',
      location: '',
      description: '',
    });
    onSuccess();
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        maxWidth: 400,
        margin: 'auto',
        mt: 4,
        p: 2,
        border: '1px solid #ccc',
        borderRadius: 2,
        boxShadow: 1,
      }}
    >
      <Typography variant="h6" component="h2">
        {existingEvent ? 'Edit Event' : 'Create Event'}
      </Typography>
      <TextField
        label="Title"
        name="title"
        value={formData.title}
        onChange={handleChange}
        required
        fullWidth
      />
      <TextField
        label="Date"
        name="date"
        type="date"
        value={formData.date}
        onChange={handleChange}
        required
        InputLabelProps={{ shrink: true }}
        fullWidth
      />
      <TextField
        label="Location"
        name="location"
        value={formData.location}
        onChange={handleChange}
        required
        fullWidth
      />
      <TextField
        label="Description"
        name="description"
        value={formData.description}
        onChange={handleChange}
        multiline
        rows={3}
        required
        fullWidth
      />
      <Button type="submit" variant="contained" color="primary">
        {existingEvent ? 'Update Event' : 'Create Event'}
      </Button>
    </Box>
  );
};

export default EventForm;
