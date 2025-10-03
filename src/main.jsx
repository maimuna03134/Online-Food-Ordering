import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Cart from './components/Cart/Cart.jsx'
import PlaceOrder from './components/PlaceOrder/PlaceOrder.jsx'
import Root from './components/Root/Root.jsx'
import Home from './components/Home/Home.jsx'



const router = createBrowserRouter([
  {
    path: '/',
    Component: Root
    
  },
  {
    path: '/home',
    Component:Home
  },
  {
    path: '/cart',
    Component:Cart
  },
  {
    path: '/place_order',
    Component:PlaceOrder
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
