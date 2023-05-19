import { createSlice } from '@reduxjs/toolkit';

import { fetchMyPets, addMyPet, deleteMyPet } from './myPetsOperations';

const initialState = {
  myPets: [],
  isLoading: false,
  events: null,
  error: null,
};

const petsSlice = createSlice({
  name: 'myPets',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchMyPets.pending, store => {
        store.isLoading = true;
        store.events = 'fetch';
      })
      .addCase(fetchMyPets.fulfilled, (store, { payload }) => {
        store.isLoading = false;
        store.myPets = payload;
        store.events = null;
      })
      .addCase(fetchMyPets.rejected, (store, { payload }) => {
        store.isLoading = false;
        store.error = payload;
        store.events = null;
      })
      .addCase(addMyPet.pending, store => {
        store.isLoading = true;
        store.events = 'add';
      })
      .addCase(addMyPet.fulfilled, (store, { payload }) => {
        store.isLoading = false;
        store.events = null;
        store.myPets.push(payload);
      })
      .addCase(addMyPet.rejected, (store, { payload }) => {
        store.isLoading = false;
        store.events = null;
        store.error = payload;
      })
      .addCase(deleteMyPet.pending, (store, { meta }) => {
        store.isLoading = true;
        store.events = `${meta.arg}`;
      })
      .addCase(deleteMyPet.fulfilled, (store, { meta }) => {
        store.isLoading = false;
        store.error = null;
        store.events = null;
        const index = store.myPets.findIndex(item => item.id === meta.arg);
        store.myPets.splice(index, 1);
      })
      .addCase(deleteMyPet.rejected, (store, { payload }) => {
        store.isLoading = false;
        store.error = payload;
        store.events = null;
      });
  },
});

export default petsSlice;
