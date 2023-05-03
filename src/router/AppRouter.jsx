import { createBrowserRouter } from "react-router-dom";
import AppRoute from "../pages/AppRoute";
import Home from "../pages/Home";
import Category from "../pages/Category";
import Product from "../pages/Product";
import Order from "../pages/Order";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Cart from "../pages/Cart";
import Login from "../pages/Login";
import PageNotFound from "../pages/PageNotFound";
import Register from "../pages/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppRoute />,
    children: [
      { path: "", index: true, element: <Home /> },
      { path: "/category", element: <Category /> },
      { path: "/product", element: <Product /> },
      { path: "/order", element: <Order /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/cart", element: <Cart /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register/> },
    ],
  },
  { path: "*", element: <PageNotFound /> },
]);
