import axios from 'axios';

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

export const fetchArticles = async () => {
  const response = await api.get('/posts');
  return response.data;
};
