// src/components/BillList.js
import React from 'react';
import { useSelector } from 'react-redux';
import BillItem from './BillItem';

function BillList() {
  const { bills, filterCategory } = useSelector((state) => state.billsState);

  const filteredBills =
    filterCategory === 'All'
      ? bills
      : bills.filter((bill) => bill.category === filterCategory);

  return (
    <div className="card">
      <div className="card-header">Bills</div>
      <div className="list-group">
        {filteredBills.map((bill) => (
          <BillItem key={bill.id} bill={bill} />
        ))}
      </div>
    </div>
  );
}

export default BillList;
