import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './components/Home.jsx';
import Error from './components/Error.jsx';
import FullRecipes from './components/FullRecipes.jsx';
import Contact from './components/Contact.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <Error/>,
    children: [
    {
    path: "/",
    element: <Home/>
    },
    {
    path: "/home",
    element: <div className='text-4xl'>Home</div>
    },
    {
    path: "/contact",
    element: <Contact/>
    },
    {
    path: "/:fullRecipes",
    element: <FullRecipes/>
    },
    ]
  },
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
