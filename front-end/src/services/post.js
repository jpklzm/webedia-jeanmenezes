import axios from 'axios';

const postsApi = 'http://localhost:9000/v1/posts/';

export function get(page) {
  return axios.get(postsApi + page);
}

export function getOne(postId) {
  return axios.get(postsApi + 'post/' + postId);
}

const config = {
  headers: {
    'Content-Type': 'application/json',
  },
};

export function post(data) {
  return axios.post(postsApi, data, config);
}
