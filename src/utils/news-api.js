// import axios from 'axios';
import { instance as instanceNews } from './Api';
// const instanceNews = axios.create({
//   baseURL: 'http://localhost:4000/news/',
//   params: {
//     limit: 6,
//   },
// });

export const getAllNews = async params => {
  try {
    const response = await instanceNews.get('/api/news', { params });
    return response;
  } catch (error) {
    console.error('Failed to get notices', error);
    throw error;
  }
};

// export const getQueryNews = async (q, page) => {
//   const { data } = await instanceNews.get('?', { params: { q, page } });
//   return data;
// };
