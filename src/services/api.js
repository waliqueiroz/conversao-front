import axios from 'axios';

const api = axios.create({baseURL: 'https://teste-ffwd.herokuapp.com/'});

export default api;