// src/App.js
import React from 'react';
import BillDashboard from './components/BillDashboard';

function App() {
  return (
    <div className="container my-4">
      <h1 className="text-center mb-4">Monthly Bills Manager</h1>
      <BillDashboard />
    </div>
  );
}

export default App;
