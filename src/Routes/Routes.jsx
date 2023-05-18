/* eslint-disable no-unused-vars */
import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import ViewDetails from "../pages/ViewDetals/ViewDetails";
import CheckOut from "../pages/CheckOut/CheckOut";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
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
        element: <ViewDetails></ViewDetails>,
        loader: ({ params }) => fetch('http://localhost:5000/categories')
      },
      {
        path: 'checkout/:id',
        element: <CheckOut></CheckOut>,
        loader: ({params}) => fetch(`http://localhost:5000/categories/${params.id}`)
      }
    ]
  },
]);



export default router;