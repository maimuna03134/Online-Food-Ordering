import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Cart from './components/Cart/Cart.jsx'
import PlaceOrder from './components/PlaceOrder/PlaceOrder.jsx'
import Root from './components/Root/Root.jsx'
import Home from './components/Home/Home.jsx'
import Menu from './components/Menu/Menu.jsx'





const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    children: [
      {
        index: true,
        Component:Home,
      },
      {
        path: "/home",
        Component:Home,
      },
      {
        path: '/menu',
        Component:Menu,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/place_order",
        element: <PlaceOrder />,
      },
    ],
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
