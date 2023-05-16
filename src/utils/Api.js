import axios from 'axios';

export const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

//добавив тут
export const setToken = token => {
  instance.defaults.headers.authorization = token ? `Bearer ${token}` : '';
};

// const setToken = token => {};

export const signup = async data => {
  const response = await instance.post('/api/users/register', data);
  //добавив тут
  setToken(response.data.token);
  return response;
};

export const login = async data => {
  const response = await instance.post('/api/users/login', data);
  //добавив тут
  setToken(response.data.token);
  return response;
};

export const logout = async () => {};

export const getCurrent = async token => {
  setToken(token);
  const response = await instance.get('/api/users/current');

  return response;
};

export const getMyPets = async () => {};

export const addMyPet = async data => {};

export const removeMyPet = async id => {};

export default instance;
