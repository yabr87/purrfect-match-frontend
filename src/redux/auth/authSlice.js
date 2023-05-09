import { createSlice } from '@reduxjs/toolkit';
import {
  fetchLogin,
  fetchSignup,
  fetchCurrent,
  fetchLogout,
} from './authOperations';

const initialState = {
  user: {},
  token: '',
  isLogin: false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchSignup.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSignup.fulfilled, (state, { payload }) => {
        const { user, token } = payload;
        state.loading = false;
        state.user = user;
        state.token = token;
        state.isLogin = true;
      })
      .addCase(fetchSignup.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(fetchLogin.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchLogin.fulfilled, (state, { payload }) => {
        console.log('fetchLogin', payload);
        const { user, token } = payload;
        state.loading = false;
        state.user = user;
        state.token = token;
        state.isLogin = true;
      })
      .addCase(fetchLogin.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(fetchCurrent.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCurrent.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.user = payload;
        state.isLogin = true;
      })
      .addCase(fetchCurrent.rejected, (state, { payload }) => {
        state.loading = false;
        state.token = '';
        state.error = payload;
      })
      .addCase(fetchLogout.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchLogout.fulfilled, state => {
        state.loading = false;
        state.user = {};
        state.token = '';
        state.isLogin = false;
      })
      .addCase(fetchLogout.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export default authSlice.reducer;
