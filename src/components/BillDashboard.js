// src/components/BillDashboard.js

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterCategory, setHighlightedBills } from '../redux/billsSlice';
import BillForm from './BillForm';
import BillList from './BillList';
import Chart from './Chart';
import findMinimalSubset from '../utils/findMinimalSubset';

function BillDashboard() {
  const dispatch = useDispatch();
  const { monthlyBudget, filterCategory, bills } = useSelector(
    (state) => state.billsState
  );

  // Compute total monthly billed amount
  const totalBilled = bills.reduce((acc, bill) => acc + bill.amount, 0);

  // Handle category filter
  const handleFilterChange = (e) => {
    dispatch(setFilterCategory(e.target.value));
  };

  // Level-2: find minimal subset
  const handleHighlightMinimalSubset = () => {
    const minimalSubset = findMinimalSubset(bills, monthlyBudget);
    const subsetIds = minimalSubset.map((b) => b.id);
    dispatch(setHighlightedBills(subsetIds));
  };

  return (
    <div className="row">
      {/* Left Column: Stats & Controls */}
      <div className="col-12 col-md-4 mb-3">
        <div className="card mb-3">
          <div className="card-body">
            <h4>Total Billed: <span className="text-primary">{totalBilled}</span></h4>
            <h5>Monthly Budget: <span className="text-success">{monthlyBudget}</span></h5>
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">Filter by Category</label>
          <select
            className="form-select"
            value={filterCategory}
            onChange={handleFilterChange}
          >
            <option value="All">All</option>
            <option value="Food & Dining">Food & Dining</option>
            <option value="Utility">Utility</option>
            <option value="Shopping">Shopping</option>
            <option value="Education">Education</option>
            <option value="Personal Care">Personal Care</option>
            <option value="Travel">Travel</option>
          </select>
        </div>

        <div className="d-grid gap-2 mb-3">
          <button
            className="btn btn-outline-info"
            onClick={handleHighlightMinimalSubset}
          >
            Highlight Min-Bills Subset Under Budget
          </button>
        </div>
        <BillForm />
      </div>

      {/* Right Column: Form + List + Chart */}
      <div className="col-12 col-md-8">

        <div className="row">
          <div className="col-12">
            <h4 className="mb-3">Monthly Billing Chart</h4>
            <div className="chart-container" style={{ overflowX: 'auto' }}>
              <Chart />
            </div>
          </div>
          <div className="col-12 mb-4">
            <BillList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BillDashboard;
