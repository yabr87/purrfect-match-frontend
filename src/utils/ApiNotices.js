import axios from 'axios';

const noticesInstance = axios.create({
  baseURL: `https://purrfect-match.onrender.com`,
});

export const getNotices = async params => {
  const result = await noticesInstance.get('/api/notices', { params });
  return result;
};

export const addNotice = async params => {
  const { data: result } = await noticesInstance.post('/api/notices', {
    params,
  });
  return result;
};

export const deleteNotice = async id => {
  const { data } = await noticesInstance.delete(`/api/notices/${id}`);
  return data;
};

export const updateNotice = async (id, params) => {
  try {
    const response = await noticesInstance.patch(`/api/notices/${id}`, params);
    return response.data;
  } catch (error) {
    console.error('Failed to update notice', error);
    throw error;
  }
};
