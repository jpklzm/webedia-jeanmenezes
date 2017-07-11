import axios from 'axios';

const postsApi = 'http://localhost:9000/v1/posts';

export function get() {
  return axios.get(postsApi);
}

const config = {
  headers: {
    'Content-Type': 'application/json',
  },
};

export function post(data) {
  return axios.post(postsApi, data, config);
}
