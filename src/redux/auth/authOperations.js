import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../utils/Api';
import { toast } from 'react-toastify';

export const signup = createAsyncThunk(
  'auth/signup',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.signup(data);
      return result.data;
    } catch ({ message }) {
      return rejectWithValue(message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.login(data);
      return result.data;
    } catch ({ message }) {
      return rejectWithValue(message);
    }
  }
);

export const refresh = createAsyncThunk(
  'auth/refresh',
  async (_, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState();
      const result = await api.refresh(auth.token);
      return result.data;
    } catch ({ message }) {
      return rejectWithValue(message);
    }
  },
  {
    condition: (_, { getState }) => {
      const { auth } = getState();
      if (!auth.token) {
        return false;
      }
    },
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      const result = await api.logout();
      toast.success('Log out successfully');
      return result.data;
    } catch ({ message }) {
      return rejectWithValue(message);
    }
  }
);

export const current = createAsyncThunk(
  'auth/current',
  async (_, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState();
      const { data } = await api.getCurrent(auth.token);
      return data;
    } catch ({ message }) {
      return rejectWithValue(message);
    }
  },
  {
    condition: (_, { getState }) => {
      const { auth } = getState();
      if (!auth.token) {
        return false;
      }
    },
  }
);
