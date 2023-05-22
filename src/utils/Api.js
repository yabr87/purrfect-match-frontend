import axios from 'axios';

export const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export const setToken = token => {
  instance.defaults.headers.authorization = token ? `Bearer ${token}` : '';
};

instance.interceptors.request.use(config => {
  const accessToken = localStorage.getItem('accessToken');
  config.headers.authorization = accessToken ? `Bearer ${accessToken}` : '';
  return config;
});

let refreshRequest = null;

instance.interceptors.response.use(
  response => response,
  async error => {
    if (error.response.status === 401) {
      if (refreshRequest) {
        await refreshRequest;
        return instance(error.config);
      }
      const refreshToken = localStorage.getItem('refreshToken');
      if (!refreshToken) {
        return Promise.reject(error);
      }
      try {
        refreshRequest = instance.post('api/users/refresh', {
          refreshToken,
        });
        const { data } = await refreshRequest;
        refreshRequest = null;
        localStorage.setItem('accessToken', data.accessToken ?? '');
        localStorage.setItem('refreshToken', data.refreshToken ?? '');
        return instance(error.config);
      } catch (error) {
        return Promise.reject(error);
      }
    }
    if (error.response.status === 403) {
      localStorage.setItem('accessToken', '');
      localStorage.setItem('refreshToken', '');
    }
    return Promise.reject(error);
  }
);

const ERROR_401_MESSAGE = 'You are not authorized. Log in first.';
const ERROR_500_MESSAGE = 'Internal server error.';

export const signup = async data => {
  try {
    const response = await instance.post('/api/users/register', data);
    setToken(response.data.token);
    return response;
  } catch (error) {
    const {
      message: errorMessage,
      response: { status, data: { message: responseMessage }, keyValue } = {},
    } = error;
    switch (status) {
      case 400:
        throw new Error(
          responseMessage ||
            (keyValue?.email && 'Please try another email') ||
            'New user registration has failed'
        );
      case 500:
        throw new Error(ERROR_500_MESSAGE);
      default:
        throw new Error(
          responseMessage || errorMessage || 'New user registration has failed'
        );
    }
  }
};

export const login = async data => {
  try {
    const response = await instance.post('/api/users/login', data);
    setToken(response.data.token);
    return response;
  } catch (error) {
    const {
      message: errorMessage,
      response: { status, data: { message: responseMessage } } = {},
    } = error;
    switch (status) {
      case 400:
        throw new Error('Unsuccessful login attempt. Wrong login or password.');
      case 500:
        throw new Error(`Unsuccessful login attempt. ${ERROR_500_MESSAGE}`);
      default:
        throw new Error(
          responseMessage || errorMessage || 'Unsuccessful login attempt.'
        );
    }
  }
};

export const refresh = async token => {
  try {
    setToken(token);
    const response = await instance.post('/api/users/refresh');
    setToken(response.data.token);
    return response;
  } catch (error) {
    const {
      message: errorMessage,
      response: { status, data: { message: responseMessage } } = {},
    } = error;
    switch (status) {
      case 400:
        throw new Error(
          'Unsuccessful refresh attempt. Wrong login or password.'
        );
      case 401:
        throw new Error(ERROR_401_MESSAGE);
      case 500:
        throw new Error(`Unsuccessful refresh attempt. ${ERROR_500_MESSAGE}`);
      default:
        throw new Error(
          responseMessage || errorMessage || 'Unsuccessful refresh attempt.'
        );
    }
  }
};

export const logout = async () => {
  try {
    const data = await instance.post('/api/users/logout');
    setToken(null);
    return data;
  } catch (error) {
    const {
      message: errorMessage,
      response: { status, data: { message: responseMessage } } = {},
    } = error;
    switch (status) {
      case 401:
        return;
      case 500:
        throw new Error(ERROR_500_MESSAGE);
      default:
        throw new Error(
          responseMessage || errorMessage || 'Failed to log out.'
        );
    }
  }
};

export const getCurrent = async token => {
  try {
    setToken(token);
    const response = await instance.get('/api/users/current');
    return response;
  } catch (error) {
    const {
      message: errorMessage,
      response: {
        status,
        data: { message: responseMessage },
      },
    } = error;
    switch (status) {
      case 401:
        throw new Error(ERROR_401_MESSAGE);
      case 500:
        throw new Error(ERROR_500_MESSAGE);
      default:
        throw new Error(
          responseMessage || errorMessage || 'Failed to get current notices'
        );
    }
  }
};

export const addAvatar = async (token, data) => {
  try {
    setToken(token);
    const response = await instance.patchForm('api/users/current/avatar', data);
    return response;
  } catch (error) {
    const {
      message: errorMessage,
      response: { status, data: { message: responseMessage } } = {},
    } = error;
    switch (status) {
      case 400:
        throw new Error('Unsuccessful to add avatar.');
      case 401:
        throw new Error(ERROR_401_MESSAGE);
      case 500:
        throw new Error(`Unsuccessful to add avatar. ${ERROR_500_MESSAGE}`);
      default:
        throw new Error(
          responseMessage || errorMessage || 'Unsuccessful to add avatar.'
        );
    }
  }
};

export const updateUserInfo = async (token, data) => {
  try {
    setToken(token);
    const response = await instance.patch('api/users/current', data);
    return response;
  } catch (error) {
    const {
      message: errorMessage,
      response: {
        status,
        data: { message: responseMessage },
      },
    } = error;
    switch (status) {
      case 401:
        throw new Error(ERROR_401_MESSAGE);
      case 500:
        throw new Error(ERROR_500_MESSAGE);
      default:
        throw new Error(
          responseMessage || errorMessage || 'Failed to update user info'
        );
    }
  }
};

export default instance;
