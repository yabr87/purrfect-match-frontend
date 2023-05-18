import instance from './Api';
//!!-----------------------{search, page}-------------------------
// export const getAllNews = async page => {
//   const { data } = await instance.get('/api/news', {
//     params: { page },
//   });
//   return data;
// };

export const getAllNews = async params => {
  const response = await instance.get('/api/news', { params });
  return response;
};
