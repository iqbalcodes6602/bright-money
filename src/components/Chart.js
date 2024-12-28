// src/components/Chart.js
import React from 'react';
import { useSelector } from 'react-redux';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import dayjs from 'dayjs';

// Helper to group amounts by date
function prepareChartData(bills) {
  const dateMap = {};

  bills.forEach((bill) => {
    const dateKey = dayjs(bill.date).format('YYYY-MM-DD');
    if (!dateMap[dateKey]) {
      dateMap[dateKey] = 0;
    }
    dateMap[dateKey] += bill.amount;
  });

  const sortedDates = Object.keys(dateMap).sort();
  return sortedDates.map((date) => ({
    date,
    amount: dateMap[date],
  }));
}

function Chart() {
  const bills = useSelector((state) => state.billsState.bills);
  const data = prepareChartData(bills);

  return (
    <div style={{ width: '100%', minHeight: '300px' }}>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="amount" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Chart;
