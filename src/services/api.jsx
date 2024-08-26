import axios from 'axios';

export const key = '092b3c2b';

const api = axios.create({
    baseURL: 'https://api.hgbrasil.com'
})

export default api;