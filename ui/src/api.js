import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:9000';

const api = {
    getPosts: (start, count) => axios.get(`http://localhost:9000/posts?start=${start}&count=${count}`).then(res => res.data),
};

export default api;