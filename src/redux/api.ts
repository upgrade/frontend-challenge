import axios from 'axios';

const url = `http://localhost:3001/api`;

export const getColors = () => axios.get(url + `/colors`);
export const submit = (payload) => axios.post(url + `/submit`, payload);