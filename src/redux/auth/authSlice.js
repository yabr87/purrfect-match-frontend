import { createSlice } from '@reduxjs/toolkit';

import { signup, login, refresh, logout, current } from './authOperations';

const initialState = {
  user: {},
  isLogin: false,
  token: null,
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
  store.token = payload.token;
  store.isLogin = true;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearError: state => {
      state.error = null;
    },
    statusIsRegister: (state, { payload }) => {
      state.isRegister = payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(signup.pending, handlePending)
      .addCase(signup.fulfilled, handleLogin)
      .addCase(signup.rejected, handleRejected)
      .addCase(login.pending, handlePending)
      .addCase(login.fulfilled, handleLogin)
      .addCase(login.rejected, handleRejected)
      .addCase(refresh.pending, handlePending)
      .addCase(refresh.fulfilled, handleLogin)
      .addCase(refresh.rejected, handleRejected)
      .addCase(logout.pending, handlePending)
      .addCase(logout.fulfilled, () => initialState)
      .addCase(logout.rejected, (store, { payload }) => ({
        ...initialState,
        error: payload,
      }))
      .addCase(current.pending, handlePending)
      .addCase(current.fulfilled, (store, { payload }) => {
        store.isRefreshing = false;
        store.user = payload;
      })
      .addCase(current.rejected, handleRejected);
  },
});

export default authSlice;
export const { clearError, statusIsRegister } = authSlice.actions;
