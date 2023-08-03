import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Product from "./components/Product";
import { productsData } from "./api/Api";

import {
  createBrowserRouter, Outlet,
  RouterProvider, ScrollRestoration
} from "react-router-dom";




const Layout =()=>{
  return (
    <div>

      <Header/>
      <ScrollRestoration/>
      <Outlet/>
      <Footer/>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>,
       loader:productsData,
      },
      {
        path:"/product/:id",
        element:<Product/>,
              },
      
      {
path:"/cart",
element:<Cart/>,
      },
    ],
  }
]);




function App() {
  return (
    <div className="font-bodyFont">
    <RouterProvider router={router}/>
    </div>
  );
}

export default App;