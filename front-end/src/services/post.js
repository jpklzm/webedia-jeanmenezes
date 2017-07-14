import axios from 'axios';

const postsApi = 'http://localhost:9000/v1/posts/';

export function get(page) {
  return axios.get(postsApi + page);
}

const config = {
  headers: {
    'Content-Type': 'application/json',
  },
};

export function post(data) {
  return axios.post(postsApi, data, config);
}
