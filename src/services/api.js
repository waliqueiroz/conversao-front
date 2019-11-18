import axios from 'axios';

const api = axios.create({baseURL: 'https://jsonbox.io/box_ecb73b15b931edd8ad8d'});

export default api;