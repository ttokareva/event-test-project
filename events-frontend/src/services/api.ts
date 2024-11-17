import axios from 'axios';

const API_URL = 'http://localhost:3000/api/events';

export const getEvents = () => axios.get(API_URL);
export const createEvent = (data: EventInput) => axios.post(API_URL, data);
export const updateEvent = (id: string, data: EventInput) =>
  axios.put(`${API_URL}/${id}`, data);
export const deleteEvent = (id: string) => axios.delete(`${API_URL}/${id}`);

// Types
export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
}

export interface EventInput {
  title: string;
  date: string;
  location: string;
  description: string;
}
