import axios from 'axios';

const api = {
  getPosts: (pageNumber) => axios.get(`http://localhost:9000/posts?page=${pageNumber}&limit=8`).then(res => res.data),
};

export default api;
