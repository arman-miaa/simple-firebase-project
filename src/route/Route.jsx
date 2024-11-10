import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../pages/Home";
import LogingPage from "../pages/LogingPage";



const router = createBrowserRouter([
  {
    path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: 'login',
                element: <LogingPage></LogingPage>,
            },
    ],
  },
]);



export default router;