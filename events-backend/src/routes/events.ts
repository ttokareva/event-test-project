import express from 'express';
import { Event } from '../models/Event';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();
let events: Event[] = [];

// Get all events
router.get('/', (req, res) => {
  res.json(events);
});

// Create an event
router.post('/', (req, res) => {
  const newEvent: Event = { id: uuidv4(), ...req.body };
  events.push(newEvent);
  res.status(201).json(newEvent);
});

// Update an event
router.put('/:id', (req, res): Promise<any> => {
  const { id } = req.params;
  const index = events.findIndex((event) => event.id === id);
  if (index === -1) return Promise.resolve(res.status(404).json({ message: 'Event not found' }));

  events[index] = { ...events[index], ...req.body };
  res.json(events[index]);
  return Promise.resolve();
});

// Delete an event
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  events = events.filter((event) => event.id !== id);
  res.status(204).send();
});

export default router;
