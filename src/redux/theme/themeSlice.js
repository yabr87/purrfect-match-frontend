import { createSlice } from '@reduxjs/toolkit';

const initialState = 'light';
const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state, actions) => {
      state = actions.payload;
      return state;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
