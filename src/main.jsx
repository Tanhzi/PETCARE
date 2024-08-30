import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import Introduce from './pages/Introduce/Introduce.jsx';
import Blog from './pages/Blog/Blog.jsx';
import Contact from './pages/Contact/Contact.jsx';
import Information from './pages/Information/Information.jsx';
import Service from './pages/Servicee/Service.jsx';
import Shop from './pages/Shops/Shop.jsx';
import Booking from './pages/Booking/Booking.jsx';
import Login from './components/Login.jsx';
// import Resisterin from './components/Resister.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/intro",
    element: <Introduce/>
  },
  {
    path: "/contact",
    element: <Contact/>
  },
  {
    path: "/blog",
    element: <Blog/>
  },
  {
    path: "/infor",
    element: <Information/>
  },
  {
    path: "/servi",
    element: <Service/>
  },
  {
    path: "/book",
    element: <Booking/>
  },
  {
    path: "/shop",
    element: <Shop/>
  },
  {
    path: "/login",
    element: <Login/>
  },
  // {
  //   path: "/resis",
  //   element: <Resisterin/>
  // },
  


]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
