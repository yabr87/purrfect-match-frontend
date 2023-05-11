import { createSlice } from '@reduxjs/toolkit';

import { signup, login, logout, current } from './authOperations';

const initialState = {
  user: {},
  isLogin: false,
  token: null,
  isRefreshing: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(signup.pending, store => {
        store.error = null;
      })
      .addCase(signup.fulfilled, (store, { payload }) => {
        store.user = payload.user;
        store.token = payload.token;
        store.isLogin = true;
      })
      .addCase(signup.rejected, (store, { payload }) => {
        store.error = payload;
        store.isLogin = false;
      })
      .addCase(login.pending, store => {
        store.error = null;
      })
      .addCase(login.fulfilled, (store, { payload }) => {
        store.user = payload.user;
        store.token = payload.token;
        store.isLogin = true;
      })
      .addCase(login.rejected, (store, { payload }) => {
        store.error = payload;
        store.isLogin = false;
      })
      .addCase(logout.pending, store => {
        store.isRefreshing = true;
        store.error = null;
      })
      .addCase(logout.fulfilled, store => {
        store.isRefreshing = false;
        store.user = {};
        store.token = null;
        store.isLogin = false;
      })
      .addCase(logout.rejected, (store, { payload }) => {
        store.isRefreshing = false;
        store.error = payload;
      })
      .addCase(current.pending, store => {
        store.isRefreshing = true;
        store.error = null;
      })
      .addCase(current.fulfilled, (store, { payload }) => {
        store.isRefreshing = false;
        store.user = payload;
        store.isLogin = true;
      })
      .addCase(current.rejected, (store, { payload }) => {
        store.isRefreshing = false;
        store.token = null;
        store.error = payload;
      });
  },
});

export default authSlice.reducer;
