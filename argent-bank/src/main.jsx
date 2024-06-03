
import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import store from './store/store.jsx'
import { Provider } from 'react-redux'

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
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
)