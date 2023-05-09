import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

const setToken = token => {};

export const signup = async data => {};

export const login = async data => {};

export const logout = async () => {};

export const getCurrent = async token => {};

export default instance;
