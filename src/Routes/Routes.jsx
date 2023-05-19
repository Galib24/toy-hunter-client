/* eslint-disable no-unused-vars */
import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import ViewDetails from "../pages/ViewDetals/ViewDetails";
import CheckOut from "../pages/CheckOut/CheckOut";
import Orders from "../pages/oders/Orders";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../pages/Error/ErrorPage";
import BlogPage from "../pages/Blog/BlogPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'signup',
        element: <SignUp></SignUp>
      },
      {
        path: 'viewDetails/:detailsId',
        element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
        loader: ({ params }) => fetch('http://localhost:5000/categories')
      },
      {
        path: 'checkout/:id',
        element: <CheckOut></CheckOut>,
        loader: ({params}) => fetch(`http://localhost:5000/categories/${params.id}`)
      },
      {
        path: 'orders',
        element: <PrivateRoute><Orders></Orders></PrivateRoute>
      },
      {
        path: 'blog',
        element: <BlogPage></BlogPage>
      }
    
    ]
  },
]);



export default router;