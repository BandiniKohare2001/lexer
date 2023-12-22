import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import LeaderBoard from "./views/LeaderBoard/LeaderBoard"
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import LexStack from './views/LexStack/LexStack';
import Dashboard from './views/Dashboard/Dashboard';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path:"/lexstack",
    element: <LexStack />
  },{
    path: "/leaderboard",
    element: <LeaderBoard />
  }
  // {
  //   path: "/liquidity",
  //   element: <Liquidity />
  // }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);

