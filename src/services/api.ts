import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL
});

export async function getPeoples() {
  try {
    const response = await api.get('/people/');

    return response.data;
  } catch (error) {
    return { success: false, data: { msg: 'GET error' } };
  }
}
