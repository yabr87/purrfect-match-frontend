import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import contactsReducer from './contacts/contactsSlice';
import filterReducer from './filter/filterSlice';
import authReducer from './auth/authSlice';

import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['token'],
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);

const rootReducer = combineReducers({
  auth: persistedAuthReducer,
  contacts: contactsReducer,
  filter: filterReducer,
});

export default rootReducer;
