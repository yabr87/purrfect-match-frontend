import instance from './Api';
//!!-----------------------{search, page}-------------------------
export const getAllNews = async page => {
  const { data } = await instance.get('/api/news', {
    params: { page },
  });
  return data;
};
