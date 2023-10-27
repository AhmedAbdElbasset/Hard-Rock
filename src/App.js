import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import { ToastContainer } from "react-toastify";
import TrackOrderPage from "./Pages/TrackOrderPage";
import LoginPage from "./Pages/LoginPage";
import ContactPage from "./Pages/Contact";
import ProductDetailsPage from "./Pages/ProductDetailsPage";
function App() {
  const [productID, setProductId] = useState()
  const getProductID = (pI) => {
      setProductId(pI)
    }
  const router = createBrowserRouter([
    { path: '/', element: <Home getProductId={getProductID} /> }
    , { path: '/productDetails/:id', element: <ProductDetailsPage productID={productID} /> },
    { path: '/trackOrder', element: <TrackOrderPage /> },
    { path: '/login', element: <LoginPage /> },
    {path:'/Contact',element:<ContactPage/>}
  ])
  return (
    <React.Fragment>
    <ToastContainer/>
      <RouterProvider   router={router}/>
    </React.Fragment>
  )
}

export default App;
