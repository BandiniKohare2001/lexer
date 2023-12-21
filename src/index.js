import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ToggleSidebar from './components/Navbar/Navbar';
import DashboardCard from './components/DashboardCard/DashboardCard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<>
  <ToggleSidebar />
  <DashboardCard title="Total Trading Volume" number="$197,559.40"/>
</>

);

