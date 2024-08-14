import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import Introduce from './pages/Introduce/Introduce.jsx';
import Blog from './pages/Blog/Blog.jsx';
import Contact from './pages/Contact/Contact.jsx';
import Information from './pages/Information/Information.jsx';
import Service from './pages/Servicee/Service.jsx';


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

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
