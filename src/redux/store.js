// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import billsReducer from './billsSlice';
import { loadFromLocalStorage, saveToLocalStorage } from '../utils/localStorage';

const preloadedState = loadFromLocalStorage() || {};

export const store = configureStore({
  reducer: {
    billsState: billsReducer,
  },
  // If you have any preloaded state from localStorage, apply here:
  preloadedState: {
    billsState: preloadedState.billsState || undefined,
  },
});

// Subscribe to store changes and save to local storage
store.subscribe(() => {
  saveToLocalStorage({
    billsState: store.getState().billsState,
  });
});

export default store;
