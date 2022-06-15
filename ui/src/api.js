
const baseURL = 'http://localhost:9000';

const api = {
  getPostsUrl: page => `${baseURL}/posts?limit=${8}&page=${page}`,
};

export default api;
