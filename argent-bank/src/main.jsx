
import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import AccountSummary from './pages/AccountSummary.jsx'
import UserProfile from './pages/UserProfile.jsx'
import Error_404 from './pages/Error_404.jsx'

import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/accounts/:userId",
    element: <AccountSummary />,
  },
  {
  path: "/user/:userId",
  element: <UserProfile />,
  },
  {
    path: "*",
    element: <Error_404 />
  }
  

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)