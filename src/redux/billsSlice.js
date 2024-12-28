// src/redux/billsSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  monthlyBudget: 50000,
  bills: [
    {
      id: 1,
      description: 'Dominoes',
      category: 'Food & Dining',
      amount: 6000,
      date: '2020-01-02',
    },
    {
      id: 2,
      description: 'Car wash',
      category: 'Utility',
      amount: 500,
      date: '2020-01-06',
    },
    {
      id: 3,
      description: 'Amazon',
      category: 'Shopping',
      amount: 2030,
      date: '2020-01-07',
    },
    {
      id: 4,
      description: 'House rent',
      category: 'Food & Dining',
      amount: 6000,
      date: '2020-01-03',
    },
    {
      id: 5,
      description: 'Tuition',
      category: 'Education',
      amount: 2200,
      date: '2020-01-12',
    },
    {
      id: 6,
      description: 'Laundry',
      category: 'Personal Care',
      amount: 320,
      date: '2020-01-14',
    },
    {
      id: 7,
      description: 'Vacation',
      category: 'Travel',
      amount: 3430,
      date: '2020-01-18',
    },
  ],
  filterCategory: 'All',
  highlightedBills: [],
};

const billsSlice = createSlice({
  name: 'bills',
  initialState,
  reducers: {
    addBill: (state, action) => {
      state.bills.push(action.payload);
    },
    editBill: (state, action) => {
      const { id, updatedData } = action.payload;
      const index = state.bills.findIndex((bill) => bill.id === id);
      if (index !== -1) {
        state.bills[index] = { ...state.bills[index], ...updatedData };
      }
    },
    removeBill: (state, action) => {
      const id = action.payload;
      state.bills = state.bills.filter((bill) => bill.id !== id);
    },
    setFilterCategory: (state, action) => {
      state.filterCategory = action.payload;
    },
    setHighlightedBills: (state, action) => {
      state.highlightedBills = action.payload;
    },
  },
});

export const {
  addBill,
  editBill,
  removeBill,
  setFilterCategory,
  setHighlightedBills,
} = billsSlice.actions;

export default billsSlice.reducer;
