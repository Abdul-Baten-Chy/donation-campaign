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
import Details from './components/Details/Details';
import ShowDonation from './components/ShowDonation';

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
        loader:()=> fetch('../info.json'),
      },
      {
        path: "/state",
        element: <Stats></Stats>,
      },
      {
        path: "/details/:id",
        element: <Details></Details>,
        loader: ()=> fetch('../info.json'),
      },
      {
        path: "/details/:id",
        element: <ShowDonation></ShowDonation>,
        
      },
    ],
  },
]);




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<RouterProvider router={router} />
  </React.StrictMode>,
)
