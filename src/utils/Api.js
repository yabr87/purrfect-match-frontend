import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

// const setToken = token => {};

export const signup = async data => {};

export const login = async data => {};

export const logout = async () => {};

export const getCurrent = async token => {};

export const getMyPets = async () => {};

export const addMyPet = async data => {};

export const removeMyPet = async id => {};

export default instance;
