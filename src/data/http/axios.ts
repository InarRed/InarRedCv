import axios from 'axios';

const $host = axios.create({ baseURL: 'http://localhost:5000/' });

const $authHost = axios.create({ baseURL: process.env.API_URL });

export { $host, $authHost };
