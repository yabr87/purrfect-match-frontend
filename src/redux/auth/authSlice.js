import { createSlice } from '@reduxjs/toolkit';

import { signup, login, refresh, logout, current } from './authOperations';

const initialState = {
  user: {},
  isLogin: false,
  token: null,
  refreshToken: null,
  isRefreshing: false,
  error: null,
  isRegister: false,
};

const handlePending = store => {
  store.isRefreshing = true;
  store.error = null;
};

const handleRejected = (store, { payload }) => {
  store.isRefreshing = false;
  store.error = payload;
};

const handleLogin = (store, { payload }) => {
  store.isRefreshing = false;
  store.user = payload.user;
  store.token = payload.accessToken;
  store.refreshToken = payload.refreshToken;
  store.isLogin = true;
  window.localStorage.setItem('accessToken', payload.accessToken);
  window.localStorage.setItem('refreshToken', payload.refreshToken);
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearError: store => {
      store.error = null;
    },
    statusIsRegister: (store, { payload }) => {
      store.isRegister = payload;
    },
    setTokens: (store, { payload }) => {
      store.token = payload.accessToken;
      store.refreshToken = payload.refreshToken;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(signup.pending, handlePending)
      .addCase(signup.fulfilled, (store, { payload }) => {
        handleLogin(store, { payload });
        store.isRegister = true;
      })
      .addCase(signup.rejected, handleRejected)
      .addCase(login.pending, handlePending)
      .addCase(login.fulfilled, handleLogin)
      .addCase(login.rejected, handleRejected)
      .addCase(refresh.pending, handlePending)
      .addCase(refresh.fulfilled, handleLogin)
      .addCase(refresh.rejected, (store, { payload }) => {
        store.isRefreshing = false;
        store.error = payload;
        store.token = '';
        store.refreshToken = '';
      })
      .addCase(logout.pending, handlePending)
      .addCase(logout.fulfilled, () => initialState)
      .addCase(logout.rejected, (store, { payload }) => ({
        ...initialState,
        error: payload,
      }))
      .addCase(current.pending, handlePending)
      .addCase(current.fulfilled, (store, { payload }) => {
        store.isRefreshing = false;
        store.isLogin = true;
        store.user = payload;
      })
      .addCase(current.rejected, handleRejected);
  },
});

export default authSlice;
export const { clearError, statusIsRegister, setTokens } = authSlice.actions;
