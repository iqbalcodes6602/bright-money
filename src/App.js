// src/App.js
import React from 'react';
import BillDashboard from './components/BillDashboard';

import './styles.css';

function App() {
  return (
    <div className="container my-4">
      <h1 className="text-center mb-4">
        <b>
          Monthly Bills Manager
        </b>
      </h1>
      <BillDashboard />
    </div>
  );
}

export default App;
