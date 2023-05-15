import axios from 'axios';

const instanceNews = axios.create({
  baseURL: 'http://localhost:4000/news/',
  params: {
    limit: 6,
  },
});

export const getAllNews = async (q, page) => {
  const { data } = await instanceNews.get('?', { params: { q, page } });
  return data;
};

// export const getQueryNews = async (q, page) => {
//   const { data } = await instanceNews.get('?', { params: { q, page } });
//   return data;
// };
