
import React from 'react';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { Provider, useSelector } from 'react-redux';

import BarChart2 from './BarChart2';
import BarChart3 from './BarChart3';
import PieChart from './PieChart';
import LineChart from './LineChart';
import DoughnutChart from './DoughnutChart';
import RadialChart from './RadialChart';

// Redux Slice
const dashboardSlice = createSlice({
  name: 'dashboard',

  initialState: {
    amount: 438000,
    quantity: 5615,
    profit: 37000,
    aov: 121000,
  },

  reducers: {},
});

// Redux Store
const Store = configureStore({
  reducer: {
    dashboard: dashboardSlice.reducer,
  },
});

// Dashboard Content
function DashboardContent() {
  const { amount, quantity, profit, aov } = useSelector(
    (state) => state.dashboard
  );

  return (
    <div className="dashboard-container">

      {/* Dashboard Header */}
      <div className="dashboard-header">
        <h2>Ecommerce Sales Dashboard</h2>
        <p>Sales Performance Overview</p>
      </div>

      {/* Statistics Cards */}
      <div className="stats-grid">

        <div className="stat-card">
          <h4>Total Amount</h4>
          <h2>₹{amount.toLocaleString('en-IN')}</h2>
        </div>

        <div className="stat-card">
          <h4>Total Quantity</h4>
          <h2>{quantity.toLocaleString('en-IN')}</h2>
        </div>

        <div className="stat-card">
          <h4>Total Profit</h4>
          <h2>₹{profit.toLocaleString('en-IN')}</h2>
        </div>

        <div className="stat-card">
          <h4>Average Order Value</h4>
          <h2>₹{aov.toLocaleString('en-IN')}</h2>
        </div>

      </div>

      {/* Dashboard Charts */}
      <div className="charts-grid">

        <div className="chart-wrapper">
          <BarChart2 />
        </div>

        <div className="chart-wrapper">
          <PieChart />
        </div>

        <div className="chart-wrapper">
          <LineChart />
        </div>

        <div className="chart-wrapper">
          <BarChart3 />
        </div>

        <div className="chart-wrapper">
          <DoughnutChart />
        </div>

        <div className="chart-wrapper">
          <RadialChart />
        </div>

      </div>

    </div>
  );
}

// Main Dashboard
function Dashboard() {
  return (
    <Provider store={Store}>
      <DashboardContent />
    </Provider>
  );
}

export default Dashboard;
