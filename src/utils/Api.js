import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

const setToken = token => {
  if (token) {
    return (instance.defaults.headers.authorization = `Bearer ${token}`);
  }
  instance.defaults.headers.authorization = '';
};

export const signup = async data => {
  const response = await instance.post('/api/users/register', data);
  setToken(response.data.token);
  return response;
};

export const login = async data => {
  const response = await instance.post('/api/users/login', data);
  setToken(response.data.token);
  return response;
};

export const logout = async () => {
  await instance.post('api/users/logout');
  setToken();
};

export const getCurrent = async token => {};

export const getMyPets = async () => {};

export const addMyPet = async data => {};

export const removeMyPet = async id => {};

export default instance;
