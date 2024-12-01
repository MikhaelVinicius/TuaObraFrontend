
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://tuaobra-53a3ce60b364.herokuapp.com/api', // URL do seu backend no Heroku
});

export default api;
