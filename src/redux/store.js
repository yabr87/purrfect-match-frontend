import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';

import petsSlice from './pets/myPetsSlice';
import authSlice from './auth/authSlice';
import { setStore } from 'utils/Api';

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token', 'refreshToken'],
};

const persistAuthReduser = persistReducer(persistConfig, authSlice.reducer);

export const store = configureStore({
  reducer: {
    [authSlice.name]: persistAuthReduser,
    [petsSlice.name]: petsSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

setStore(store);
