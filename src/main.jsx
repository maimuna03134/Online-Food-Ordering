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
import AboutUs from './components/AboutUs/AboutUs.jsx'
import ContactUs from './components/ContactUs/ContactUs.jsx'
import CustomerReview from './components/CustomerReview/CustomerReview.jsx'
import GetOffer from './components/GetOffer/GetOffer.jsx'





const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/home",
        Component: Home,
      },
      {
        path: "/menu",
        Component: Menu,
      },
      {
        path: "/about_us",
        Component: AboutUs,
      },
      {
        path: "/contact_us",
        Component: ContactUs,
      },
      {
        path: "/reviews",
        Component: CustomerReview,
      },
      {
        path: "/offers",
        Component:GetOffer,
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
