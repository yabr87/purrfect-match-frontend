import instance from './Api';

export const getAllNews = async params => {
  const response = await instance.get('/api/news', { params });
  return response;
};
