import axios from 'axios';

const postsApi = 'http://localhost:9000/v1/posts';

export function get() {
  return axios.get(postsApi);
}
