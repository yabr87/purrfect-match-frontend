import axios from 'axios';

const noticesInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export const getNotices = async params => {
  try {
    const response = await noticesInstance.get('/api/notices', { params });
    console.log(response);
    return response;
  } catch (error) {
    console.error('Failed to get notices', error);
    throw error;
  }
};

export const addNotice = async newNoticeParams => {
  try {
    const { data: result } = await noticesInstance.post(
      '/api/notices',
      newNoticeParams
    );
    return result;
  } catch (error) {
    console.error('Failed to add notice', error);
    throw error;
  }
};

export const deleteNotice = async id => {
  try {
    const { data } = await noticesInstance.delete(`/api/notices/${id}`);
    return data;
  } catch (error) {
    console.error('Failed to delete notice', error);
    throw error;
  }
};

export const updateNotice = async (id, params) => {
  try {
    const response = await noticesInstance.patch(`/api/notices/${id}`, {
      params,
    });
    return response.data;
  } catch (error) {
    console.error('Failed to update notice', error);
    throw error;
  }
};
