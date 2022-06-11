import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:9000';

const api = {
  getPosts: () => axios.get('/posts').then(res => res.data),
};

export default api;
