import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../utils/ApiMyPets';

export const fetchMyPets = createAsyncThunk(
  'myPets/fetchAll',
  async (_, thunkAPI) => {
    try {
      const data = await api.getMyPets();
      return data;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data.message);
    }
  }
);

export const addMyPet = createAsyncThunk(
  'myPets/addPet',
  async (data, thunkAPI) => {
    try {
      const result = await api.addMyPet(data);
      return result;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data.message);
    }
  }
);

export const deleteMyPet = createAsyncThunk(
  'myPets/deletePet',
  async (id, thunkAPI) => {
    try {
      await api.removeMyPet(id);
      return id;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data.message);
    }
  }
);
