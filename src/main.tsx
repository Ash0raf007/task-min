import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar.tsx';
import About from './pages/About.tsx';
import Store from './pages/Store.tsx';
import { ShoppingCartProvider } from './context/CartContext.tsx';

// Define your routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/phones",
    element: <Store />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

// Render the application
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ShoppingCartProvider>
      <>
      <NavBar />
      <div className='mt-4 container'>
        <RouterProvider router={router} />
      </div>
      </>
    </ShoppingCartProvider>
  </StrictMode>,
);
