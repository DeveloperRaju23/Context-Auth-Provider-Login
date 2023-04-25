import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Component/Layout/Main';
import Home from './Component/Header/Home/Home';
import Login from './Component/Login/Login';
import Services from './Component/Services/Services';
import About from './Component/About/About';
import Contact from './Component/Contact/Contact';
import Register from './Component/Register/Register';
import AuthProvider from './Provider/AuthProvider';
import Profile from './Component/Profile/Profile';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/about",
        element:<About></About>
      },
      {
        path:"/services",
        element:<Services></Services>
      },
      {
        path:"/contact",
        element:<Contact></Contact>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/profile",
        element:<Profile></Profile>
      },
      {
        path:"/register",
        element:<Register></Register>
      },
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

       <AuthProvider>
       <RouterProvider router={router} />
       </AuthProvider>

  </React.StrictMode>,
)
