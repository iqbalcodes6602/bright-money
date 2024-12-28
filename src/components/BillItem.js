// src/components/BillItem.js

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editBill, removeBill } from '../redux/billsSlice';

function BillItem({ bill }) {
  const dispatch = useDispatch();
  const highlightedBills = useSelector(
    (state) => state.billsState.highlightedBills
  );
  const isHighlighted = highlightedBills.includes(bill.id);

  const [isEditing, setIsEditing] = useState(false);
  const [description, setDescription] = useState(bill.description);
  const [category, setCategory] = useState(bill.category);
  const [amount, setAmount] = useState(bill.amount);
  const [date, setDate] = useState(bill.date);

  const handleSave = () => {
    dispatch(
      editBill({
        id: bill.id,
        updatedData: {
          description,
          category,
          amount: Number(amount),
          date,
        },
      })
    );
    setIsEditing(false);
  };

  const handleDelete = () => {
    dispatch(removeBill(bill.id));
  };

  return (
    <div
      className={`list-group-item ${
        isHighlighted ? 'list-group-item-success' : ''
      }`}
    >
      {isEditing ? (
        <div className="mb-2">
          <input
            className="form-control mb-1"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            className="form-control mb-1"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <input
            className="form-control mb-1"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <input
            className="form-control mb-1"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <button className="btn btn-sm btn-success me-2" onClick={handleSave}>
            Save
          </button>
          <button
            className="btn btn-sm btn-secondary"
            onClick={() => setIsEditing(false)}
          >
            Cancel
          </button>
        </div>
      ) : (
        <div>
          <div><strong>{bill.description}</strong></div>
          <div>Category: {bill.category}</div>
          <div>Amount: {bill.amount}</div>
          <div>Date: {bill.date}</div>
          <div className="mt-2">
            <button
              className="btn btn-sm btn-outline-primary me-2"
              onClick={() => setIsEditing(true)}
            >
              Edit
            </button>
            <button
              className="btn btn-sm btn-danger"
              onClick={handleDelete}
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default BillItem;
