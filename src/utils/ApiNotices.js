import { instance as noticesInstance } from './Api';

export const getNotices = async params => {
  try {
    const response = await noticesInstance.get('/api/notices', { params });
    return response;
  } catch (error) {
    console.error('Failed to get notices', error);
    throw error;
  }
};

export const getNoticeById = async id => {
  try {
    const { data } = await noticesInstance.get(`/api/notices/${id}`);
    return data;
  } catch (error) {
    console.error('Failed to delete notice', error);
    throw error;
  }
};

export const addNotice = async newNoticeParams => {
  try {
    const { data } = await noticesInstance.postForm(
      '/api/notices',
      newNoticeParams
    );
    return data;
  } catch (error) {
    console.error('Failed to add notice', error);
    throw error;
  }
};

export const editNotice = async (id, updatedFields) => {
  try {
    const { data } = await noticesInstance.patch(`/api/notices/${id}`, updatedFields);
    return data;
  } catch (error) {
    console.error('Failed to edit notice', error);
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

export const updateFavoriteNotice = async (id, params) => {
  try {
    const { data } = await noticesInstance.patch(
      `/api/notices/${id}/favorite`,
      params
    );
    return data;
  } catch (error) {
    console.error('Failed to update notice', error);
    throw error;
  }
};
