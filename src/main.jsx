import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom';
import { router } from './router.jsx';
import App from './App.jsx';
import UserProvider from './provider/UserProvider.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={router}>
        <App/>
      </RouterProvider>
    </UserProvider>
  </React.StrictMode>,
)
