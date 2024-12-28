// src/utils/localStorage.js

// Key used in localStorage
const STORAGE_KEY = 'billsManagerData';

// Save state to local storage
export function saveToLocalStorage(state) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(STORAGE_KEY, serializedState);
  } catch (err) {
    console.error('Error saving to localStorage:', err);
  }
}

// Load state from local storage
export function loadFromLocalStorage() {
  try {
    const serializedState = localStorage.getItem(STORAGE_KEY);
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (err) {
    console.error('Error loading from localStorage:', err);
    return undefined;
  }
}
