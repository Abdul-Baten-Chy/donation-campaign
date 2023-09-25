import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Nav from './components/Nav';
import Donation from './components/Donation';
import Stats from './Stats';
import Root from './Root';
import Home from './components/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root> ,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/nav",
        element: <Nav></Nav>,
      },
      {
        path: "/donation",
        element: <Donation></Donation>,
      },
      {
        path: "/state",
        element: <Stats></Stats>,
      },
    ],
  },
]);




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<RouterProvider router={router} />
  </React.StrictMode>,
)
