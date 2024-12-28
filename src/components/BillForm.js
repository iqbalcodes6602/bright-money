// src/components/BillForm.js

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBill } from '../redux/billsSlice';

function BillForm() {
  const dispatch = useDispatch();
  const bills = useSelector((state) => state.billsState.bills);

  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const handleAddBill = () => {
    if (!description || !category || !amount || !date) return;

    // Generate new ID
    const newId = bills.length ? Math.max(...bills.map((b) => b.id)) + 1 : 1;

    dispatch(
      addBill({
        id: newId,
        description,
        category,
        amount: Number(amount),
        date,
      })
    );

    // Clear
    setDescription('');
    setCategory('');
    setAmount('');
    setDate('');
  };

  return (
    <div className="card mb-4">
      <div className="card-header">Add New Bill</div>
      <div className="card-body">
        <div className="mb-3">
          <label className="form-label">Description</label>
          <input
            type="text"
            className="form-control"
            placeholder="e.g. Grocery"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Category</label>
          <input
            type="text"
            className="form-control"
            placeholder="e.g. Food & Dining"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Amount</label>
          <input
            type="number"
            className="form-control"
            placeholder="e.g. 1000"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Date</label>
          <input
            type="date"
            className="form-control"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <button className="btn btn-primary" onClick={handleAddBill}>
          Add Bill
        </button>
      </div>
    </div>
  );
}

export default BillForm;
