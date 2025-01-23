// @ts-nocheck
import { createBrowserRouter } from 'react-router-dom'
import ProtectedLayout from '../layout/Protcted-Layout'
import PublicLayout from '../layout/Public-Layout'
import NotFoundPage from '../pages/Not-Found'
import Home from '../pages/Home'
import Dashboard from '../pages/Dashboard'
import Login from '../pages/Login'
import Checkout from '../pages/Checkout'

export const routers = createBrowserRouter([
  {
    path: '/',
    element: <PublicLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/checkout',
        element: <Checkout />,
      },
    ],
  },
  {
    path: '/',
    element: <ProtectedLayout />,
    children: [
      {
        path: '/dashboard',
        element: <Dashboard />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
])
